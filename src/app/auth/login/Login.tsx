import {
  ActionIcon,
  Anchor,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { ReactComponent as Google } from "shared/assets/google.svg";
import { ReactComponent as Twitter } from "shared/assets/twitter.svg";
import { ReactComponent as Facebook } from "shared/assets/facebook.svg";
import { useStyles } from "./Login.styles";
import { Link } from "react-router-dom";

interface LoginProps {
  className?: string;
}

export function Login({ className }: LoginProps) {
  const { classes } = useStyles();

  return (
    <div className={className}>
      <form className={classes.form}>
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

        <TextInput className={classes.input} placeholder="Email" />
        <PasswordInput className={classes.input} placeholder="Password" />

        {/* TODO: Forgot pw flow */}
        <Anchor className={classes.forgotPw} component={Link} to="/">
          Forgot your password?
        </Anchor>

        <Button className={classes.submit}>Sign In</Button>
      </form>
    </div>
  );
}
