import NavBar from "./components/Navbar"
import Trend from "./components/Trending";
import Footer from "./components/Footer";
import './App.css';
import './style/landPage.css';
import  Row  from "react-bootstrap/Row";


import Contents from "./components/Contents";



function App() {




  return (
   
    <div className="background">

      <div>
       <NavBar/>

      </div>
        <Row>
          <Trend/>
        </Row>
      
      
   
     
     
      <div>
        <Row className="container">
         
          <Contents/>

        </Row>
       
     
        
      </div>
      <div>
        <Footer/>
      </div>
      
     
      
    </div>
    
  );
}

export default App;
