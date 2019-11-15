import React from "react";
import Header from "./components/Header.js";
import {Route, Link, Switch} from "react-router-dom"
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import SearchEpisode from "./components/SearchEpisode.js";

export default function App() {
  return (
    <main >
        <div className = "header">
          {/* <Route exact to = "/" component = {Header} />  */}
          <Header />
          <WelcomePage />
        </div>
        <div className = "links">
          <Link className = "link"  to = "/">Home</Link><br/>
          <Link className = "link"  to = "/characters">Characters</Link><br/>
          <Link className = "link"  to = "/episodes">Episodes</Link><br/>

        </div>
          <Route exact to = "/characters" component = {SearchForm} />
          <Route exact to = "/episodes" component = {SearchEpisode} />
          {/* <Route to = "/characters" component = {CharacterList} /> */}
    </main>
  );
}
