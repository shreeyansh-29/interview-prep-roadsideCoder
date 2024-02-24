import {useState} from "react";
import "./styles.css";

const Folder = ({explorer, handleInsertNode, handleDeleteNode}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({visible: true, isFolder});
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({...showInput, visible: false});
    }
  };

  const handleDelete = (e, elementId) => {
    e.stopPropagation();
    handleDeleteNode(elementId);
  };

  if (explorer.isFolder) {
    return (
      <div style={{marginTop: "5px"}}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            {/* {explorer.name !== "root" && (
              <button onClick={(e) => handleDelete(e, explorer.id)}>X</button>
            )} */}
          </div>
        </div>
        <div style={{display: expand ? "block" : "none", paddingLeft: "25px"}}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onKeyDown={onAddFolder}
                className="inputContainer__input"
                autoFocus
                type="text"
                onBlur={() => setShowInput({...showInput, visible: false})}
              />
            </div>
          )}
          {explorer?.items?.map((exp) => {
            return (
              <Folder
                handleDeleteNode={handleDeleteNode}
                handleInsertNode={handleInsertNode}
                explorer={exp}
                key={exp.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <span className="file">
        📄 {explorer.name}
        {/* <button onClick={(e) => handleDelete(e, explorer.id)}>X</button> */}
      </span>
    );
  }
};

export default Folder;
