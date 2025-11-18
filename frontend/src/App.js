import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import RestobarPage from "./pages/RestobarPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AmenitiesPage from "./pages/AmenitiesPage";
import LocationPage from "./pages/LocationPage";
import BlogPage from "./pages/BlogPage";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route path="/restobar" element={<RestobarPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/amenities" element={<AmenitiesPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
