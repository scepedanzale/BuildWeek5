import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RelatedContent from '../Components/RelatedContent'
import AuthorDetail from '../Components/AuthorPageComp/AuthorDetail'
import LeftBarAuthors from '../Components/AuthorPageComp/LeftBarAuthors'
import MyFavorites from '../Components/MyFavorites'
import Pagination from '../Components/Pagination'
import ActiveBookings from '../Components/ActiveBookings'
import Footer from '../Components/Footer'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'

export const AuthorPage = () => {

  const {id} = useParams()
    const [author, setAuthor] = useState({})

    useEffect(()=>{
        axios("api/author/"+id)
        .then(response=>setAuthor(response.data))
    }, [id])

  return (
    <>
      <div className='mx-3'>
      <Row>
        <Col className="d-none d-lg-block" lg={2}>
         <LeftBarAuthors categories={author.categories}/>
        </Col>
        <Col lg={7}>
          <AuthorDetail author={author}/> 
           
        </Col>
        <Col className="d-none d-lg-block" lg={3}>
          <MyFavorites />
        </Col>
      </Row> 
      </div>
      <Footer />

    </>
  )
}
