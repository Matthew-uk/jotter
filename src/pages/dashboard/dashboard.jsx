import React, { useRef } from "react";
import { useLogOut } from "../../hooks/useLogout";
import { useJotterStore } from "../../hooks/useJotterStore";
import { useCollection } from "../../hooks/useCollection";
import Loading from "./../../components/loading/loading";
import Note from "../../components/Notes/note";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./dashboard.css";
import Nav from "../../components/nav/nav";

const Dashboard = () => {
  const { logOut } = useLogOut();
  const { addDocument, deleteDocument } = useJotterStore("Notes");
  const titleRef = useRef("");
  const noteRef = useRef("");
  const { document, loading, error } = useCollection("Notes");
  const { user } = useAuthContext();
  const filteredDocs = document.filter((doc) => doc.uid === user.uid);

  const handleLogOut = () => {
    logOut();
  };

  const handleAddDocument = () => {
    addDocument(titleRef.current.value, noteRef.current.value);
    titleRef.current.value = "";
    noteRef.current.value = "";
  };

  const NotesList = () => {
    return (
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
    );
  };

  const DashboardBody = () => {
    return (
      <div className="dashboard">
        <Nav />
        <div className="notepad">
          <div className="wrapper">
            <input
              type="text"
              className="title"
              placeholder="Title..."
              ref={titleRef}
            />
            <textarea
              className="paper"
              placeholder="Enter Notes..."
              cols="20"
              rows="10"
              ref={noteRef}
            ></textarea>
          </div>
          {error && <p>{error}</p>}
          <button onClick={handleAddDocument}>Add Document</button>
        </div>
        <NotesList />
      </div>
    );
  };

  return <div>{loading ? <Loading /> : <DashboardBody />}</div>;
};

export default Dashboard;
