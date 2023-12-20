import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [links, setLinks] = useState({
        link1: "Home",
        class1: "mr-auto",
        link2: "Login",
        class2: "mr-3",
        link3: "Register",
        class3: "mr-3",
    });
    const updateNav = (newNavData) =>{
        setLinks((prevLinks) => ({
            link1: newNavData.link1 || prevLinks.link1,
            link2: newNavData.link2 || prevLinks.link2,
            link3: newNavData.link3 || prevLinks.link3,
            class1: newNavData.class1 || prevLinks.class1,
            class2: newNavData.class2 || prevLinks.class2,
            class3: newNavData.class3 || prevLinks.class3,
        }));
    };

  return (
    <NavContext.Provider value={{ links, updateNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => {
  return useContext(NavContext);
};
export default NavProvider;