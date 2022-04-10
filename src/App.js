import logo from './logo.svg';
import './App.css';
import List from "./day1/List";
import Mos from "./day2/Mos";
import Mm from "./day2/Mm";
import JoinUs from "./day2/JoinUs";
import Settings from "./day2/Settings";
import Login from "./day2/Login";
import ContactUs from "./day2/ContactUs";
import Search from "./day2/Search";
import Help from "./day2/Help";
import Home from "./day2/Home";
import Download from "./day2/Download"


function App() {
  return (
    <div className ='App'>
      <h1>MASAI</h1>
      <Mos/>
      <Mm/>
      <JoinUs/>
      <Settings/> <br></br><br></br>
      <Login/>
      <ContactUs/> <br></br><br></br>
      <Search/>
      <Help/> <br></br><br></br>
      <Home/>
      <Download/>
    </div>
  );
}

export default App;
