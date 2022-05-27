import React from "react";
import logo from "./logo.svg";
import Posts from "./features/posts/Posts";
import Detail from "./features/posts/Detail";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Container } from "@mui/system";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import List from "./pages/List";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const menus = [
    { path: "/posts", component: <Posts /> },
    { path: "/posts/:id", component: <Detail /> },
    { path: "/get", component: <Home /> },
    { path: "/get/cars", component: <Cars /> },
    { path: "/get/cars/list", component: <List /> },
  ];
  return (
    <div className="App">
      <Navbar></Navbar>
      <Container style={{ marginTop: "25px", minHeight: "80vh" }}>
        <GoogleOAuthProvider clientId="43111301323-ojipgm15gb7v9rmv1b5qf14vt68vipm1.apps.googleusercontent.com">
          <Routes>
            {menus.map((row, i) => (
              <Route
                key={i}
                exact
                path={row.path}
                element={row.component}
              ></Route>
            ))}
          </Routes>
        </GoogleOAuthProvider>
      </Container>
    </div>
  );
}

export default App;
