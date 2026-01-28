

// // import React, { useState, useEffect } from 'react';
// // import API from '../services/api'; // Axios instance with baseURL

// // export default function Notes() {
// //   const [notes, setNotes] = useState([]);
// //   const [selectedNote, setSelectedNote] = useState(null);
// //   const [noteContent, setNoteContent] = useState('');
// //   const [noteTitle, setNoteTitle] = useState('');

// //   // Fetch notes on load
// //   useEffect(() => {
// //     const fetchNotes = async () => {
// //       try {
// //         const res = await API.get('/notes', {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// //           },
// //         });
// //         setNotes(res.data);
// //       } catch (err) {
// //         console.error(err);
// //         alert('Failed to fetch notes');
// //       }
// //     };
// //     fetchNotes();
// //   }, []);

// //   // Create new note
// //   const handleNewNote = async () => {
// //     try {
// //       const res = await API.post(
// //         '/notes',
// //         { title: 'Untitled Note', content: 'Start writing...' },
// //         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
// //       );
// //       setNotes([res.data, ...notes]);
// //       setSelectedNote(res.data._id);
// //       setNoteTitle(res.data.title);
// //       setNoteContent(res.data.content);
// //     } catch (err) {
// //       console.error(err);
// //       alert('Failed to create note');
// //     }
// //   };

// //   // Select a note
// //   const handleSelectNote = (note) => {
// //     setSelectedNote(note._id);
// //     setNoteTitle(note.title);
// //     setNoteContent(note.content);
// //   };

// //   // Update note content locally
// //   const handleUpdateNote = (content) => {
// //     setNoteContent(content);
// //     setNotes(
// //       notes.map((note) =>
// //         note._id === selectedNote ? { ...note, content } : note
// //       )
// //     );
// //   };

// //   // Save note content to backend (on blur)
// //   const saveNoteContent = async () => {
// //     if (!selectedNote) return;
// //     try {
// //       await API.put(
// //         `/notes/${selectedNote}`,
// //         { content: noteContent || 'Start writing...' },
// //         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
// //       );
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   // Update note title locally
// //   const handleUpdateTitle = (title) => {
// //     setNoteTitle(title);
// //     setNotes(
// //       notes.map((note) =>
// //         note._id === selectedNote ? { ...note, title } : note
// //       )
// //     );
// //   };

// //   // Save note title to backend (on blur)
// //   const saveNoteTitle = async () => {
// //     if (!selectedNote) return;
// //     try {
// //       await API.put(
// //         `/notes/${selectedNote}`,
// //         { title: noteTitle || 'Untitled Note' },
// //         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
// //       );
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   // Delete note
// //   const handleDeleteNote = async (noteId, e) => {
// //     e.stopPropagation();
// //     setNotes(notes.filter((note) => note._id !== noteId));
// //     if (selectedNote === noteId) {
// //       setSelectedNote(null);
// //       setNoteContent('');
// //       setNoteTitle('');
// //     }

// //     try {
// //       await API.delete(`/notes/${noteId}`, {
// //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
// //       });
// //     } catch (err) {
// //       console.error(err);
// //       alert('Failed to delete note');
// //     }
// //   };

// //   return (
// //     <div style={{ minHeight: '100vh', backgroundColor: '#ede8dc', padding: '2rem' }}>
// //       <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
// //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
// //           <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e3a4a' }}>Notes</h1>
// //           <button onClick={handleNewNote} style={buttonStyle}>+ New Note</button>
// //         </div>

