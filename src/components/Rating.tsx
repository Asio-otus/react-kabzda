import React, {useState} from 'react';

// ---TYPES
    type RatingStarPT = {
        selected: boolean;
    }
// TYPES---

export function Rating() {

    let [value, setValue] = useState<number>(0)

    return (
        <div>
            <RatingStar selected={value > 0}/><button onClick={ () => {setValue(1)} }>1</button>
            <RatingStar selected={value > 1}/><button onClick={ () => {setValue(2)} }>2</button>
            <RatingStar selected={value > 2}/><button onClick={ () => {setValue(3)} }>3</button>
            <RatingStar selected={value > 3}/><button onClick={ () => {setValue(4)} }>4</button>
            <RatingStar selected={value > 4}/><button onClick={ () => {setValue(5)} }>5</button>
        </div>
    )
}

function RatingStar(props: RatingStarPT) {
    if (props.selected) {
        return <span><b>star</b></span>
    } else {
        return <span>star</span>
    }
}