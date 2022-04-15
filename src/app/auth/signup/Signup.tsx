import {
  ActionIcon,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Google } from "shared/assets/google.svg";
import { ReactComponent as Twitter } from "shared/assets/twitter.svg";
import { ReactComponent as Facebook } from "shared/assets/facebook.svg";
import { useStyles } from "./Signup.styles";
import { getInitialValues, Inputs, schema } from "./Signup.helpers";
import { toast } from "shared/components";
import { useSignup } from "../auth.api";
import { useAuth } from "../provider/AuthContext";

interface SignupProps {
  className?: string;
}

export function Signup({ className }: SignupProps) {
  const { onSignup } = useAuth();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { mutate: signup, isLoading } = useSignup();
  const form = useForm({
    initialValues: getInitialValues(),
    schema: zodResolver(schema),
  });

  function handleSubmit(data: Inputs) {
    signup(data, {
      onSuccess(newUser) {
        onSignup(newUser);
        navigate("/home"); // TODO: Redirect to onboarding page
        toast.success({
          title: "Welcome! 🎉",
          message:
            "Glad to have you with us! Please feel free to explore the videos, and even submit one for others to check out!",
        });
      },
      onError() {
        // TODO: Show error message
      },
    });
  }

  return (
    <div className={className}>
      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
        <Title className={classes.title}>Create Account</Title>

        {/* TODO: SSO logic */}
        <div className={classes.socials}>
          <ActionIcon size="lg">
            <Google />
          </ActionIcon>
          <ActionIcon size="lg">
            <Twitter />
          </ActionIcon>
          <ActionIcon size="lg">
            <Facebook />
          </ActionIcon>
        </div>

        <Text color="gray">——— or ———</Text>

        <TextInput
          {...form.getInputProps("name")}
          className={classes.input}
          placeholder="Name"
        />

        <TextInput
          {...form.getInputProps("email")}
          className={classes.input}
          placeholder="Email"
        />

        <PasswordInput
          {...form.getInputProps("password")}
          className={classes.input}
          placeholder="Password"
        />

        <Button type="submit" className={classes.submit} loading={isLoading}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
