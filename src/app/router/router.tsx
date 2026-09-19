import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";
import MMSPage from "../../pages/modules/mms/MMSPage";
import CustomersPage from "../../pages/customers/CustomersPage";
import BPMPage from "../../pages/modules/bpm/BPMPage";
import MainLayout from "../layouts/MainLayout";
import PlatformPage from "../../pages/platform/PlatformPage";
import DMSPage from "../../pages/modules/dms/DMSPage";
import CMSPage from "../../pages/modules/cms/CMSPage";
import BlogPage from "../../pages/blog/BlogPage";
import FAQPage from "../../pages/faq/FAQPage";
import ContactPage from "../../pages/contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "modules",
        children: [
          {
            index: true,
            element: <Navigate to="dms" replace />,
          },
          {
            path: "dms",
            element: <DMSPage />,
          },
          {
            path: "mms",
            element: <MMSPage />,
          },
          {
            path: "cms",
            element: <CMSPage />,
          },
          {
            path: "bpm",
            element: <BPMPage />,
          },
        ],
      },
      {
        path: "resources",
        children: [
          {
            index: true,
            element: <Navigate to="blog" replace />,
          },
          {
            path: "blog",
            element: <BlogPage />,
          },
          {
            path: "faq",
            element: <FAQPage />,
          },
        ],
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "platform",
        element: <PlatformPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
    ],
  },
]);
