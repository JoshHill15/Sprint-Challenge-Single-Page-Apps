import React from "react";
import Header from "./components/Header.js";
import {Route, Link} from "react-router-dom"
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  return (
    <main >
        <div className = "header">
          <Route exact to = "/" component = {Header} /> 
          <WelcomePage />
        </div>
        <div className = "links">
          <Link className = "link"  to = "/">Home</Link><br/>
          <Link className = "link"  to = "/characters">Characters</Link><br/>
        </div>
          <Route  to = "/characters" component = {SearchForm} />
          {/* <Route to = "/characters" component = {CharacterList} /> */}
    </main>
  );
}
