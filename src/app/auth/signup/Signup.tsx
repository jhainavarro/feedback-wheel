import { Button, PasswordInput, Text, TextInput, Title } from "@mantine/core";

export function Signup() {
  return (
    <form>
      <Title>Create Account</Title>

      <div>
        <Button>Sign up with Google</Button>
        <Button>Sign up with Twitter</Button>
        <Button>Sign up with Facebook</Button>
      </div>

      <Text>or use your email for registration</Text>

      <TextInput placeholder="Name" />
      <TextInput placeholder="Email" />
      <PasswordInput placeholder="Password" />

      <Button>Sign Up</Button>
    </form>
  );
}
