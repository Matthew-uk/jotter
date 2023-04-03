import React from "react";

const Note = ({ doc, deleteDocument }) => {
  const handleDelete = async () => {
    await deleteDocument(doc.id);
    console.log("Message deleted!!!");
  };
  return (
    <div>
      <h3>{doc.title}</h3>
      <p>{doc.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
