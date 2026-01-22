import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar.jsx';
import RateLimitedUI from '../components/rateLimitedUi.jsx';
import NoteCard from '../components/noteCard.jsx'; 
import toast from 'react-hot-toast';
import api from '../lib/axios.js';
import NotesNotFound from './noteNotFound.jsx';

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false); // Set default to false
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get('/notes');
        setNotes(response.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}
      
      <div className='max-w-7xl mx-auto p-4 mt-6'> 
        {loading && <div className='text-center text-primary py-10'>Loading Notes ...</div>}
        {notes.length === 0 && !isRateLimited && <NotesNotFound />}
        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 

export default Homepage;