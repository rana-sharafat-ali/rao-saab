// import PropsTest from "./Components/PropsTest";
// import DefProp from "./Components/DefProp";
import "./App.css";
import NavBar from "./Components/NavBar";
import Alert from "./Components/Alert";
// import Home from "./Components/Home";npm run build
import Counter from "./Components/Counter-usestate";
import About from "./Components/About";
import UseState from "./Components/usestate-event";
import { useState } from "react";
import Foot from "./Components/Footer";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [btntext, setBtnText] = useState("Dark Mode");

  const changer = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Light Mode");
      window.document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "Rao Saab - Dark Mode";
    } else {
      setMode("light");
      setBtnText("Dark Mode");
      window.document.body.style.backgroundColor = "white";
      showAlert("Dark Mode Has Been Disabled", "warning");
      document.title = "Rso Saab - Light Mode";
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  return (
    <>
      {/* <Router> */}
        <NavBar mode={mode} changer={changer} btn={btntext} />
        <Alert alert={alert} />
        {/* <Home style={mode}/> */}
        <UseState
                heading="Enter The Text To Analyse Below"
                style={mode}
                showAlert={showAlert}
              />
              <Counter style={mode} />
              <About style={mode} />
              <Foot mode={mode}/>
        {/* <PropsTest name='Hello this is from prop'req='required string type prop'/> */}
        {/* <DefProp name='(given parameter)'/> */}

        {/* <Routes> */}
          {/* <Route path="/" element={<Home style={mode}/>}/>
          <Route
            path="/usestate-event"
            element={ */}
              {/* <UseState
                heading="Enter The Text To Analyse Below"
                style={mode}
                showAlert={showAlert}
              />
            }
          /> */}
          {/* <Route path="/About" element={<About style={mode} />} />
          <Route path="/Counter-usestate" element={<Counter style={mode} />} />
        </Routes>
      </Router> */}

    </>
  );
}

export default App;
