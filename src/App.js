import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import Main__wall from './components/Main__Wall';
import SideRight from './components/SideRight';
import MyProfile from './components/LeftSideComponents/MyProfile';
import Notifications from './components/LeftSideComponents/Notifications';
import Friends from './components/LeftSideComponents/FriendsComponents/Friends';
import Community from './components/LeftSideComponents/Community';
import Videos from './components/LeftSideComponents/Videos';
import Games from './components/LeftSideComponents/Games';
import FriendProfile from './components/LeftSideComponents/FriendsComponents/FriendProfile';
import MessagesContainer from './components/LeftSideComponents/MessagesContainer';
import Login from './components/LoginComponent/Login';
import RegisterContainerComponent from './components/RegisterComponents/RegisterContainerComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container'>
          <div className='Page'>
            <Main__wall />
            <Routes>
              <Route path="/" element={<MainContainer />} />
              <Route path="/MyProfile" element={<MyProfile />} />
              <Route path="/Messages" element={<MessagesContainer />} />
              <Route path="/Notifications" element={<Notifications />} />
              <Route path="/Friends" element={<Friends />} />
              <Route path="/Friends/:id" element={<FriendProfile />} />
              <Route path="/Community" element={<Community />} />
              <Route path="/Videos" element={<Videos />} />
              <Route path="/Games" element={<Games />} />
              <Route path="/register" element={<RegisterContainerComponent />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
            <SideRight />
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
