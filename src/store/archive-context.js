import axios from "axios";
import { createContext } from "react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useNote } from "./note-context";

const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {
  const { setInitialData, initialData } = useNote();
  useEffect(async () => {
    try {
      console.log(localStorage.getItem("token"));
      if (localStorage.getItem("token")) {
        const response = await axios.get("/api/archives", {
          headers: { authorization: localStorage.getItem("token") },
        });
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [archivesList, setArchivesList] = useState([]);
  const addToArchive = async (id) => {
    const note = initialData.filter((item) => item["_id"] === id);
    console.log(note);
    if (localStorage.getItem("token")) {
      try {
        const {
          data: { notes, archives },
        } = await axios.post(
          `/api/notes/archives/${id}`,
          {
            note,
          },
          { headers: { authorization: localStorage.getItem("token") } }
        );
        setArchivesList(archives);
        setInitialData(notes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeArchive = async (id) => {
    if (localStorage.getItem("token")) {
      try {
        const {
          data: { archives },
        } = await axios.delete(
          `/api/archives/delete/${id}`,

          { headers: { authorization: localStorage.getItem("token") } }
        );
        setArchivesList(archives);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <ArchiveContext.Provider
      value={{ archivesList, setArchivesList, addToArchive, removeArchive }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};

const useArchive = () => useContext(ArchiveContext);

export { useArchive, ArchiveProvider };
