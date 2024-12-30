import React, { useState, useEffect, useRef } from "react";

const Journal = () => {
  const [note, setNote] = useState("");
  const [notesList, setNotesList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const lastColorIndex = useRef(null);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notesList");
    if (storedNotes) {
      setNotesList(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notesList", JSON.stringify(notesList));
  }, [notesList]);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSaveNote = () => {
    if (note.trim() !== "") {
      if (editIndex === null) {
        const newNote = {
          text: note.trim(),
          timestamp: new Date().toLocaleString(),
          color: getRandomColor(),
        };
        setNotesList([...notesList, newNote]);
      } else {
        const updatedNotes = [...notesList];
        updatedNotes[editIndex] = {
          ...updatedNotes[editIndex],
          text: note.trim(),
          timestamp: new Date().toLocaleString(),
        };
        setNotesList(updatedNotes);
        setEditIndex(null);
      }
      setNote("");
    }
  };

  const handleEditNote = (index) => {
    setNote(notesList[index].text);
    setEditIndex(index);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notesList];
    updatedNotes.splice(index, 1);
    setNotesList(updatedNotes);
    setEditIndex(null);
  };

  const getRandomColor = () => {
    const colors = [
      "#FFB6C1",
      "#FFA07A",
      "#FF7F50",
      "#FF6347",
      "#FF4500",
      "#FFD700",
      "#FFA500",
      "#FF8C00",
      "#ADD8E6",
      "#90EE90",
    ];
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * colors.length);
    } while (newIndex === lastColorIndex.current);
    lastColorIndex.current = newIndex;
    return colors[newIndex];
  };

  return (
    <div className="journal-container">
      <h2>CN Journal</h2>
      <div className="note-editor">
        <textarea
          value={note}
          onChange={handleNoteChange}
          placeholder="Write your notes here..."
        />
        <button onClick={handleSaveNote}>{editIndex === null ? "Save Note" : "Update Note"}</button>
      </div>
      <div className="notes-list">
        {notesList.map((note, index) => (
          <div
            key={index}
            className="note-item"
            style={{ backgroundColor: note.color }}
          >
            <p>{note.text}</p>
            <div className="note-metadata">
              <span>
                <h6>Last edited on {note.timestamp}</h6>
              </span>
              <div className="note-actions">
                <button onClick={() => handleEditNote(index)}>Edit</button>
                <button onClick={() => handleDeleteNote(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journal;
