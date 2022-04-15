import { Button, Container, Text, Title } from "@mantine/core";
import { useState } from "react";
import { useStyles } from "./AuthPage.styles";
import { Login } from "./login/Login";
import { Signup } from "./signup/Signup";

export function AuthPage() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<"signup" | "login">("login");

  return (
    <div className={classes.grid}>
      <Container size="md" px={0} className={classes.container}>
        <div className={classes.forms}>
          <Signup />
          <Login />
        </div>

        <div
          className={cx(classes.window, {
            "login-active": active === "login",
            "signup-active": active === "signup",
          })}
        >
          <div className={classes.prompts}>
            <div className={cx("login-prompt", classes.prompt)}>
              <Title>Welcome Back!</Title>
              <Text>
                To keep connected with us please login with your personal info
              </Text>

              <Text>Don't have an account yet?</Text>
              <Button variant="outline" onClick={() => setActive("signup")}>
                Sign up here
              </Button>
            </div>

            <div className={cx("signup-prompt", classes.prompt)}>
              <Title>Hey, Creator!</Title>
              <Text>Enter your personal details and start journey with us</Text>

              <Text>Already have an account?</Text>
              <Button variant="outline" onClick={() => setActive("login")}>
                Log in here
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
