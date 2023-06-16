
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div classname = "">
   <Navbar title = "chiku"  abouttext = "about2" ></Navbar>

   <About/>
   {/* <TextForm heading = "enter a text to analyze"></TextForm> */}
    </div>
  );
}

export default App;
