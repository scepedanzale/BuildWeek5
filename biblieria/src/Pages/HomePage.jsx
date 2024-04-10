import React, { useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import LeftBar from '../Components/HomepageComp/LeftBar'
import BooksList from '../Components/HomepageComp/BooksList'
import Pagination from '../Components/Pagination'
import MyFavorites from '../Components/MyFavorites'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors } from '../slice/authorSlice';
import { getAllBooks } from "../slice/bookSlice";
import { getPreferiti } from '../slice/preferitiSlice';
import useAuthContext from '../context/AuthContext';
import { getBookings } from '../slice/bookingSlice';

export default function HomePage() {
  const { user } = useAuthContext();
  const dispatch = useDispatch();
  const authors = useSelector(state => state.authors.listaAuthors);
  const loading = useSelector(state => state.authors.loading);
  const erros = useSelector(state => state.authors.error);
  const category = useSelector(state => state.categorie.listaCategorie);
  const listaLibri = useSelector(state => state.libri.listaLibri);

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(getAllBooks());
  }

  useEffect(() => {
    dispatch(getAuthors());
    if (user) {
      dispatch(getPreferiti());
      dispatch(getBookings())
    }
  }, [])
  useEffect(() => {
    console.log(listaLibri);
  }, [listaLibri])

  useEffect(() => {
    console.log(authors)
  }, [authors])



  return (
    <>
      <Container fluid className=''>
        <Row className='w-100 justify-between m-0'>
          <Col className="d-none d-lg-block" lg={2}>
            <LeftBar />
          </Col>
          <Col className='p-0'>
            <BooksList />
          </Col>
          {user && 
          <Col className="d-none d-lg-block" lg={3}>
            <MyFavorites />
          </Col>
          }
        </Row>
      </Container>
      <Footer />
    </>
  )
}