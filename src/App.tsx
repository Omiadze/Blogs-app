import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Skeleton from "@/skeleton";
import NotFound from "@/pages/not-found";
import AuthorsPage from "./pages/autor-page/index";

import { lazy, Suspense } from "react";

const LazyHomePage = lazy(() => import("./pages/home/home"));
const LazyLoginPage = lazy(() => import("./pages/sign-in"));
const LazyRegisterPage = lazy(() => import("./pages/sign-up"));
const LazyAboutPage = lazy(() => import("./pages/about/index"));
// const LazyAuthorsPage = lazy(() => import("./pages/autor-page/index"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="home"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyHomePage />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyLoginPage />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyRegisterPage />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyAboutPage />
              </Suspense>
            }
          />
          <Route path="home/:id" element={<AuthorsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
