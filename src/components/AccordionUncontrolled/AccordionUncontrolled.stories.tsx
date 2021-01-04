import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {AccordionUncontrolled} from "./AccordionUncontrolled";

export default {
    title: 'AccordionUncontrolled',
    component: AccordionUncontrolled
}

export const AccordionUncontrolledToggle = () => <AccordionUncontrolled titleValue={'title'} />