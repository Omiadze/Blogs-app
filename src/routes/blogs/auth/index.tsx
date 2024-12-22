import AuthGuard from "@/components/route-guards/auth";
import Skeleton from "@/skeleton";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { AUTH_PATHS } from "../index.enum";

const LazyLoginPage = lazy(() => import("@/pages/sign-in"));
const LazyRegisterPage = lazy(() => import("@/pages/sign-up"));

export const AUTH_ROUTES = [
  <Route
    path={AUTH_PATHS.LOGIN}
    element={
      <Suspense fallback={<Skeleton />}>
        <AuthGuard>
          <LazyLoginPage />
        </AuthGuard>
      </Suspense>
    }
  />,
  <Route
    path={AUTH_PATHS.REGISTER}
    element={
      <Suspense fallback={<Skeleton />}>
        <AuthGuard>
          <LazyRegisterPage />
        </AuthGuard>
      </Suspense>
    }
  />,
];
