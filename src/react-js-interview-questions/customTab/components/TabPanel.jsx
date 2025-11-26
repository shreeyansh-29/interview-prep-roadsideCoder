import { useTabsContext } from "./TabsContext";

const TabPanel = ({ value, children }) => {
  const { value: contextValue } = useTabsContext();
  if (value === contextValue) {
    return <div role="tabpanel">{children}</div>;
  }

  return null;
};

export { TabPanel };
