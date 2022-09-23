import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><div className="MenuBar">
      <a href="home.html" id="Home"> HOME </a>
      <a href="contact_us.html" id="ContactUS"> CONTACT US </a>
      <a href="" id="login"> LOGIN </a>

      <a href="" id="signuprec">
        Sign-UP
      </a>
    

    </div><div id="hi"> hi</div><div id="content_home">T-pakเป็นได้มากกว่าที่พัก ในเว็ปนี้ หา หอพัก , คอนโด, และ รูมเมท !</div><div class="square"></div><div class="search_field">
        <input id="Enteralocation" type="textarea" placeholder="Enter a location">
        </input>
      </div></>
  );
}

export default App;
