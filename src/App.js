import React from 'react';
import './App.css';


const App = () => {
    return (
        <div className='app-wrapper '>
            <header className='header'>
                <img src='https://cdn2.f-cdn.com/contestentries/991677/21958841/58e4d6ccf1d93_thumb900.jpg'/>
            </header>
            <nav className='nav'>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
            </nav>
                <div className='content'>
                    Main content
                </div>

            {/*  <Header/>
                <Technologies/>*/}
        </div>);
}


export default App;
