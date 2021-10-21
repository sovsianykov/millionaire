import React from "react";
import Question from "./Question/Question";
import Layout from "./Layout/Layout";
import GameStart from "../pages/GameStart/GameStart";

function App() {
  return (
    <div>
        <Layout>
            <GameStart/>
        </Layout>
    </div>
  );
}

export default App;
