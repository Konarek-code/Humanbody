import { Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer/Footer.js';
import NavBar from './Components/Navbar/Navbar.js';
import './App.css';
import Bmi from './Pages/Bmi/Bmi';
import { BodyMap } from './Pages/BodyMap';
import Abs from './Pages/Exercises/Abs';
import Abswoman from './Pages/Exercises/Abswoman.js';
import Back from './Pages/Exercises/Back';
import Backwoman from './Pages/Exercises/Backwoman.js';
import Behind from './Pages/Exercises/Behind';
import Behindwoman from './Pages/Exercises/Behindwoman.js';
import Biceps from './Pages/Exercises/Biceps';
import Bicepswoman from './Pages/Exercises/Bicepswoman.js';
import Chest from './Pages/Exercises/Chest';
import Chestwoman from './Pages/Exercises/Chestwoman.js';
import Clavs from './Pages/Exercises/Clavs.js';
import Clavs1woman from './Pages/Exercises/Clavs1woman.js';
import Hands from './Pages/Exercises/Hands';
import Shoulders from './Pages/Exercises/Shoulders';
import Shoulderswoman from './Pages/Exercises/Shoulderswoman.js';
import Tights from './Pages/Exercises/Tights';
import Traps from './Pages/Exercises/Traps';
import Triceps from './Pages/Exercises/Triceps';
import Home from './Pages/Homescreen/Home.js';
import Lvl from './Pages/Quizz/Quizcheck.js';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BodyMap" element={<BodyMap />} />
        <Route path="/BodyMapWoman" element={<BodyMap isWoman />} />
        <Route path="/Bmi" element={<Bmi />} />
        <Route path="/lvlcheck" element={<Lvl />} />
        <Route path="/clavs1" element={<Clavs />} /> {/* man body part*/}
        <Route path="/Abs" element={<Abs />} />
        <Route path="/Hands" element={<Hands />} />
        <Route path="/Chest" element={<Chest />} />
        <Route path="/Biceps" element={<Biceps />} />
        <Route path="/Traps" element={<Traps />} />
        <Route path="/Shoulders" element={<Shoulders />} />
        <Route path="/Back" element={<Back />} />
        <Route path="/Triceps" element={<Triceps />} />
        <Route path="/behind" element={<Behind />} />
        <Route path="/Absw" element={<Abswoman />} /> {/* woman body part*/}
        <Route path="/behindw" element={<Behindwoman />} />
        <Route path="/Chestw" element={<Chestwoman />} />
        <Route path="/Bicepsw" element={<Bicepswoman />} />
        <Route path="/Shouldersw" element={<Shoulderswoman />} />
        <Route path="/Backw" element={<Backwoman />} />
        <Route path="/Clavs1w" element={<Clavs1woman />} />
        <Route path="/Tights" element={<Tights />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
