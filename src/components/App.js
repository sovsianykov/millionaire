import React from "react";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "../Routing/Routing";

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
