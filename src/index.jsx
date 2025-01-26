import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// file Pages
import App from "./App";
import Notes from "./pages/notes";
import NoteDetail from "./pages/NoteDetail";
import NotFoundPage from "./pages/404";
import MainLayout from "./component/Layouts/MainLayout";
import AddNote from "./pages/AddNote";
import Archive from "./pages/Archive";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Notes />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/notes/new" element={<AddNote />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
