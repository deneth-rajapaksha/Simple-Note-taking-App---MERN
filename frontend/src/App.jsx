import React from 'react';
import { Routes, Route } from 'react-router';
import Homepage from './pages/homePage.jsx';
import NoteCreatePage from './pages/noteCreatePage.jsx';
import NoteDetailPage from './pages/noteDetailPage.jsx';
import Toast from 'react-hot-toast';


const App = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/note/create" element={<NoteCreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
