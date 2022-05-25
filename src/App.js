import React from "react";
import logo from "./logo.svg";
import Posts from "./features/posts/Posts";
import Detail from "./features/posts/Detail";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Container } from "@mui/system";

function App() {
  const menus = [
    { path: "/posts", component: <Posts /> },
    { path: "/posts/:id", component: <Detail /> },
  ];
  return (
    <div className="App">
      <Container style={{ marginTop: "25px", minHeight: "80vh" }}>
        <GoogleOAuthProvider clientId="501582206439-ie655fk44mnfd81defk11trq0vopng64.apps.googleusercontent.com">
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
