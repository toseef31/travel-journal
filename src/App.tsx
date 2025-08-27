import { Routes, Route } from "react-router-dom";
import PlaceDetails from "@/components/PlaceDetails";
import Home from "@/pages/Home";
import Header from "./components/Header";
import AddPlace from "./components/AddPlace";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/:id" element={<PlaceDetails />} />
        <Route path="/add-place" element={<AddPlace />} />
      </Routes>
    </div>
  )
}

export default App
