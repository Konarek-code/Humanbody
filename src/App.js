import { Route, Routes } from 'react-router-dom';

import Footer from './Additionalcomponents/Footer/Footer.js';
import NavBar from './Additionalcomponents/Navbar/Navb.js';
import './App.css';
import Bmi from './Pages/Bmi/Bmi';
import { BodyMap } from './Pages/BodyMap';
import Abs from './Pages/exercises/Abs';
import Abs1 from './Pages/exercises/Absw';
import Back from './Pages/exercises/Back';
import Backw from './Pages/exercises/Backw';
import Behind from './Pages/exercises/behind';
import Behindw from './Pages/exercises/behindw';
import Biceps from './Pages/exercises/Biceps';
import Bicepsw from './Pages/exercises/Bicepsw';
import Chest from './Pages/exercises/Chest';
import Chestw from './Pages/exercises/Chestw';
import Clavs1 from './Pages/exercises/Clavs1.js';
import Clavs1w from './Pages/exercises/Clavs1w';
import Hands from './Pages/exercises/Hands';
import Shoulders from './Pages/exercises/Shoulders';
import Shouldersw from './Pages/exercises/Shouldersw';
import Tights from './Pages/exercises/Tights';
import Traps from './Pages/exercises/Traps';
import Triceps from './Pages/exercises/Triceps';
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
        <Route path="/clavs1" element={<Clavs1 />} /> {/* man body part*/}
        <Route path="/Abs" element={<Abs />} />
        <Route path="/Hands" element={<Hands />} />
        <Route path="/Chest" element={<Chest />} />
        <Route path="/Biceps" element={<Biceps />} />
        <Route path="/Traps" element={<Traps />} />
        <Route path="/Shoulders" element={<Shoulders />} />
        <Route path="/Back" element={<Back />} />
        <Route path="/Triceps" element={<Triceps />} />
        <Route path="/behind" element={<Behind />} />
        <Route path="/Absw" element={<Abs1 />} /> {/* woman body part*/}
        <Route path="/behindw" element={<Behindw />} />
        <Route path="/Chestw" element={<Chestw />} />
        <Route path="/Bicepsw" element={<Bicepsw />} />
        <Route path="/Shouldersw" element={<Shouldersw />} />
        <Route path="/Backw" element={<Backw />} />
        <Route path="/Clavs1w" element={<Clavs1w />} />
        <Route path="/Tights" element={<Tights />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
