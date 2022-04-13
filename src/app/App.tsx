import { Link, Outlet } from "react-router-dom";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="App-logo">Feedback Wheel</h1>
        <nav className="App-nav">
          <Link to="/home">Home</Link>
          <Link to="/request-review">Request reviews</Link>
        </nav>
      </div>

      <div className="App-content">
        <Outlet />
      </div>
    </div>
  );
}
