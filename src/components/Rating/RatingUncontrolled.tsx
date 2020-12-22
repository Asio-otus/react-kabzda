import React, {useState} from 'react';

// ---TYPES
type RatingValue = 0 | 1 | 2 | 3 | 4 | 5

type RatingStarPT = {
    selected: boolean
    value: RatingValue
    setValue: (value: RatingValue) => void
}

// TYPES---

export function RatingUncontrolled() {

    let [value, setValue] = useState<RatingValue>(0)

    return (
        <div>
            <RatingStar selected={value > 0} setValue={setValue} value={1}/>
            <RatingStar selected={value > 1} setValue={setValue} value={2}/>
            <RatingStar selected={value > 2} setValue={setValue} value={3}/>
            <RatingStar selected={value > 3} setValue={setValue} value={4}/>
            <RatingStar selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}


function RatingStar(props: RatingStarPT) {
    return <span onClick={() => {
        props.setValue(props.value)
    }}>{props.selected ? <b>star</b> : 'star'}</span>
}