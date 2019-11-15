import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"
import SearchEpisode from "./SearchEpisode"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col
} from "reactstrap";
function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [searchEpisode, setSearchEpisode] = useState("");
  const [searchRes, setSearchRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        // const result = res.data.results.filter(cv =>  {
        //     cv.name.toLowerCase().includes(searchTerm.toLowerCase())
        // })
        const result = [];
        res.data.results.forEach(cv => {
          return cv.name.toLowerCase().includes(searchTerm.toLowerCase())
            ? result.push(cv)
            : null;
        });
        setSearchResults(result);
      })
      .catch(err => console.log("error:", err));
  }, [searchTerm]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(res);
        // const result = res.data.results.filter(cv =>  {
        //     cv.name.toLowerCase().includes(searchTerm.toLowerCase())
        // })
        const result = [];
        res.data.results.forEach(cv => {
          return cv.name.toLowerCase().includes(searchEpisode.toLowerCase())
            ? result.push(cv)
            : null;
        });
        setSearchRes(result);
        console.log(result);
      })
      .catch(err => console.log("error:", err));
  }, [searchEpisode]);


  // console.log(searchResults)
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

    const handleChanger = e => {
      setSearchEpisode(e.target.value);
    };
  

  return (
    <section className="search-form">
      <form>
        <div className = "search">
          <label className = "search1" htmlFor="searchname">Search For Rick &amp; Morty Characters! </label>
          <input
            id="searchname"
            type="text"
            name="searchname"
            placeholder="search"
            onChange={handleChange}
            value={searchTerm}
            />
        </div>
        {/* <div className = "search">
          <label className = "search1" htmlFor="searchep">Search For Rick &amp; Morty Episodes! </label>
          <input
            id="searchep"
            type="text"
            name="searchep"
            placeholder="search"
            onChange={handleChanger}
            value={searchEpisode}
            />
        </div> */}
      </form>
      <ul>
        {searchResults.map((cv,index) => (
          <div>
            {/* <CharacterList key = {cv.id}/> */}
            {/* <p>{cv.name}</p> */}
            <div>
              <Col className = "col" sm = "6">
                <Card className = "cards" key={index}>
                  <CardImg top width="100%" src={cv.image} alt="Card image cap" />
                  <CardBody className="cardbody">
                    <ul>
                      <li>
                        <CardTitle>{cv.name}</CardTitle>
                      </li>
                      <li>
                        <CardSubtitle>{cv.gender}</CardSubtitle>
                      </li>
                      <li>
                        <CardText>{cv.species}</CardText>
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
}

export default SearchForm;

//  function Search() {
//     const [searchTerm, setSearchTerm] = useState("")
//     const [searchResults, setSearchResults] = useState([])

//   return (
//     <section className="search-form">
