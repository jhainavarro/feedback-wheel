import { Button, Container, Text, Title } from "@mantine/core";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useStyles } from "./AuthPage.styles";
import { Login } from "./login/Login";
import { useAuth } from "./provider/AuthContext";
import { Signup } from "./signup/Signup";

export function AuthPage() {
  const { user } = useAuth();
  const { classes, cx } = useStyles();
  const [active, setActive] = useState<"signup" | "login">("login");

  if (user) {
    return <Navigate replace to="/home" />;
  }

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
              <div></div>
              <div>
                <Title>Welcome Back!</Title>
                <Text>To keep connected with us please login</Text>
                <Text>with your account</Text>
              </div>

              <footer>
                <Text size="xs" pb={4}>
                  Don't have an account yet?
                </Text>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => setActive("signup")}
                >
                  Sign up here
                </Button>
              </footer>
            </div>

            <div className={cx("signup-prompt", classes.prompt)}>
              <div></div>
              <div>
                <Title>Hey, Creator!</Title>
                <Text>Enter your details and start your journey</Text>
                <Text>with us</Text>
              </div>

              <footer>
                <Text size="xs" pb={4}>
                  Already have an account?
                </Text>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => setActive("login")}
                >
                  Log in here
                </Button>
              </footer>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
