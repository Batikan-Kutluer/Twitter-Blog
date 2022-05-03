import { useContext, GlobalContext, ContextProvider } from "./components/GlobalContext";

import CreatePost from "./components/CreatePost";
import Header from "./components/Header";
import PostList from "./components/PostList";
import ReadMe from "./components/ReadMe";


import "./App.css";
import { useEffect } from "react";

function StartApp() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

function App() {
  let [state, setState] = useContext(GlobalContext);

  useEffect(() => {
    let bodyClassList = document.body.classList;

    bodyClassList[state.theme ? "add" : "remove"]("light");
    bodyClassList[state.theme ? "remove" : "add"]("dark");
  }, [state.theme])

  return <div id="app" className={["fullscreen", state.theme ? "light" : "dark"].join(" ")}>
    <Header />
    <div id="headerSpace">

    </div>
    <div id="appContainer">
      {!state.isReadmore || <CreatePost />}
      {state.isReadmore ? <PostList /> : <ReadMe />}
    </div>
  </div >
}

export default StartApp;
