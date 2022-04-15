import { Link, Outlet } from "react-router-dom";
import "./App.styles.ts";
import { StylesProvider } from "./StylesProvider";
import { useStyles } from "./App.styles";
import { Button, Title } from "@mantine/core";
import { RequestReview } from "./reviews";
import { useState } from "react";

export function App() {
  const { classes } = useStyles();

  const [isRequestReviewOpen, setIsRequestReviewOpen] = useState(false);

  return (
    <StylesProvider>
      <div className={classes.app}>
        <div className={classes.header}>
          <Title className={classes.logo}>Feedback Wheel</Title>

          <nav className={classes.nav}>
            <Button<typeof Link> component={Link} to="/home">
              Home
            </Button>
            <Button onClick={() => setIsRequestReviewOpen(true)}>
              Request reviews
            </Button>
          </nav>
        </div>

        <div className={classes.content}>
          <Outlet />
        </div>

        <RequestReview
          open={isRequestReviewOpen}
          onClose={() => setIsRequestReviewOpen(false)}
          onSave={() => setIsRequestReviewOpen(false)}
        />
      </div>
    </StylesProvider>
  );
}
