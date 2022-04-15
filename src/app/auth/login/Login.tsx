import {
  ActionIcon,
  Anchor,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Google } from "shared/assets/google.svg";
import { ReactComponent as Twitter } from "shared/assets/twitter.svg";
import { ReactComponent as Facebook } from "shared/assets/facebook.svg";
import { toast } from "shared/components";
import { useAuth } from "../provider/AuthContext";
import { useStyles } from "./Login.styles";
import { getInitialValues, Inputs, schema } from "./Login.helpers";
import { useLogin } from "../auth.api";

interface LoginProps {
  className?: string;
}

export function Login({ className }: LoginProps) {
  const { onLogin } = useAuth();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const { mutate: login, isLoading } = useLogin();
  const form = useForm({
    initialValues: getInitialValues(),
    schema: zodResolver(schema),
  });

  function handleSubmit(data: Inputs) {
    login(data, {
      onSuccess(user) {
        onLogin(user);
        navigate("/home");
        toast.success({
          message: "Welcome back! 👋",
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
        <Title className={classes.title}>Sign in</Title>

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
          {...form.getInputProps("email")}
          className={classes.input}
          placeholder="Email"
        />

        <PasswordInput
          {...form.getInputProps("password")}
          className={classes.input}
          placeholder="Password"
        />

        {/* TODO: Forgot pw flow */}
        <Anchor className={classes.forgotPw} component={Link} to="/">
          Forgot your password?
        </Anchor>

        <Button className={classes.submit} type="submit" loading={isLoading}>
          Log In
        </Button>
      </form>
    </div>
  );
}
