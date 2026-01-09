import React from "react";
import Hero from "./Components/Hero/Hero";
import Hero2 from "./Components/Hero/Hero2";
import Hero3 from "./Components/Hero/Hero3";
import SolutionSection from "./Components/Hero/SolutionSection";
import FunctionsSection from "./Components/Hero/FunctionsSection";
//import Advantages from "./Components/Hero/Advantages";
import Navbar from "./Components/Hero/Navbar";
import Chain from "./Components/Hero/chain"
import CardStack from "./Components/Hero/Advantages";
import Specs from "./Components/Hero/specs";
import NavSection from "./Components/Hero/FullSection";
//import Advantages from "./Components/Hero/Advantages";


const App=()=>{
  return <div className="overflow-x-hidden"><Hero />
  <Hero2 />
  <Hero3 />
  <Navbar />
  <SolutionSection />
  <FunctionsSection />
  <CardStack />
  <Chain />
  <Specs />
  <NavSection />
  
  
  
  
  </div>
};
export default App;