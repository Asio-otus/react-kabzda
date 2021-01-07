import React, {useState} from 'react';
import './App.css';
import {AccordionUncontrolled} from './components/AccordionUncontrolled/AccordionUncontrolled';
import {RatingUncontrolled} from './components/RatingUncontrolled/RatingUncontrolled';
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOffUncontrolled} from "./components/OnOffUncontrolled/OnOffUncontrolled";
import {Select} from "./components/Select/Select";

export type selectValueType = {
    title: string
    value: number
}

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [selectCollapsed, setSelectCollapsed] = useState<boolean>(true)
    let [selectValue, setSelectValue] = useState<selectValueType>({title: 'none', value: 0})

    let [on, setOn] = useState<boolean>(false)

    let selectItems = [
        {title: 'none', value: 0},
        {title: 'Sushi', value: 1},
        {title: 'Pizza', value: 2},
        {title: 'Steak', value: 3}
    ]

    return (
        <div>
            <PageTitle title={"This is page title ;)"}/>
            <PageTitle title={"Second Title"}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <RatingUncontrolled defaultValue={0}/>

            <Accordion titleValue={'Controlled'}
                       collapsed={accordionCollapsed}
                       onChange={setAccordionCollapsed}
                       items={[
                           {title: 'Dymich', value: 1},
                           {title: 'Valera', value: 2},
                           {title: 'Artiom', value: 3},
                           {title: 'Victor', value: 4}]}
                       onClick={x => x}/>
            <AccordionUncontrolled titleValue={"Uncontrolled"}/>

            <OnOff on={on}
                   setOn={setOn}/>
            <OnOffUncontrolled onChange={setOn}/> {on.toString()}

            <Select value={selectValue}
                    collapsed={selectCollapsed}
                    onChange={setSelectCollapsed}
                    selectValue={setSelectValue}
                    items={selectItems}/>
        </div>
    )
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;