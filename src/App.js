import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstElement from './components/FirstElement';
import SecondElement from './components/SecondElement';
import data from "./redux/redux"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main data={data}/>}/>
          <Route path="/Новостройки" element={<FirstElement/>}/>
          <Route path="/О застройщиках" element={<SecondElement/>}/>
          <Route path="/Сотрудничество" element={<Main/>}/>
          <Route path="/Больше" element={<Main/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      <div className="container">
        
      </div>
        
    </div>
  );
}

export default App;
