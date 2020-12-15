import React from 'react';

// ---TYPES
type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5;
}

type RatingStarPropsType = {
    selected: boolean;
}
// TYPES---

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <RatingStar selected={props.value > 0}/>
            <RatingStar selected={props.value > 1}/>
            <RatingStar selected={props.value > 2}/>
            <RatingStar selected={props.value > 3}/>
            <RatingStar selected={props.value > 4}/>
        </div>
    )
}

function RatingStar(props: RatingStarPropsType) {
    if (props.selected) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }
}