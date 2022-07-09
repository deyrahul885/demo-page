import '../src/App.css';
import Home from "./Pages/Home";
import RegisterPage from "./Pages/RegisterPage";
import SpeakersPage from "./Pages/SpeakesPage";
import HighlightPage from "./Pages/HighlightPage";
import Header from "./components/header/header";
import Menubar from "./components/navbar/menubar";
import Footer from './components/footer/footer'
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    <div className="App">
        <Header/>
        <Menubar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={<RegisterPage/>}/>
          <Route exact path="/speakers" element={<SpeakersPage/>}/>
          <Route exact path="/highlights" element={<HighlightPage/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
