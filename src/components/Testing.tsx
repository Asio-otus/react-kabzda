import React from 'react';

export function Testing(props: any) {
  if (props.highlighted === true) {
    return <span><b>Testing</b></span>
  } else {
    return <span>Testing</span>
  }
}
