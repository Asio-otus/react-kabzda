import React, {useState} from 'react';
import './App.css';
import {AccordionUncontrolled} from './components/Accordion/AccordionUncontrolled';
import {RatingUncontrolled} from './components/Rating/RatingUncontrolled';
import {OnOff} from './components/OnOff/OnOff';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import OnOffUncontrolled from "./components/OnOff/OnOffUncontrolled";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [on, setOn] = useState<boolean>(false)

    return (
        <div>
            <PageTitle title={"This is page title ;)"}/>
            <PageTitle title={"Second Title"}/>

            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            <RatingUncontrolled/>

            <Accordion titleValue={'Controlled'}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            <AccordionUncontrolled titleValue={"Uncontrolled"}/>

            <OnOff on={on}
                   setOn={setOn}/>
            <OnOffUncontrolled onChange={setOn}/> {on.toString()}
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