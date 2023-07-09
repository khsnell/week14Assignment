import React from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
import {MouseEvent} from "react";

const reviewClick = (id) => {
    document.getElementById(id).style.display = "block";
}

export default function Movie(movie) {
    return (
        <>
        <div className="card left" style={{width: 18 + 'rem'}}>
            <img src={movie.image} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p><Stars rating={movie.rating} movieId={movie.id} /></p>
                <p className="card-text">{movie.blurb}</p>
                <a href="#" className="btn btn-danger" onClick={() => {reviewClick(movie.id + "rl")}}>Review</a>
            </div>
        </div>
        <ReviewList key={movie.id + "rl"} id={movie.id + "rl"} movieId={movie.id} title={movie.title} reviews={movie.reviews} />
        </>
    );
}