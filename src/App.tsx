import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion';
import { Rating } from './components/Rating';
import { Testing } from './components/Testing';

function App() {
  return (
    <div>
      <PageTitle title={"This is page title ;)"} />
      <PageTitle title={"Second Title"} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
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