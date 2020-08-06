import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import Music from "./Components/NavBar/Music/Music";
import News from "./Components/NavBar/News/News";
import Settings from "./Components/NavBar/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper '>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                        <Route path='/messages' component={Dialogs}/>
                        <Route  path='/profile' component={Content}/>
                    <Route  path='/music' component={Music}/>
                    <Route  path='/news' component={News}/>
                    <Route  path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>);
}


export default App;
