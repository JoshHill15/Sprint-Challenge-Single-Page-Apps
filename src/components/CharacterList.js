import React, { useEffect, useState } from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard";

 function CharacterList() {
  const [data, setData] = useState([])

  useEffect(()=> {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {
        setData(res.data.results)
    }).catch(err => console.log("error:", err))
}, [data])

  return (
      <h2>            
        {/* {data.map((cv,index) => (
          <CharacterCard cv = {cv} index = {index}/>
            ))} */}
            {/* <CharacterCard /> */}
      </h2>
  );
}

export default CharacterList