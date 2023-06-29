import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_API_URL;
console.log(URL);
// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";

function getAllShows() {
  return fetch(`${URL}/shows`)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

getAllShows();

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