// //         <div style={{ display: 'flex', gap: '1.5rem', height: 'calc(100vh - 150px)' }}>
// //           {/* Notes List */}
// //           <div style={sidebarStyle}>
// //             {notes.length === 0 ? <p style={{ textAlign: 'center', color: '#7a8b97' }}>No notes yet</p> :
// //               notes.map((note) => (
// //                 <div
// //                   key={note._id}
// //                   onClick={() => handleSelectNote(note)}
// //                   style={{
// //                     padding: '1rem',
// //                     backgroundColor: selectedNote === note._id ? '#e5dfd0' : 'white',
// //                     border: selectedNote === note._id ? '2px solid #4a6b78' : '1px solid #c5bfb1',
// //                     borderRadius: '0.5rem',
// //                     cursor: 'pointer',
// //                     position: 'relative',
// //                   }}
// //                 >
// //                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
// //                     <div style={{ flex: 1, paddingRight: '0.5rem' }}>
// //                       <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2c4a5a', marginBottom: '0.25rem' }}>
// //                         {note.title}
// //                       </h3>
// //                       <p style={{ fontSize: '0.875rem', color: '#7a8b97', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
// //                         {note.content || 'No content'}
// //                       </p>
// //                     </div>
// //                     <button onClick={(e) => handleDeleteNote(note._id, e)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#7a8b97', fontSize: '1.25rem' }}>
// //                       🗑️
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //           </div>

// //           {/* Note Editor */}
// //           <div style={editorStyle}>
// //             {selectedNote ? (
// //               <>
// //                 <input
// //                   value={noteTitle}
// //                   onChange={(e) => handleUpdateTitle(e.target.value)}
// //                   onBlur={saveNoteTitle}
// //                   style={editorTitleStyle}
// //                   placeholder="Note Title"
// //                 />
// //                 <textarea
// //                   value={noteContent}
// //                   onChange={(e) => handleUpdateNote(e.target.value)}
// //                   onBlur={saveNoteContent}
// //                   style={editorContentStyle}
// //                   placeholder="Start typing your note..."
// //                 />
// //               </>
// //             ) : (
// //               <p style={{ textAlign: 'center', color: '#7a8b97', marginTop: '3rem' }}>Select a note or create a new one</p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // ===== Styles =====
// // const buttonStyle = {
// //   padding: '0.75rem 1.5rem',
// //   backgroundColor: '#4a6b78',
// //   color: 'white',
// //   border: 'none',
// //   borderRadius: '0.5rem',
// //   fontSize: '1rem',
// //   fontWeight: '600',
// //   cursor: 'pointer'
// // };

// // const sidebarStyle = {
// //   width: '350px',
// //   backgroundColor: '#f5f2ea',
// //   border: '2px solid #3d5563',
// //   borderRadius: '0.75rem',
// //   padding: '1.5rem',
// //   overflowY: 'auto'
// // };

// // const editorStyle = {
// //   flex: 1,
// //   backgroundColor: '#f5f2ea',
// //   border: '2px solid #3d5563',
// //   borderRadius: '0.75rem',
// //   padding: '2rem',
// //   display: 'flex',
// //   flexDirection: 'column'
// // };

// // const editorTitleStyle = {
// //   fontSize: '1.75rem',
// //   fontWeight: '600',
// //   color: '#2c4a5a',
// //   backgroundColor: 'transparent',
// //   border: 'none',
// //   outline: 'none',
// //   marginBottom: '1.5rem',
// //   padding: '0.5rem 0'
// // };

// // const editorContentStyle = {
// //   flex: 1,
// //   fontSize: '1rem',
// //   color: '#3d5563',
// //   backgroundColor: 'transparent',
// //   border: 'none',
// //   outline: 'none',
// //   resize: 'none',
// //   fontFamily: 'inherit',
// //   lineHeight: '1.6'
// // };



// import React, { useState, useEffect } from 'react';
// import API from '../services/api';

// export default function Notes() {
//   const [notes, setNotes] = useState([]);
//   const [selectedNote, setSelectedNote] = useState(null);
//   const [noteContent, setNoteContent] = useState('');
//   const [noteTitle, setNoteTitle] = useState('');

//   // Popup state
//   const [showPopup, setShowPopup] = useState(false);
//   const [newTitle, setNewTitle] = useState('');
//   const [newContent, setNewContent] = useState('');

