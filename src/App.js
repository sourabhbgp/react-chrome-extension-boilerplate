import React from "react";
import "./App.css";
import Layout from "./Contexts/Layout";
import Home from "./Page/home";

/**
 * @return {null}
 */

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default App;
