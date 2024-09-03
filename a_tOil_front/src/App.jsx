import "./App.css";
import { Router } from "./router/router";
import { TopBar } from "./components/topBar";
import { Footeri } from "./components/Footer";


function App() {
  return (
    <>
    <TopBar />
    <Router />
    <Footeri />
    </>
  
)
}

export default App;
