import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./pages/Index";


function App() {
  return (
    <main>
      <Header />
      <Index />
      <Footer />
    </main>
  );
}

export default App;
