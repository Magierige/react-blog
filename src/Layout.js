import { Outlet, Link } from "react-router-dom";
import { useNav } from "./NavContext";
import Cookies from 'universal-cookie';


export default function Layout() {
  const {links, updateNav} = useNav();
  const cookies = new Cookies();
  if (cookies.get('data')) {
    updateNav({
      class1: "mr-3",
      link2: "Dashboard",
      class2: "mr-auto",
      link3: "Logout",
    });
  }

  return (
    <>
      <nav className="bg-lime-300">
        <ul className="flex flex-row ">
          <li className={links.class1}>
            <Link  to="/" >{links.link1}</Link>
          </li>
          <li className={links.class2}>
            <Link  to={'/' + links.link2}>{links.link2}</Link>
          </li>
          <li className={links.class3}>
            <Link  to={'/' + links.link3}>{links.link3}</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

