import React from "react";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Notfound from "./components/Notfound/Notfound";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Movies from "./components/Movies/Movies";
import Tvshow from "./components/Tvshow/Tvshow";
import People from "./components/People/People";
import AuthProvider from "./context/Auth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MoviesDetails from "./components/MoviesDetails/MoviesDetails";
import TvShowDetails from "./components/TvShowDetails/TvShowDetails";
import PeopleDetails from "./components/PeopleDetails/PeopleDetails";

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={
        <AuthProvider>
          <Root />
        </AuthProvider>
      }
    >
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="movies"
        element={
          <ProtectedRoute>
            <Movies />
          </ProtectedRoute>
        }
      />
      <Route
        path="tvshow"
        element={
          <ProtectedRoute>
            <Tvshow />
          </ProtectedRoute>
        }
      />
      <Route
        path="people"
        element={
          <ProtectedRoute>
            <People />
          </ProtectedRoute>
        }
      />
      <Route
        path="moviedetails/:id"
        element={
          <ProtectedRoute>
            <MoviesDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="tvdetails/:id"
        element={
          <ProtectedRoute>
            <TvShowDetails />
          </ProtectedRoute>
        }
      />
            <Route
        path="persondetails/:id"
        element={
          <ProtectedRoute>
            <PeopleDetails />
          </ProtectedRoute>
        }
      />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
