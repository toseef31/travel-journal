import { Routes, Route } from "react-router-dom";
import PlaceDetails from "@/components/PlaceDetails";
import Home from "@/pages/Home";
import Header from "./components/Header";
import AddPlace from "./components/AddPlace";
import AddProfile from "./components/AddProfile";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places/:id" element={<PlaceDetails />} />
        <Route path="/add-place" element={<AddPlace />} />
        <Route path="/add-profile" element={<AddProfile />} />
      </Routes>
    </div>
  )
}

export default App
