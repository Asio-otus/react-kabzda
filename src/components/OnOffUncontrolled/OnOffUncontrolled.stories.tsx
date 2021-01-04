import React, {useState} from 'react'
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {OnOffUncontrolled} from "./OnOffUncontrolled";


export default {
    title: 'OnOffUncontrolled',
    component: OnOffUncontrolled
}

const callback = action('on or off clicked')

export const OnMode = () => <OnOffUncontrolled defaultOn={true} onChange={callback}/>
export const OffMode = () => <OnOffUncontrolled defaultOn={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOffUncontrolled defaultOn={value} onChange={setValue}/>
}