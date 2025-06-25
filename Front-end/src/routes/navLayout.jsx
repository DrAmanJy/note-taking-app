import Navbar from "../components/navbar";
import { Outlet } from "react-router";

const NavLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default NavLayout;