//   // Fetch notes on load
//   useEffect(() => {
//     const fetchNotes = async () => {
//       try {
//         const res = await API.get('/notes', {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         });
//         setNotes(res.data);
//       } catch (err) {
//         console.error(err);
//         alert('Failed to fetch notes');
//       }
//     };
//     fetchNotes();
//   }, []);

//   // Open popup
//   const handleNewNote = () => {
//     setNewTitle('');
//     setNewContent('');
//     setShowPopup(true);
//   };

//   // Submit new note
//   const handleSubmitNewNote = async () => {
//     if (!newTitle.trim() && !newContent.trim()) {
//       alert('Please enter a title or content');
//       return;
//     }

//     try {
//       const res = await API.post(
//         '/notes',
//         { title: newTitle || 'Untitled Note', content: newContent || 'Start writing...' },
//         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
//       );
//       setNotes([res.data, ...notes]);
//       setSelectedNote(res.data._id);
//       setNoteTitle(res.data.title);
//       setNoteContent(res.data.content);
//       setShowPopup(false);
//     } catch (err) {
//       console.error(err);
//       alert('Failed to create note');
//     }
//   };

//   // Select a note
//   const handleSelectNote = (note) => {
//     setSelectedNote(note._id);
//     setNoteTitle(note.title);
//     setNoteContent(note.content);
//   };

//   // Update note content locally
//   const handleUpdateNote = (content) => {
//     setNoteContent(content);
//     setNotes(notes.map((note) => (note._id === selectedNote ? { ...note, content } : note)));
//   };

//   // Save note content to backend on blur
//   const saveNoteContent = async () => {
//     if (!selectedNote) return;
//     try {
//       await API.put(
//         `/notes/${selectedNote}`,
//         { content: noteContent || 'Start writing...' },
//         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Update note title locally
//   const handleUpdateTitle = (title) => {
//     setNoteTitle(title);
//     setNotes(notes.map((note) => (note._id === selectedNote ? { ...note, title } : note)));
//   };

//   // Save note title to backend on blur
//   const saveNoteTitle = async () => {
//     if (!selectedNote) return;
//     try {
//       await API.put(
//         `/notes/${selectedNote}`,
//         { title: noteTitle || 'Untitled Note' },
//         { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // Delete note
//   const handleDeleteNote = async (noteId, e) => {
//     e.stopPropagation();
//     setNotes(notes.filter((note) => note._id !== noteId));
//     if (selectedNote === noteId) {
//       setSelectedNote(null);
//       setNoteContent('');
//       setNoteTitle('');
//     }

//     try {
//       await API.delete(`/notes/${noteId}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//       });
//     } catch (err) {
//       console.error(err);
//       alert('Failed to delete note');
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', backgroundColor: '#ede8dc', padding: '2rem' }}>
//       <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
//           <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e3a4a' }}>Notes</h1>
//           <button onClick={handleNewNote} style={buttonStyle}>+ New Note</button>
//         </div>

