import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingIcon from "../assets/svg/loading-icon-dark.svg";
const Homepage = React.lazy(() => import("../screens/Homepage"));
const Testimonial = React.lazy(() => import("../screens/Testimonial"));
const Services = React.lazy(() => import("../screens/Services"));
const Programs = React.lazy(() => import("../screens/Programs"));
const Pages = React.lazy(() => import("../screens/Pages"));
const OurTeams = React.lazy(() => import("../screens/OurTeams"));
const OurBlogs = React.lazy(() => import("../screens/OurBlogs"));
const Events = React.lazy(() => import("../screens/Events"));
const ContactUs = React.lazy(() => import("../screens/ContactUs"));
const AboutUs = React.lazy(() => import("../screens/AboutUs"));
const TenderLayout = React.lazy(() => import("../layouts/TenderLayout"));

const Routers = () => {
  const LayoutFallback = (
    <div className="flex w-full h-screen bg-brand-dark-900 items-center justify-center">
      <div>
        <img
          src={LoadingIcon}
          className="suspense-loading-icon"
          alt="Loading"
        />
      </div>
    </div>
  );

  return (
    <div>
      <Routes>
        <Route
          element={
            <Suspense fallback={LayoutFallback}>
              <TenderLayout />
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={LayoutFallback}>
                <Homepage />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={LayoutFallback}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={LayoutFallback}>
                <ContactUs />
              </Suspense>
            }
          />
          <Route
            path="/events"
            element={
              <Suspense fallback={LayoutFallback}>
                <Events />
              </Suspense>
            }
          />
          <Route
            path="/ourblog"
            element={
              <Suspense fallback={LayoutFallback}>
                <OurBlogs />
              </Suspense>
            }
          />
          <Route
            path="/ourteam"
            element={
              <Suspense fallback={LayoutFallback}>
                <OurTeams />
              </Suspense>
            }
          />
          <Route
            path="/pages"
            element={
              <Suspense fallback={LayoutFallback}>
                <Pages />
              </Suspense>
            }
          />
          <Route
            path="/program"
            element={
              <Suspense fallback={LayoutFallback}>
                <Programs />
              </Suspense>
            }
          />
          <Route
            path="/service"
            element={
              <Suspense fallback={LayoutFallback}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/testimonial"
            element={
              <Suspense fallback={LayoutFallback}>
                <Testimonial />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
