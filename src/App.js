import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/NavBar/Music/Music";
import News from "./Components/NavBar/News/News";
import Settings from "./Components/NavBar/Settings/Settings";
import Messages from "./Components/Dialogs/Messages/Messages";
import DialogsItems from "./Components/Dialogs/DialogsItems/DialogsItems";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper '>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                        <Route  path='/messages' component={Dialogs}/>
                        <Route  path='/profile' component={Content}/>
                    <Route  path='/music' component={Music}/>
                    <Route  path='/news' component={News}/>
                    <Route  path='/settings' component={Settings}/>
                    <Route  path='/messages/dialogItems' component={Messages}/>

                </div>
            </div>

        </BrowserRouter>);
}


export default App;
