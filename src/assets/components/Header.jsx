import Logo from "./Logo";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const closeNav = () => {
    document.querySelector(".sidenavContainer").classList.toggle("eliminate");
  };

  return (
    <>
      <header className="heading flex  z-20 justify-between font-semibold py-5 font-Poppins items-center fixed w-[100%] left-0 ">
        <div className="cursor-pointer flex gap-x-2 items-center">
          <Logo />
          <p>
            <span className="text-[#BB78A4]">Beauty</span>
            <span>Lab</span>
          </p>
        </div>

        <nav className="navlinks">
          <ul className="flex gap-x-10">
            <li className="nav-link">Beauty</li>
            <li className="nav-link">Treatment</li>
            <li className="nav-link">About</li>
            <li className="nav-link">Products</li>
            <li className="nav-link">Price List</li>
          </ul>
        </nav>
        <div className="text-[#BB78A4] cursor-pointer flex ">
          <span>Free Consultation</span>
          <FaBars
            className="sidenav text-xl cursor-pointer ml-1 text-black"
            onClick={() => closeNav()}
          />
        </div>
      </header>
      <div className="sidenavContainerParent font-Poppins">
        <div className="sidenavContainer z-40">
          <ul className="sidenavElements">
            <li className="closePageTransition" onClick={closeNav}>
              <a href="#" onClick={closeNav}>
                Beauty
              </a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Treatment</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">About</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Products</a>
            </li>
            <li onClick={closeNav}>
              <a href="#">Price List</a>
            </li>
            <li
              className="closeSidenav closePageTransition "
              onClick={closeNav}
            >
              <RxCross2 className="text-xl  m-auto cursor-pointer" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
