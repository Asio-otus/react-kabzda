import React from "react";

type OnOffPropsType = {
    on: boolean;
    setOn: (status: boolean) => void
}

export function OnOff (props: OnOffPropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
        cursor: 'pointer',
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: !props.on ? 'red' : 'white',
        cursor: 'pointer',
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    };

    return (
        <div>
            <div style={onStyle} onClick={ () => { props.setOn(true) } } >On</div>
            <div style={offStyle} onClick={ () => { props.setOn(false) } } >Off</div>
            <div style={indicatorStyle} />
        </div>
    )
}