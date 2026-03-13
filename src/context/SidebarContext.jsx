import { createContext, useContext, useState } from 'react';

const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {
  const [active, setActive] = useState('Daily Operations');
  const [ridersActive, setRidersActive] = useState('dashboard');
  const [openMenus, setOpenMenus] = useState({});
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedDirection, setSelectedDirection] = useState(null);

  return (
    <SidebarContext.Provider
      value={{
        active,
        setActive,
        ridersActive,
        setRidersActive,
        openMenus,
        setOpenMenus,
        selectedRoute,
        setSelectedRoute,
        selectedDirection,
        setSelectedDirection,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

export default SidebarContext;
