import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import "../assets/css/babyStyle.css";
import NavbarUser from "./NavbarUser";
import useAuthContext from "../context/AuthContext";
import GuestButtons from "./GuestButtons";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { Image } from "react-bootstrap";
import Logo from '../assets/img/logo.png'
import { getAuthors } from "../slice/authorSlice";
import { useSelector,useDispatch  } from 'react-redux';
import { getAllBooks, selezionaCategoria } from "../slice/bookSlice";

//VOCI NAVBAR
const navigation = [
  { name: 'Lista Autori', href: "/author-list", current: true },
  /*  { name: 'Team', href: '#', current: false }, */
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {


  /* ----------------ROBA INERENTE LA RICERCA -------------------- */
  const dispatch = useDispatch()
  const location = useLocation();
  const [query, setQuery] = useState("");
  const advancedQuery = useSelector(state=>state.query)
  const [categoriaRicerca, setCategoriaRicerca] = useState(null);
  const categoriaSelezionata = useSelector(state=>state.libri.categoriaSelezionata)

  const handleInputChange = (event) => {
    setQuery(event.target.value.trim());
    if (event.target.value.trim() == "") {
      if (location.pathname === "/") {
        dispatch(getAllBooks());
      } else if (location.pathname === "/author-list/") {
        dispatch(getAuthors());
      }
    }
  };
  function cerca(event) {
    console.log(location.pathname);
    event.preventDefault();
    if (location.pathname === "/") { 
      dispatch(selezionaCategoria(categoriaRicerca));
      dispatch(getAllBooks({title:query}));     
    }else if (location.pathname === "/author-list"){
      dispatch(getAuthors({author:query}));
    }
  }


  /* ----------------FINE ROBA INERENTE LA RICERCA -------------------- */

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal((cur) => !cur);
  const { user, logout } = useAuthContext();
  const { pathname } = useLocation();
  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
  };



  return (
    <Disclosure as="nav" className="bg-slate-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={"/"}>
                    <Image

                      className="h-10 w-auto"
                      src={Logo}
                      alt="Librioteca"
                    />
                  </Link>
                </div>
                {/* admin button */}
                {user?.is_admin && (pathname !== '/admin') ?

                  <Link className="nav-link text-white py-3 px-3 ms-4 rounded-lg border border-white"
                    to={"/admin"}>
                    Admin
                  </Link> : ''}
                {user?.is_admin && (pathname === '/admin') ?
                  <Link className="nav-link text-white py-3 px-3 ms-4 rounded-lg border border-white"
                    to={"/"}>
                    Home
                  </Link> : ''}
                {/* end admin button */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-white text-dark font-bold font-sans no-underline mt-1.5"
                              : "text-dark hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </>
                    ))}
                  </div>
                </div>
              </div>


              {/* Barra di ricerca */}
              <div className="hidden sm:block sm:ml-6 lg:w-96 md:w-44">
                <div className="flex">
                  <form onSubmit={cerca}>
                  <input
                  onChange={handleInputChange}
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  </form>

                  <button className="bg-white p-1 ml-1 rounded-md" onClick={handleOpen}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                  </button>
                  <Dialog
                    size="xs"
                    open={openModal}
                    handler={handleOpen}
                    className="bg-transparent shadow-none"
                  >
                    <Card className="mx-auto w-full max-w-[24rem]">
                      <CardBody className="flex flex-col gap-4 justify-center">
                        <Typography variant="h4" color="blue-gray" className="text-center">
                          RICERCA AVANZATA
                        </Typography>
                        <div className="w-72 flex flex-wrap mx-auto gap-y-2">
                          <Input color="indigo" label="TITOLO LIBRO" />
                          <Input color="indigo" label="NOME AUTORE" />
                          <Input type="number" color="indigo" label="ANNO PUBBLICAZIONE" />
                          <Input color="indigo" label="ESTRATTO" />
                        </div>
                        <CardFooter>

                          <button
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-indigo-900 to-indigo-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button">
                            CERCA
                          </button>

                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Dialog>
                </div>
              </div>


              {/* Profile dropdown */}
              {user ? (
                <NavbarUser user={user} handleLogout={handleLogout} />
              ) : (
                <GuestButtons />
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}

                  <Dialog
                    size="xs"
                    open={open}
                    handler={handleOpen}
                    className="bg-transparent shadow-none"
                  >
                    <Card className="mx-auto w-full max-w-[28rem]">
                      <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                          Ricerca avanzata
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                          Your Email
                        </Typography>
                        <Input label="Email" size="lg" />
                        <Typography className="-mb-2" variant="h6">
                          Your Password
                        </Typography>
                        <Input label="Password" size="lg" />
                        <div className="-ml-2.5 -mt-3">
                          <Checkbox label="Remember Me" />
                        </div>
                      </CardBody>
                      <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                          Sign In
                        </Button>

                      </CardFooter>
                    </Card>
                  </Dialog>

                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>


        </>
      )}
    </Disclosure>
  );
}
