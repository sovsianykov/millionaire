import React from "react";
import Question from "./Question/Question";
import Layout from "./Layout/Layout";
import GameStart from "../pages/GameStart/GameStart";
import SideBar from "./SideBar/SideBar";
import Game from "../pages/Game/Game";

function App() {
  return (
    <div>
        <Layout>
            <Game/>
        </Layout>
    </div>
  );
}

export default App;
