import './App.css';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import {Route, Routes} from "react-router-dom";
import Landing from "./Landing";

function App() {
  /*library.add(fab, Kanbas)*/
  return (
      <div className="container px-0 mx-0">
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Labs/*" element={<Labs/>}/>
            <Route path="/Kanbas/*" element={<Kanbas/>}/>
          </Routes>
      </div>
  );
}

export default App;
