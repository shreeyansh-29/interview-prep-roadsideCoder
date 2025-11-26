import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TabsContext } from "./TabsContext";
import "./css/tab.css";

export function Tabs({
  value: controlledValue,
  defaultValue,
  onChange,
  children,
}) {
  const isControlled = typeof controlledValue !== "undefined";
  const [unControlledValue, setUnControlledValue] = useState(defaultValue);
  const value = isControlled ? controlledValue : unControlledValue;

  const setValue = useCallback(
    (newValue) => {
      if (!isControlled) {
        setUnControlledValue(newValue);
      }
      onChange?.(newValue);
    },
    [isControlled, onChange]
  );

  // Fallback logic
  useEffect(() => {
    if (!value && !defaultValue) {
      const tabListChild = React.Children.toArray(children).find(
        (child) => child.type?.displayName === "TabList"
      );
      const fallbackChild = React.Children.toArray(
        tabListChild.props.children
      ).find(
        (child) => child.type?.displayName === "TabItem" && child.props.value
      );

      setValue(fallbackChild.props.value);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      value,
      onChange,
      setValue,
    }),
    [onChange, value, setValue]
  );

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
}