//         <div style={{ display: 'flex', gap: '1.5rem', height: 'calc(100vh - 150px)' }}>
//           {/* Notes List */}
//           <div style={sidebarStyle}>
//             {notes.length === 0 ? (
//               <p style={{ textAlign: 'center', color: '#7a8b97' }}>No notes yet</p>
//             ) : (
//               notes.map((note) => (
//                 <div
//                   key={note._id}
//                   onClick={() => handleSelectNote(note)}
//                   style={{
//                     padding: '1rem',
//                     backgroundColor: selectedNote === note._id ? '#e5dfd0' : 'white',
//                     border: selectedNote === note._id ? '2px solid #4a6b78' : '1px solid #c5bfb1',
//                     borderRadius: '0.5rem',
//                     cursor: 'pointer',
//                     position: 'relative',
//                   }}
//                 >
//                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
//                     <div style={{ flex: 1, paddingRight: '0.5rem' }}>
//                       <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2c4a5a', marginBottom: '0.25rem' }}>
//                         {note.title}
//                       </h3>
//                       <p style={{ fontSize: '0.875rem', color: '#7a8b97', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
//                         {note.content || 'No content'}
//                       </p>
//                     </div>
//                     <button onClick={(e) => handleDeleteNote(note._id, e)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#7a8b97', fontSize: '1.25rem' }}>
//                       🗑️
//                     </button>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Note Editor */}
//           <div style={editorStyle}>
//             {selectedNote ? (
//               <>
//                 <input
//                   value={noteTitle}
//                   onChange={(e) => handleUpdateTitle(e.target.value)}
//                   onBlur={saveNoteTitle}
//                   style={editorTitleStyle}
//                   placeholder="Note Title"
//                 />
//                 <textarea
//                   value={noteContent}
//                   onChange={(e) => handleUpdateNote(e.target.value)}
//                   onBlur={saveNoteContent}
//                   style={editorContentStyle}
//                   placeholder="Start typing your note..."
//                 />
//               </>
//             ) : (
//               <p style={{ textAlign: 'center', color: '#7a8b97', marginTop: '3rem' }}>Select a note or create a new one</p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ===== New Note Popup ===== */}
//       {showPopup && (
//         <div style={popupOverlayStyle}>
//           <div style={popupStyle}>
//             <h2 style={{ marginBottom: '1rem', color: '#2c4a5a' }}>Add New Note</h2>
//             <input
//               type="text"
//               value={newTitle}
//               onChange={(e) => setNewTitle(e.target.value)}
//               placeholder="Title"
//               style={popupInputStyle}
//             />
//             <textarea
//               value={newContent}
//               onChange={(e) => setNewContent(e.target.value)}
//               placeholder="Content"
//               style={popupTextareaStyle}
//             />
//             <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
//               <button onClick={() => setShowPopup(false)} style={popupCancelBtnStyle}>Cancel</button>
//               <button onClick={handleSubmitNewNote} style={popupSubmitBtnStyle}>Submit</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ===== Styles =====
// const buttonStyle = {
//   padding: '0.75rem 1.5rem',
//   backgroundColor: '#4a6b78',
//   color: 'white',
//   border: 'none',
//   borderRadius: '0.5rem',
//   fontSize: '1rem',
//   fontWeight: '600',
//   cursor: 'pointer'
// };

// const sidebarStyle = {
//   width: '350px',
//   backgroundColor: '#f5f2ea',
//   border: '2px solid #3d5563',
//   borderRadius: '0.75rem',
//   padding: '1.5rem',
//   overflowY: 'auto'
// };

// const editorStyle = {
//   flex: 1,
//   backgroundColor: '#f5f2ea',
//   border: '2px solid #3d5563',
//   borderRadius: '0.75rem',
//   padding: '2rem',
//   display: 'flex',
//   flexDirection: 'column'
// };

// const editorTitleStyle = {
//   fontSize: '1.75rem',
//   fontWeight: '600',
//   color: '#2c4a5a',
//   backgroundColor: 'transparent',
//   border: 'none',
//   outline: 'none',
//   marginBottom: '1.5rem',
//   padding: '0.5rem 0'
// };

// const editorContentStyle = {
//   flex: 1,
//   fontSize: '1rem',
//   color: '#3d5563',
//   backgroundColor: 'transparent',
//   border: 'none',
//   outline: 'none',
//   resize: 'none',
//   fontFamily: 'inherit',
//   lineHeight: '1.6'
// };

// // ===== Popup Styles =====
// const popupOverlayStyle = {
//   position: 'fixed',
//   top: 0, left: 0,
//   width: '100%', height: '100%',
//   backgroundColor: 'rgba(0,0,0,0.5)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   zIndex: 999
// };

// const popupStyle = {
//   backgroundColor: '#f5f2ea',
//   padding: '2rem',
//   borderRadius: '1rem',
//   width: '400px',
//   boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//   display: 'flex',
//   flexDirection: 'column'
// };

