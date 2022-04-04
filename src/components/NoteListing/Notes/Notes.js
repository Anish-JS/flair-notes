import Header from "../../Header/Header";
// import Card from "../../Card/Card";

import "react-quill/dist/quill.snow.css";
import MenuBar from "../SideMenu/MenuBar";
// import "./ProductListing.css";
import "./Notes.css";
import { useEffect } from "react";
import { useNote } from "../../../store/note-context";
import NewNotes from "./NewNotes";
import axios from "axios";
import { useState } from "react";
import Card from "../../Card/Card";
const Notes = () => {
  const { newNote, hideNewNote, addNote, initialData } = useNote();

  // const [initialData, setInitialData] = useState([]);
  // useEffect(async () => {
  //   (async () => {
  //     try {
  //       const {
  //         data: { notes },
  //       } = await axios.get("/api/notes", {
  //         headers: { authorization: localStorage.getItem("token") },
  //       });

  //       setInitialData(notes);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  const notesList = initialData.map((item) => (
    <Card key={item["_id"]} data={item} />
  ));

  return (
    <>
      <Header />
      <div className="section-div bg-dull">
        <div className="left-section md-padding bg-dull">
          <MenuBar />
        </div>
        <div className="right-section editor-container sm-padding bg-dull">
          {notesList.length !== 0 ? (
            <div className="responsive-grid-items">{notesList}</div>
          ) : (
            "There are no notes present"
          )}
        </div>
      </div>

      {newNote && <NewNotes onClose={() => hideNewNote()} addNote={addNote} />}
    </>
  );
};

export default Notes;
