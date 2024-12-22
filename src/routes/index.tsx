import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/layout/layout";
import Skeleton from "@/skeleton";
import NotFound from "@/pages/not-found";
import AuthorsPage from "@/pages/autor-page";
import { lazy, Suspense } from "react";
import { BLOGS_ROUTES } from "./blogs";

const LazyHomePage = lazy(() => import("@/pages/home/home"));

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/en" />} />

        <Route path=":lang" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyHomePage />
              </Suspense>
            }
          />
          {BLOGS_ROUTES}
          <Route path="home/:id" element={<AuthorsPage />} />
        </Route>

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
