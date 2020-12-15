import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating';
import { Testing } from './components/Testing';
import OnOff from './components/OnOff/OnOff';

function App() {
  return (
    <div>
      <PageTitle title={"This is page title ;)"} />
      <PageTitle title={"Second Title"} />
      <Rating />
      <Rating />
      <Rating />
      <Rating />
      <Rating />
      <Accordion titleValue={"Menu"} />
      <Accordion titleValue={"Users"} />

      <OnOff />
      <OnOff />

      <Testing />
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