import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/ui/navbar/NavBar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
