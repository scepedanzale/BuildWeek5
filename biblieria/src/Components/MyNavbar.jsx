import React, { useState } from "react"; 
import useAuthContext from "../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import { Container, Image, Nav, NavDropdown, Navbar, NavbarBrand, Row, Col } from "react-bootstrap";
import Logo from '../assets/img/logo.png'
import { getAuthors } from "../slice/authorSlice";
import { useSelector,useDispatch  } from 'react-redux';
import { getAllBooks, selezionaCategoria } from "../slice/bookSlice";


export default function Example() {


  /* ---------------- RICERCA -------------------- */
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
  function search(event) {
    console.log(location.pathname);
    event.preventDefault();
      dispatch(selezionaCategoria(categoriaRicerca));
      dispatch(getAllBooks({title:query}));     
      dispatch(getAuthors({author:query}));
  }
  /* ----------------FINE ROBA INERENTE LA RICERCA -------------------- */

  const { user, logout } = useAuthContext();

  const handleLogout = async (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Navbar expand="md" className="bg-dark sticky-top p-0">
    <Container fluid className="p-0 lg:gap-3">
        <div className="p-0 w-1/3 md:w-1/4">
          <Link to={'/'}><img src={Logo} className="w-full nav-brand"/></Link>
        </div>
        <div className="w-1/3 md:w-2/4 flex align-center p-0 p-1">
            <form onSubmit={search} className="my-auto w-100">
              <input
                onChange={handleInputChange}
                type="text"
                placeholder="Search..."
                className="w-100 px-1 py-1 rounded-md border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </form>
        </div>
        <div className="w-1/4 flex justify-center align-center p-0">
          <div className="w-100 w-lg-50 my-auto flex justify-center align-center gap-3">
            {user ?
                <Link to={'/profile'}><i class="bi bi-person-circle text-4xl hover:text-gray-500"></i></Link>
              :
              <>
                <Link to={'/login'} className="btn btn-secondary btn-sm w-full d-none d-md-block">Login</Link>
                <Link to={'/register'} className="btn btn-secondary btn-sm w-full">Sign Up</Link>
              </>
            }
          </div>
        </div>
    </Container>
  </Navbar>
  );
}


/* 



*/