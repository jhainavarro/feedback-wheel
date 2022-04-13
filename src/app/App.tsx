import { Link, Outlet } from "react-router-dom";
import "./App.styles.ts";
import { StylesProvider } from "./StylesProvider";
import { useStyles } from "./App.styles";
import { Button, Title } from "@mantine/core";

export function App() {
  const { classes } = useStyles();

  return (
    <StylesProvider>
      <div className={classes.app}>
        <div className={classes.header}>
          <Title className={classes.logo}>Feedback Wheel</Title>

          <nav className={classes.nav}>
            <Button<typeof Link> component={Link} to="/home">
              Home
            </Button>
            <Button<typeof Link> component={Link} to="/request-review">
              Request reviews
            </Button>
          </nav>
        </div>

        <div className={classes.content}>
          <Outlet />
        </div>
      </div>
    </StylesProvider>
  );
}
