import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "@/i18n";
import { AuthProvider } from "./context/auth/index.tsx";
import { SvgProvider } from "./context/profile-svg/index.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SvgProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </SvgProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
