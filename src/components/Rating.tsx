import React from 'react';

type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5;
}

export function Rating(props: RatingPropsType) {
  if (props.value === 1) {
    return (
      <div>
        <RatingStar selected={true} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
      </div>
    )
  }
  if (props.value === 2) {
    return (
      <div>
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
      </div>
    )
  }
  if (props.value === 3) {
    return (
      <div>
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={false} />
        <RatingStar selected={false} />
      </div>
    )
  }
  if (props.value === 4) {
    return (
      <div>
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={false} />
      </div>
    )
  }
  if (props.value === 5) {
    return (
      <div>
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
        <RatingStar selected={true} />
      </div>
    )
  }
  return (
    <div>
      <RatingStar selected={false} />
      <RatingStar selected={false} />
      <RatingStar selected={false} />
      <RatingStar selected={false} />
      <RatingStar selected={false} />
    </div>
  )
}

type RatingStarPropsType = {
  selected: boolean;
}

function RatingStar(props: RatingStarPropsType) {
  if (props.selected === true) {
    return <span><b>star</b></span>
  } else {
    return <span>star</span>
  }
}