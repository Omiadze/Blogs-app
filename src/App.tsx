// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import Skeleton from "@/skeleton";
import NotFound from "@/pages/not-found";
// import { Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import DetailsPage from "./pages/home/countrie-details-page/components/details-page";

const LazyHomePage = lazy(() => import("./pages/home/home"));
const LazyLoginPage = lazy(() => import("./pages/sign-in"));
const LazyRegisterPage = lazy(() => import("./pages/sign-up"));
// const LazyOtpPage = lazy(() => import('./pages/otp/views'));

function App() {
  // const [currentLang, setCurrentLang] = useState<"eng" | "ka">("eng");
  // const navigate = useNavigate();

  // const handleLanguageChange: () => void = () => {
  //   const newLang: "eng" | "ka" = currentLang === "eng" ? "ka" : "eng";
  //   setCurrentLang(newLang);
  //   navigate(`/${newLang}/home`);
  // };

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
          {/* <Route
            path="about"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyAboutPage />
              </Suspense>
            }
          />
          <Route
            path="otp"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyOtpPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Skeleton />}>
                <LazyContactPage />
              </Suspense>
            }
          />
          <Route
            path="country/:id" // Define the route for country details
            element={<DetailsPage />}
          /> */}
        </Route>
        {/* <Route path="/" element={<Navigate to={`/${currentLang}/home`} />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
