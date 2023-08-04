import React, { useState, createContext } from "react";

export const SidebarContext = createContext();
const { Provider } = SidebarContext;

const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return <Provider value={{ collapsed, setCollapsed }}>{children}</Provider>;
};

export default SidebarProvider;
