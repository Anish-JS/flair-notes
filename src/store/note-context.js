import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
// import { useReducer } from "react";
import { useEffect } from "react";

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [initialData, setInitialData] = useState([]);
  useEffect(async () => {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      try {
        const {
          data: { notes },
        } = await axios.get("/api/notes", {
          headers: { authorization: localStorage.getItem("token") },
        });
        // console.log(notes);
        setInitialData(notes);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  // const [notesState, dispatchNotesState] = useReducer(notesReducer, []);
  const addNote = async (details, closeModal) => {
    const { content } = details;
    const newContent = content.replace("<p>", "").replace("</p>", "");

    const note = {
      ...details,
      content: newContent,
      createdAt: new Date().toLocaleString(),
    };
    try {
      const {
        data: { notes },
      } = await axios.post(
        "/api/notes",
        { note },
        { headers: { authorization: localStorage.getItem("token") } }
      );

      setInitialData(notes);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };
  const removeNote = async (id) => {
    try {
      const {
        data: { notes },
      } = await axios.delete(
        `/api/notes/${id}`,

        { headers: { authorization: localStorage.getItem("token") } }
      );

      setInitialData(notes);
    } catch (error) {
      console.log(error);
    }
  };
  const showNewNote = () => {
    setNewNote(true);
  };
  const hideNewNote = () => {
    setNewNote(false);
  };
  const [newNote, setNewNote] = useState(false);
  return (
    <NoteContext.Provider
      value={{
        newNote,
        showNewNote,
        hideNewNote,
        addNote,
        initialData,
        setInitialData,
        removeNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

const useNote = () => useContext(NoteContext);

export { NoteProvider, useNote };
