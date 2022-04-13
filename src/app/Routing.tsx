import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Home } from "./home";
import { RequestReviews } from "./reviews";

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/request-review" element={<RequestReviews />} />
      </Route>
    </Routes>
  );
}
