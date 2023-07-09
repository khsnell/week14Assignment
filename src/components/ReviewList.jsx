import React from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

function closeReviews(id) {
    document.getElementById(id).style.display = "none";
}

export default function ReviewList(props) {
    let reviews = [];

    //console.log(props.reviews);
    
    for (let r of props.reviews) {
        reviews.push(<Review key={props.id + r.id} movieId={props.movieId} reviewId={r.id} reviewText={r.comment} />);
    }

    return (
        <div id={props.id} className="review-list">
            <h5>{props.title} Reviews</h5>
            {reviews}
            <ReviewForm />
            <button className="btn btn-light" onClick={() => { closeReviews(props.id) }}>Close</button>
        </div>
    );
}