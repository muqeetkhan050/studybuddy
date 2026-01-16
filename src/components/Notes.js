import React, { useState } from 'react';

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  const handleNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: 'Untitled Note',
      content: '',
      createdAt: new Date().toISOString()
    };
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote.id);
    setNoteTitle(newNote.title);
    setNoteContent(newNote.content);
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note.id);
    setNoteTitle(note.title);
    setNoteContent(note.content);
  };

  const handleUpdateNote = (content) => {
    setNoteContent(content);
    setNotes(notes.map(note => 
      note.id === selectedNote 
        ? { ...note, content } 
        : note
    ));
  };

  const handleUpdateTitle = (title) => {
    setNoteTitle(title);
    setNotes(notes.map(note => 
      note.id === selectedNote 
        ? { ...note, title } 
        : note
    ));
  };

  const handleDeleteNote = (noteId, e) => {
    e.stopPropagation();
    setNotes(notes.filter(note => note.id !== noteId));
    if (selectedNote === noteId) {
      setSelectedNote(null);
      setNoteContent('');
      setNoteTitle('');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ede8dc', padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e3a4a' }}>Notes</h1>
          <button
            onClick={handleNewNote}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#4a6b78',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#3d5a66'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4a6b78'}
          >
            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>+</span>
            New Note
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', height: 'calc(100vh - 150px)' }}>
          {/* Left Sidebar - Notes List */}
          <div style={{
            width: '350px',
            backgroundColor: '#f5f2ea',
            border: '2px solid #3d5563',
            borderRadius: '0.75rem',
            padding: '1.5rem',
            overflowY: 'auto'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2c4a5a', marginBottom: '1.5rem' }}>
              Your Notes
            </h2>

            {notes.length === 0 ? (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '3rem 1rem',
                color: '#7a8b97'
              }}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: '1rem', opacity: 0.5 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <p style={{ fontSize: '1rem', textAlign: 'center' }}>No notes yet</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {notes.map(note => (
                  <div
                    key={note.id}
                    onClick={() => handleSelectNote(note)}
                    style={{
                      padding: '1rem',
                      backgroundColor: selectedNote === note.id ? '#e5dfd0' : 'white',
                      border: selectedNote === note.id ? '2px solid #4a6b78' : '1px solid #c5bfb1',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedNote !== note.id) {
                        e.currentTarget.style.backgroundColor = '#faf8f3';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedNote !== note.id) {
                        e.currentTarget.style.backgroundColor = 'white';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div style={{ flex: 1, paddingRight: '0.5rem' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2c4a5a', marginBottom: '0.25rem' }}>
                          {note.title}
                        </h3>
                        <p style={{ 
                          fontSize: '0.875rem', 
                          color: '#7a8b97',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {note.content || 'No content'}
                        </p>
                      </div>
                      <button
                        onClick={(e) => handleDeleteNote(note.id, e)}
                        style={{
                          padding: '0.25rem',
                          backgroundColor: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          color: '#7a8b97',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '1.25rem'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#d94545'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#7a8b97'}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Panel - Note Editor */}
          <div style={{
            flex: 1,
            backgroundColor: '#f5f2ea',
            border: '2px solid #3d5563',
            borderRadius: '0.75rem',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {selectedNote ? (
              <>
                <input
                  type="text"
                  value={noteTitle}
                  onChange={(e) => handleUpdateTitle(e.target.value)}
                  placeholder="Note Title"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    color: '#2c4a5a',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    marginBottom: '1.5rem',
                    padding: '0.5rem 0'
                  }}
                />
                <textarea
                  value={noteContent}
                  onChange={(e) => handleUpdateNote(e.target.value)}
                  placeholder="Start typing your note..."
                  style={{
                    flex: 1,
                    fontSize: '1rem',
                    color: '#3d5563',
                    backgroundColor: 'transparent',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'inherit',
                    lineHeight: '1.6'
                  }}
                />
              </>
            ) : (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: '100%',
                color: '#7a8b97'
              }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginBottom: '1.5rem', opacity: 0.4 }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <p style={{ fontSize: '1.125rem', textAlign: 'center' }}>Select a note or create a new one</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}