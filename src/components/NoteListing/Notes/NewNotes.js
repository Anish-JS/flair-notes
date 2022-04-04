import "./Notes.css";
import Modal from "../../Modal/Modal";
import ReactQuill from "react-quill";
import { useState } from "react";
import { useNote } from "../../../store/note-context";
const NewNotes = (props) => {
  const [NewNoteDetails, setNewNoteDetails] = useState({
    title: "",
    content: "",
  });
  // const { dispatchNotesState } = useNote();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  // const contentHandler = (value) => {
  //   console.log(value.getContents);
  //   setNewNoteDetails((prev) => ({ ...prev, content: value }));
  // };
  return (
    <>
      <Modal onClose={props.onClose}>
        <div className=" editor-container sm-padding bg-dull">
          <div>
            <label for="textbox" className="xxs-padding bold para-md">
              Add Title
            </label>
            <input
              onChange={(e) =>
                setNewNoteDetails((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              type="text"
              className={`textbox img-xxxl xxs-padding bottom-gutter 
            `}
            />
          </div>
          <h3>Add Note</h3>
          <div className="text-editor">
            <ReactQuill
              onChange={(e) => {
                setNewNoteDetails((prev) => ({
                  ...prev,
                  content: e,
                }));
              }}
              placeholder="add note here"
              className="text-editor-input"
              modules={modules}
            />
          </div>
        </div>
        <div className="card__actions">
          <button
            className="primary-btn login-btn add-note btn-style para-sm bold xs-gutter"
            onClick={() => props.addNote(NewNoteDetails, props.onClose)}
          >
            Add Note
          </button>
        </div>
      </Modal>
    </>
  );
};

export default NewNotes;
