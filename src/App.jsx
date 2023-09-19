
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Phone from "./components/Phones/Phone";
import PriceOption from './components/PriceOptions/PriceOption';
import Barchat from "./components/barChart/barchat";
import Reachart from "./components/reachart/Reachart";

function App() {
  return (
    <>
    <Navbar></Navbar>
    <PriceOption></PriceOption>
<div className=" flex">
    <Reachart></Reachart>
    <Barchat></Barchat>
</div>
<Phone></Phone>
    </>
  );
}

export default App;
