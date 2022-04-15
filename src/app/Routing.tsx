import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { AuthPage } from "./auth";
import { Home } from "./home";
import { SubmitReview } from "./reviews";

export function Routing() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/video/:id/review" element={<SubmitReview />} />
      </Route>
    </Routes>
  );
}