// const popupInputStyle = {
//   padding: '0.5rem',
//   marginBottom: '1rem',
//   fontSize: '1rem',
//   borderRadius: '0.5rem',
//   border: '1px solid #3d5563',
//   outline: 'none'
// };

// const popupTextareaStyle = {
//   padding: '0.5rem',
//   fontSize: '1rem',
//   borderRadius: '0.5rem',
//   border: '1px solid #3d5563',
//   resize: 'vertical',
//   minHeight: '100px',
//   outline: 'none'
// };

// const popupCancelBtnStyle = {
//   padding: '0.5rem 1rem',
//   backgroundColor: '#c5bfb1',
//   border: 'none',
//   borderRadius: '0.5rem',
//   cursor: 'pointer',
//   color: '#1e3a4a',
//   fontWeight: '600'
// };

// const popupSubmitBtnStyle = {
//   padding: '0.5rem 1rem',
//   backgroundColor: '#4a6b78',
//   border: 'none',
//   borderRadius: '0.5rem',
//   cursor: 'pointer',
//   color: 'white',
//   fontWeight: '600'
// };


import React, { useState, useEffect } from 'react';
import API from '../services/api';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [noteContent, setNoteContent] = useState('');
  const [noteTitle, setNoteTitle] = useState('');

  // Popup state
  const [showPopup, setShowPopup] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  // Fetch notes on load
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await API.get('/notes');
        setNotes(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to fetch notes');
      }
    };
    fetchNotes();
  }, []);

  // Open popup
  const handleNewNote = () => {
    setNewTitle('');
    setNewContent('');
    setShowPopup(true);
  };

  // Submit new note
  const handleSubmitNewNote = async () => {
    if (!newTitle.trim() && !newContent.trim()) {
      alert('Please enter a title or content');
      return;
    }

    try {
      const res = await API.post(
        '/notes',
        { title: newTitle || 'Untitled Note', content: newContent || 'Start writing...' }
      );
      setNotes([res.data, ...notes]);
      setSelectedNote(res.data._id);
      setNoteTitle(res.data.title);
      setNoteContent(res.data.content);
      setShowPopup(false);
    } catch (err) {
      console.error(err);
      alert('Failed to create note');
    }
  };

  // Select a note
  const handleSelectNote = (note) => {
    setSelectedNote(note._id);
    setNoteTitle(note.title);
    setNoteContent(note.content);
  };

  // Update note content locally
  const handleUpdateNote = (content) => {
    setNoteContent(content);
    setNotes(notes.map((note) => (note._id === selectedNote ? { ...note, content } : note)));
  };

  // Save note content to backend on blur
  const saveNoteContent = async () => {
    if (!selectedNote) return;
    try {
      await API.put(
        `/notes/${selectedNote}`,
        { content: noteContent || 'Start writing...' }
      );
    } catch (err) {
      console.error(err);
    }
  };

  // Update note title locally
  const handleUpdateTitle = (title) => {
    setNoteTitle(title);
    setNotes(notes.map((note) => (note._id === selectedNote ? { ...note, title } : note)));
  };

  // Save note title to backend on blur
  const saveNoteTitle = async () => {
    if (!selectedNote) return;
    try {
      await API.put(
        `/notes/${selectedNote}`,
        { title: noteTitle || 'Untitled Note' }
      );
    } catch (err) {
      console.error(err);
    }
  };

  // Delete note
  const handleDeleteNote = async (noteId, e) => {
    e.stopPropagation();
    setNotes(notes.filter((note) => note._id !== noteId));
    if (selectedNote === noteId) {
      setSelectedNote(null);
      setNoteContent('');
      setNoteTitle('');
    }

    try {
      await API.delete(`/notes/${noteId}`);
    } catch (err) {
      console.error(err);
      alert('Failed to delete note');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ede8dc', padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1e3a4a' }}>Notes</h1>
          <button onClick={handleNewNote} style={buttonStyle}>+ New Note</button>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', height: 'calc(100vh - 200px)', maxHeight: '700px' }}>
          {/* Notes List */}
          <div style={sidebarStyle}>
            {notes.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#7a8b97' }}>No notes yet</p>
            ) : (
              notes.map((note) => (
                <div
                  key={note._id}
                  onClick={() => handleSelectNote(note)}
                  style={{
                    padding: '1rem',
                    backgroundColor: selectedNote === note._id ? '#e5dfd0' : 'white',
                    border: selectedNote === note._id ? '2px solid #4a6b78' : '1px solid #c5bfb1',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    position: 'relative',
                    marginBottom: '0.75rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ flex: 1, paddingRight: '0.5rem' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#2c4a5a', marginBottom: '0.25rem' }}>
                        {note.title}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#7a8b97', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {note.content || 'No content'}
                      </p>
                    </div>
                    <button onClick={(e) => handleDeleteNote(note._id, e)} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#7a8b97', fontSize: '1.25rem' }}>
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Note Editor */}
          <div style={editorStyle}>
            {selectedNote ? (
              <>
                <input
                  value={noteTitle}
                  onChange={(e) => handleUpdateTitle(e.target.value)}
                  onBlur={saveNoteTitle}
                  style={editorTitleStyle}
                  placeholder="Note Title"
                />
                <textarea
                  value={noteContent}
                  onChange={(e) => handleUpdateNote(e.target.value)}
                  onBlur={saveNoteContent}
                  style={editorContentStyle}
                  placeholder="Start typing your note..."
                />
              </>
            ) : (
              <p style={{ textAlign: 'center', color: '#7a8b97', marginTop: '3rem' }}>Select a note or create a new one</p>
            )}
          </div>
        </div>
      </div>

      {/* ===== New Note Popup ===== */}
      {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={popupStyle}>
            <h2 style={{ marginBottom: '1rem', color: '#2c4a5a' }}>Add New Note</h2>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Title"
              style={popupInputStyle}
            />
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder="Content"
              style={popupTextareaStyle}
            />
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button onClick={() => setShowPopup(false)} style={popupCancelBtnStyle}>Cancel</button>
              <button onClick={handleSubmitNewNote} style={popupSubmitBtnStyle}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ===== Styles =====
const buttonStyle = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#4a6b78',
  color: 'white',
  border: 'none',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer'
};

const sidebarStyle = {
  width: '350px',
  backgroundColor: '#f5f2ea',
  border: '2px solid #3d5563',
  borderRadius: '0.75rem',
  padding: '1.5rem',
  overflowY: 'auto'
};

const editorStyle = {
  flex: 1,
  backgroundColor: '#f5f2ea',
  border: '2px solid #3d5563',
  borderRadius: '0.75rem',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column'
};

const editorTitleStyle = {
  fontSize: '1.75rem',
  fontWeight: '600',
  color: '#2c4a5a',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  marginBottom: '1.5rem',
  padding: '0.5rem 0'
};

const editorContentStyle = {
  flex: 1,
  fontSize: '1rem',
  color: '#3d5563',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  resize: 'none',
  fontFamily: 'inherit',
  lineHeight: '1.6'
};

// ===== Popup Styles =====
const popupOverlayStyle = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100%', height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999
};

const popupStyle = {
  backgroundColor: '#f5f2ea',
  padding: '2rem',
  borderRadius: '1rem',
  width: '400px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  display: 'flex',
  flexDirection: 'column'
};

const popupInputStyle = {
  padding: '0.5rem',
  marginBottom: '1rem',
  fontSize: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #3d5563',
  outline: 'none'
};

const popupTextareaStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '0.5rem',
  border: '1px solid #3d5563',
  resize: 'vertical',
  minHeight: '100px',
  outline: 'none'
};

const popupCancelBtnStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#c5bfb1',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  color: '#1e3a4a',
  fontWeight: '600'
};

const popupSubmitBtnStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#4a6b78',
  border: 'none',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  color: 'white',
  fontWeight: '600'
};