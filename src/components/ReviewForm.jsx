import React from "react";

export default function ReviewForm() {
    return (
        <form>
            <textarea placeholder="Write your review here!" />
            <p></p>
            <button className="btn btn-light">Save Review</button>
        </form>
    );
}