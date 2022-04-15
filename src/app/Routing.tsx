import { Navigate, Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Home } from "./home";
import { SubmitReview } from "./reviews";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* TODO: Auth */}
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/video/:id/review" element={<SubmitReview />}></Route>
      </Route>
    </Routes>
  );
}
