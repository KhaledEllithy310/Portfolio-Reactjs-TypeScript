import { Disclosure } from "@headlessui/react";
import { Linkedin, MenuIcon, X } from "lucide-react";
import { INavigation } from "../../Interfaces";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../Data";
interface INavbarProps {
  navigation: INavigation[];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ navigation }: INavbarProps) => {
  const location = useLocation();

  //========RENDERS========//
  const renderNavigation = navigation.map((item) => (
    <Link
      key={item.name}
      to={item.to}
      className={classNames(
        item.to === location.pathname
          ? "capitalize text-primary font-extrabold"
          : "capitalize text-neutral-200 hover:bg-primary hover:text-secondary",
        "rounded-md px-2 py-2 text-[11px] sm:text-sm font-medium"
      )}
    >
      {item.name}
    </Link>
  ));

  return (
    <Disclosure
      as="nav"
      className="bg-secondary shadow-md fixed right-0 left-0 top-0 z-50"
    >
      {({ open }) => (
        <>
          <div className="mx-auto container ">
            <div className="relative flex h-24 md:h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0  items-center hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? <X color="#fff" /> : <MenuIcon color="#fff" />}
                </Disclosure.Button>
              </div>
              <div className="flex flex-col md:flex-row flex-1 items-center justify-center sm:items-center sm:justify-between">
                {/* LOGO */}
                <div className="flex flex-shrink-0 items-center">
                  <Link to={""}>
                    <img className=" h-10 md:h-14" src={logo} alt="logo" />
                  </Link>
                </div>
                {/* navigation  */}
                <div className=" sm:ml-6 sm:block items-center">
                  <div className="flex gap-1 sm:space-x-4 items-center">
                    {renderNavigation}
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/khaled-ellithy-74933826b/"
                  aria-label="contact us"
                  target="_blank"
                  className="hidden md:flex items-center gap-2 bg-primary text-secondary p-1.5 rounded-md  duration-200 hover:bg-primary2 hover:text-secondary hover:border-primary "
                >
                  <span className="w-7 h-7 ">
                    {/* <img src={icons.linkedin} alt='linkedin' /> */}
                    <Linkedin />
                  </span>
                  <span className="font-bold capitalize">let's connect</span>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.to === location.pathname
                      ? "capitalize bg-gray-900 text-primary"
                      : "capitalize text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
