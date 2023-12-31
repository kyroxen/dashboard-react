import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import ErrorPage from "./error-page.jsx";
import SignInForm from "./routes/_public/auth/pages/SignInForm.jsx";
import SignUpForm from "./routes/_public/auth/pages/SignUpForm.jsx";
import Home from "./routes/_public/pages/Home.jsx";
import PublicLayout from "./routes/_public/PublicLayout.jsx";
import AuthLayout from "./routes/_public/auth/AuthLayout.jsx";
import RootLayout from "./routes/_private/RootLayout.jsx";
import { AuthProvider } from "@/lib/AuthContext.jsx";
import Dashboard from "@/routes/_private/dashboard/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<PublicLayout />}>
        <Route path="/" index="true" element={<Home />}></Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInForm />}></Route>
        <Route path="/sign-up" element={<SignUpForm />}></Route>
      </Route>
      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Route>,
  ),
);

// const router = createBrowserRouter([
//   // public routes
//   {
//     element: <AuthLayout />,
//     children: [
//       {
//         path: "/",
//         index: true,
//         element: <Home />,
//       },
//       {
//         element: <AuthLayout />,
//         children: [
//           {
//             path: "/sign-in",
//             element: <SignInForm />,
//           },
//           {
//             path: "/sign-up",
//             element: <SignUpForm />,
//           },
//         ],
//       },
//     ],
//     errorElement: <ErrorPage />,
//   },
//
//   // private routes
//   {
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//     ],
//     errorElement: <ErrorPage />,
//   },
// ]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
