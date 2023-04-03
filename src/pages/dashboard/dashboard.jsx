import React, { useState } from "react";
import { useLogOut } from "../../hooks/useLogout";
import { useJotterStore } from "../../hooks/useJotterStore";
import { useCollection } from "../../hooks/useCollection";
import Loading from "./../../components/loading/loading";
import Note from "../../components/Notes/note";
import { useAuthContext } from "../../hooks/useAuthContext";

const Dashboard = () => {
  const { logOut } = useLogOut();
  const { addDocument, deleteDocument } = useJotterStore("Notes");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const { document, loading, error } = useCollection("Notes");
  const { user } = useAuthContext();
  const filteredDocs = document.filter((doc) => doc.uid === user.uid);

  const handleLogOut = () => {
    logOut();
  };

  const handleAddDocument = () => {
    addDocument(title, note);
  };

  const DashboardBody = () => {
    return (
      <div>
        <button onClick={handleLogOut}>Log Out</button>
        <div className="notepad">
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="Enter Notes..."
            cols="20"
            rows="10"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          {error && <p>{error}</p>}
          <button onClick={handleAddDocument}>Add Document</button>
        </div>
        <div className="notes">
          {document &&
            filteredDocs.map((doc) => (
              <Note
                key={doc.id.concat(doc.uid)}
                deleteDocument={deleteDocument}
                doc={doc}
              />
            ))}
        </div>
      </div>
    );
  };

  return <div>{loading ? <Loading /> : <DashboardBody />}</div>;
};

export default Dashboard;
