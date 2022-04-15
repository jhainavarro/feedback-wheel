import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "app/Routing";
import { StylesProvider } from "app/StylesProvider";
import { ToastProvider } from "shared/components";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StylesProvider>
        <ToastProvider>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </ToastProvider>
      </StylesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
