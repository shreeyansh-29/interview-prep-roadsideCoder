import { useTabsContext } from "./TabsContext";

const TabItem = ({ value, label, onClick }) => {
  const { setValue } = useTabsContext();
  const handleClick = ({ value, label }) => {
    setValue(value);
    onClick?.({ value, label });
  };

  return (
    <button
      className="tab"
      onClick={() => handleClick({ value, label })}
      type="button"
      role="tab"
      aria-label={`switch to ${label} tab`}
    >
      {label}
    </button>
  );
};

TabItem.displayName = "TabItem";

export { TabItem };
