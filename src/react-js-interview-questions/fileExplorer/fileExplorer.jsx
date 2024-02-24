import {useState} from "react";
import explorer from "./data";
import Folder from "./folder";
import useTraverseTree from "./useTraverseTree";

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const {insertNode, deleteNode} = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorer, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  const handleDeleteNode = (folderId) => {
    const finalTree = deleteNode(explorer, folderId);
    setExplorerData(finalTree);
  };

  return (
    <div>
      <Folder
        explorer={explorerData}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
};

export default FileExplorer;
