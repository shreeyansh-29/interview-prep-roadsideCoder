import {useRef, useState} from "react";
import "./styles.css";
import {useEffect} from "react";
import Pill from "./components/pill";

const MultiSelectInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUsersSet, setSelectedUsersSet] = useState(new Set());
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const inputRef = useRef(null);

  const handleRemoveUser = (user) => {
    const updatedUsers = selectedUsers.filter((ele) => ele.id !== user.id);
    setSelectedUsers(updatedUsers);

    const updatedEmails = new Set(selectedUsersSet);
    updatedEmails.delete(user.email);
    selectedUsersSet(updatedEmails);
  };

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUsersSet(new Set([...selectedUsersSet, user.email]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" &&
      e.target.value === "" &&
      selectedUsers.length >= 0
    ) {
      const lastUsers = selectedUsers[selectedUsers.length - 1];
      handleRemoveUser(lastUsers);
      setSuggestions([]);
    } else if (e.key === "ArrowDown" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) =>
        prevIndex < suggestions.users.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp" && suggestions?.users?.length > 0) {
      e.preventDefault();
      setActiveSuggestion((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    } else if (
      e.key === "Enter" &&
      activeSuggestion >= 0 &&
      activeSuggestion < suggestions.users.length
    ) {
      handleSelectUser(suggestions.users[activeSuggestion]);
    }
  };

  useEffect(() => {
    const fetchUsers = () => {
      setActiveSuggestion(0);
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }
      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((res) => setSuggestions(res))
        .catch((err) => console.log(err));
    };

    fetchUsers();
  }, [searchTerm]);

  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {selectedUsers.map((user) => (
          <Pill
            key={user.email}
            image={user.image}
            onClick={() => handleRemoveUser(user)}
            text={`${user.firstName} ${user.lastName}`}
          />
        ))}
        <div>
          <input
            autoFocus
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a user"
            onKeyDown={handleKeyDown}
          />

          {suggestions?.users?.length ? (
            <ul className="suggestions-list">
              {suggestions?.users?.map((user, index) => {
                return !selectedUsersSet.has(user.email) ? (
                  <li
                    className={index === activeSuggestion ? "active" : ""}
                    key={user.email}
                    onClick={() => handleSelectUser(user)}
                  >
                    <img
                      src={user.image}
                      alt={`${user.firstName} ${user.lastName}`}
                    />
                    <span>
                      {user.firstName} {user.lastName}
                    </span>
                  </li>
                ) : (
                  <></>
                );
              })}
            </ul>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSelectInput;
