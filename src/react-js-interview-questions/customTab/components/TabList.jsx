const TabList = ({ children }) => {
  return (
    <div className="tab-list" role="tablist">
      {children}
    </div>
  );
};

TabList.displayName = "TabList";

export { TabList };
