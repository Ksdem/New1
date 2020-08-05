import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";


const App = () => {
    return (
        <div className='app-wrapper '>
            <Header/>
            <NavBar/>
            <Content/>
        </div>);
}


export default App;
