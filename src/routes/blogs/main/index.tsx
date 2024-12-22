import ProfileGuard from "@/components/route-guards/profile";
import Skeleton from "@/skeleton";
import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { MAIN_PATHS } from "../index.enum";

const LazyAboutPage = lazy(() => import("@/pages/about/about"));
const LazyProfilePage = lazy(() => import("@/pages/account"));
const LazyCreateBlogPage = lazy(() => import("@/pages/add-blogs"));

export const MAIN_ROUTES = [
  <Route
    path={MAIN_PATHS.ABOUT}
    element={
      <Suspense fallback={<Skeleton />}>
        <LazyAboutPage />
      </Suspense>
    }
  />,
  <Route
    path={MAIN_PATHS.PROFILE}
    element={
      <Suspense fallback={<Skeleton />}>
        <ProfileGuard>
          <LazyProfilePage />
        </ProfileGuard>
      </Suspense>
    }
  />,
  <Route
    path={MAIN_PATHS.BLOGS_CREATE}
    element={
      <Suspense fallback={<Skeleton />}>
        <LazyCreateBlogPage />
      </Suspense>
    }
  />,
];
