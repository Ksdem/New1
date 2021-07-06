import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./Components/NavBar/Music/Music";
import News from "./Components/NavBar/News/News";
import Settings from "./Components/NavBar/Settings/Settings";
import Messages from "./Components/Dialogs/Messages/Messages";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Content/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper '>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/messages' render={() =>
                        <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer/>}/>
                    <Route path='/users' render={() =>
                        <UsersContainer/>}/>
                        <Route path='/login' render={() =>
                        <LoginPage/>
                    }/>


                     <Route path='/music' render={Music}/>
                    <Route path='/news' render={News}/>
                    <Route path='/settings' render={Settings}/>
                    <Route path='/messages/dialogItems' render={Messages}/>


                </div>
            </div>

        </BrowserRouter>);
}


export default App;