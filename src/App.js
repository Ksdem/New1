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
import {addPost} from "./Redux/store";


const App = (props) => {
    console.log('props', props)
    console.log('props.state.profile', props.state.profile)
    return (
        <BrowserRouter>
            <div className='app-wrapper '>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() =>
                        <Dialogs  store={props.store}/>}/>
                    <Route path='/profile' render={() =>
                        <Content profile={props.state.profile}
                                 dispatch={props.dispatch}/>}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/news' render={News}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/messages/dialogItems' render={Messages}/>

                </div>
            </div>

        </BrowserRouter>);
}


export default App;