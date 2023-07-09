import React from "react";
import {useState} from "react";
import Movie from "./Movie";

/*async function getMovies() {
    const response = await fetch("https://64a89351dca581464b85e18b.mockapi.io/movies");
    const movies = await response.json();
    return movies;
}*/

let movies = [
    {
      "title": "12 Angry Men",
      "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTIByFagYjLdqxkV1lrY-NF8rglf8d1x3v3lO3JzYio3QtTYdV8",
      "blurb": "",
      "rating": 5,
      "reviews": [
        {
          "rating": 3,
          "comment": "It was ok.",
          "id": 1
        }
      ],
      "id": "1"
    },
    {
      "title": "The Godfather",
      "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ6EAZYpFPv-j-msWE7uFUueby2qiH_lz67ryBOJ41kg4nKHJ6y",
      "blurb": "",
      "rating": 4,
      "reviews": [],
      "id": "2"
    },
    {
      "title": "The Good, the Bad and the Ugly",
      "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTr-M1u0p-pJ8YRWHBmVmksP5X-dwMYZkpf7722Zg5AepS25mvN",
      "blurb": "",
      "rating": 3,
      "reviews": [],
      "id": "3"
    }
  ];

export default function MovieList() {
    let movieOutput = [];

    for (let m of movies) {
        movieOutput.push(<Movie key={m.id} {...m} />);
    }
    
    return (
        <>
        <h1>Welcome to Khalil's Movies!</h1>
        <div>{movieOutput}</div>
        </>
    );
}