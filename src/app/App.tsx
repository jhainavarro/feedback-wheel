import { Button, Title } from "@mantine/core";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Link, Outlet } from "react-router-dom";
import { StylesProvider } from "./StylesProvider";
import { useStyles } from "./App.styles";
import { RequestReview } from "./reviews";

export function App() {
  const { classes } = useStyles();

  const queryClient = new QueryClient();

  const [isRequestReviewOpen, setIsRequestReviewOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
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

        <ReactQueryDevtools />
      </StylesProvider>
    </QueryClientProvider>
  );
}
