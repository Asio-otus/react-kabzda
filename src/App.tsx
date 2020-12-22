import React, {useState} from 'react';
import './App.css';
import {AccordionUncontrolled} from './components/Accordion/AccordionUncontrolled';
import {RatingUncontrolled} from './components/Rating/RatingUncontrolled';
import OnOff from './components/OnOff/OnOff';
import {Rating, RatingValue} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValue>(0)

    return (
        <div>
            <PageTitle title={"This is page title ;)"}/>
            <PageTitle title={"Second Title"}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <RatingUncontrolled/>
            <Accordion titleValue={'Controlled'} collapsed={true}/>
            <AccordionUncontrolled titleValue={"Uncontrolled"}/>

            <OnOff/>
            <OnOff/>
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