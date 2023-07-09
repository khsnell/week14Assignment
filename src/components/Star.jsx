import React from "react";

export default function Star(props) {
    if (props.starOn) {
        return (
            <img src="./star_on.png" />
        );
    } else {
        return(
            <img src="./star_off.png" />
        )
    }
}