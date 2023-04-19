import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/search/shows?q=girls")
      .then((response) => {
        setShows(response.data.map((item) => item.show));
      });
  }, []);

  return (
    <div className="App">
      <h1>TV Shows</h1>
      <div className="card-container">
        {shows.map((show) => (
          <div key={show.id} className="card">
            <img src={show.image.medium} alt={show.name} />
            <h2>{show.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;