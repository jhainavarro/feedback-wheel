import { Button, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { StylesProvider } from "./StylesProvider";
import { useStyles } from "./App.styles";
import { RequestReview } from "./reviews";
import { initStorage } from "./videos";
import { ToastProvider } from "shared/components";

export function App() {
  const { classes } = useStyles();
  const [isRequestReviewOpen, setIsRequestReviewOpen] = useState(false);

  useEffect(() => {
    console.log("init");
    initStorage();
  }, []);

  return (
    <StylesProvider>
      <ToastProvider>
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
      </ToastProvider>
    </StylesProvider>
  );
}
