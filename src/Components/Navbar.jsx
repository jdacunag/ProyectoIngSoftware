import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";

function NavList() {
  const navigate = useNavigate();
  const handleonclick = () => {
    navigate("/")
  }

  return (

    <ul className="my-2 flex gap-2 lg:mb-0 lg:mt-0  lg:items-center lg:gap-6" >
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors text-black" onClick={handleonclick}>
          Logout
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors text-black">
          Cuenta
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors text-black">
        Informacion a tu alcance
        </a>
      </Typography>
    </ul>
  );
}

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar >
      <div style={{style:'block'}}>
          <NavList />
      </div>
    </Navbar>
  );
}
