import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main__wall from'./components/Main__Wall';
import SideRight from './components/SideRight';
import MyProfile from './components/LeftSideComponents/MyProfile';
import Messages from './components/LeftSideComponents/Messages';
import Notifications from './components/LeftSideComponents/Notifications';
import Friends from './components/LeftSideComponents/FriendsComponents/Friends';
import Community from './components/LeftSideComponents/Community';
import Videos from './components/LeftSideComponents/Videos';
import Games from './components/LeftSideComponents/Games';
import FriendProfile from './components/LeftSideComponents/FriendsComponents/FriendProfile';
import './Fonts/Pacifico-Regular.ttf';
import MessagesContainer from './components/LeftSideComponents/MessagesContainer';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <div className='container'>
            <div className='Page'>
              <Main__wall/>
              <Routes>
                <Route path="/" element={<Main addNews={props.addNews}/>} />
                <Route path="/MyProfile" element={<MyProfile/>}/>
                <Route path="/Messages" element={<MessagesContainer/>}/>
                <Route path="/Notifications" element={<Notifications/>}/>
                <Route path="/Friends" element={<Friends/>}/>
                <Route path="/Friends/:id" element={<FriendProfile/>}/>
                <Route path="/Community" element={<Community/>}/>
                <Route path="/Videos" element={<Videos/>}/>
                <Route path="/Games" element={<Games/>}/>
              </Routes>
              <SideRight/>
            </div>
          </div>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}



export default App;
