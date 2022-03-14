import "./App.css";
import "./Components/AddHouse/AddHouse.css";
// import "./Components/AddHouse/Rentals.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <AddHouse /> : ""}
      <button
        className="toggleForm"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide Form" : "Show Form"}
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}
      <br />
      <br />
      <br />
      <Rentals />
    </div>
  );
}

export default App;
