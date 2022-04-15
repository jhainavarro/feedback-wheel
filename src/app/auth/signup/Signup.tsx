import {
  ActionIcon,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { ReactComponent as Google } from "shared/assets/google.svg";
import { ReactComponent as Twitter } from "shared/assets/twitter.svg";
import { ReactComponent as Facebook } from "shared/assets/facebook.svg";
import { useStyles } from "./Signup.styles";
import { useForm, zodResolver } from "@mantine/form";
import { getInitialValues, Inputs, schema } from "./Signup.helpers";

interface SignupProps {
  className?: string;
}

export function Signup({ className }: SignupProps) {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: getInitialValues(),
    schema: zodResolver(schema),
  });

  function handleSubmit(data: Inputs) {
    console.log(data);
  }

  return (
    <div className={className}>
      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
        <Title className={classes.title}>Create Account</Title>

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

        <Button type="submit" className={classes.submit}>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
