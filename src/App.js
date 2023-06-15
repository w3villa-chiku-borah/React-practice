
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
   <Navbar title = "chiku"  abouttext = "about2" ></Navbar>

   <TextForm heading = "enter a text to analyze"></TextForm>
    </div>
  );
}

export default App;
