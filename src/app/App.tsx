import { Button, Menu, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { ReactComponent as Logout } from "shared/assets/logout.svg";
import { useStyles } from "./App.styles";
import { useAuth } from "./auth";
import { initAuthStorage, initVideosStorage } from "./mocks";
import { RequestReview } from "./reviews";

export function App() {
  const { user, onLogout } = useAuth();
  const { classes } = useStyles();
  const [isRequestReviewOpen, setIsRequestReviewOpen] = useState(false);

  // For easier testing
  useEffect(() => {
    initAuthStorage();
    initVideosStorage();
  }, []);

  if (!user) {
    return <Navigate replace to="/auth" />;
  }

  return (
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

          <Menu gutter={12} size="xs">
            <Menu.Item
              icon={<Logout width={16} height={16} />}
              onClick={() => onLogout()}
            >
              Log out
            </Menu.Item>
          </Menu>
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
  );
}
