const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((e) => {
      return insertNode(e, folderId, item, isFolder);
    });
    return {...tree, items: latestNode};
  }

  function deleteNode(tree, folderId) {
    if (tree.id === folderId) {
      // If the current tree node matches the folderId, return null to indicate deletion
      return null;
    }
    // Recursively traverse the tree and delete the node with folderId
    const updatedItems = tree.items
      .map((node) => deleteNode(node, folderId))
      .filter((node) => node !== null);
    return {...tree, items: updatedItems};
  }

  return {insertNode, deleteNode};
};

export default useTraverseTree;
