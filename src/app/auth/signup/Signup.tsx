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

interface SignupProps {
  className?: string;
}

export function Signup({ className }: SignupProps) {
  const { classes } = useStyles();

  return (
    <div className={className}>
      <form className={classes.form}>
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

        <TextInput className={classes.input} placeholder="Name" />
        <TextInput className={classes.input} placeholder="Email" />
        <PasswordInput className={classes.input} placeholder="Password" />

        <Button className={classes.submit}>Sign Up</Button>
      </form>
    </div>
  );
}
