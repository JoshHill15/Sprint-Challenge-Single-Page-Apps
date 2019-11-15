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
function SearchEpisode() {
  const [searchEpisode, setSearchEpisode] = useState("");
  const [searchRes, setSearchRes] = useState([]);
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
  const handleChanger= e => {
    setSearchEpisode(e.target.value);
  };

  return (
    <section className="search-form">
      <form>
      <div className = "search">
          <label className = "search1" htmlFor="searchep">Search For Rick &amp; Morty Episodes! </label>
          <input
            id="searchep"
            type="text"
            name="searchep"
            placeholder="search"
            onChange={handleChanger}
            value={searchEpisode}
            />
        </div>
      </form>
      <ul>
        {searchRes.map((cv,index) => (
          <div>
            {/* <CharacterList key = {cv.id}/> */}
            {/* <p>{cv.name}</p> */}
            <div>
              <Col className = "col" sm = "6">
                <Card className = "cards" key={index}>
                  <CardBody className="cardbody">
                    <ul>
                      <li>
                        <CardTitle>{cv.name}</CardTitle>
                      </li>
                      <li>
                        <CardSubtitle>{cv.episode}</CardSubtitle>
                      </li>
                      <li>
                        <CardText>{cv.air_date}</CardText>
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
  )
}
export default SearchEpisode