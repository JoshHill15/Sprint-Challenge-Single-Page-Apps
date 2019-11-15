import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css"
import CharacterList from "./CharacterList";
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
  console.log(searchResults);
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
        console.log(result);
      })
      .catch(err => console.log("error:", err));
  }, [searchTerm]);

  // console.log(searchResults)
  const handleChange = e => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  return (
    <section className="search-form">
      <form>
        <div className = "search">
          <label className = "search1" htmlFor="name">Search For Rick & Morty Characters! </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="search"
            onChange={handleChange}
            value={searchTerm}
            />
        </div>
      </form>
      <ul>
        {searchResults.map((cv,index) => (
          <div>
            {/* <CharacterList key = {cv.id}/> */}
            {/* <p>{cv.name}</p> */}
            <div className="card">
              <Card key={index}>
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
