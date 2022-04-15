import {
  Anchor,
  Button,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export function Login() {
  return (
    <form>
      <Title>Sign in</Title>

      <div>
        <Button>Log in with Google</Button>
        <Button>Log in with Twitter</Button>
        <Button>Log in with Facebook</Button>
      </div>

      <Text>or use your account</Text>

      <TextInput placeholder="Email" />
      <PasswordInput placeholder="Password" />
      <Anchor href=".">Forgot your password?</Anchor>

      <Button>Sign In</Button>
    </form>
  );
}
