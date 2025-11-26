import { useContext, createContext } from "react";

export const TabsContext = createContext();

export const useTabsContext = () => {
  const tabsContext = useContext(TabsContext);
  return tabsContext;
};
