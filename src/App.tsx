import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import Skeleton from "@/skeleton";
import NotFound from "@/pages/not-found";
import AuthorsPage from "./pages/autor-page/index";

import { lazy, Suspense, useEffect } from "react";
import { supabase } from "./supabase";
import { useAuthContext } from "./context/hooks/use-auth-context";
import AuthGuard from "./components/route-guards/auth";
import ProfileGuard from "./components/route-guards/profile";

const LazyHomePage = lazy(() => import("./pages/home/home"));
const LazyLoginPage = lazy(() => import("./pages/sign-in"));
const LazyRegisterPage = lazy(() => import("./pages/sign-up"));
const LazyAboutPage = lazy(() => import("./pages/about/index"));
const LazyProfilePage = lazy(() => import("./pages/account/index"));
const LazyCreateBlogPage = lazy(() => import("./pages/blogs/index"));
// const LazyAuthorsPage = lazy(() => import("./pages/autor-page/index"));
function App() {
  const { handleSetUser } = useAuthContext();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      handleSetUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      handleSetUser(session);
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <Route
            path="login"
            element={
              <Suspense fallback={<Skeleton />}>
                <AuthGuard>
                  <LazyLoginPage />
                </AuthGuard>
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Skeleton />}>
                <AuthGuard>
                  <LazyRegisterPage />
                </AuthGuard>
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
          <Route
            path="profile"
            element={
              <Suspense fallback={<Skeleton />}>
                <ProfileGuard>
                  <LazyProfilePage />
                </ProfileGuard>
              </Suspense>
            }
          />
          <Route
            path="createBlogs"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyCreateBlogPage />
              </Suspense>
            }
          />
          <Route path="home/:id" element={<AuthorsPage />} />
        </Route>

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
