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
      {/* {posts.length > 0 ?  */} 
      <Row>
        <Col className="d-none d-md-block" md={{ span: 5 }} lg={2}>
         <LeftBarAuthors categories={author.categories}/>
        </Col>
        <Col md={{ span: 7 }} lg={{ span: 8 }}>
          {/* Componenti Main*/}
          <AuthorDetail author={author}/> {/* qui dentro ci vorrà il fake carousel */}
           
        </Col>
        <Col className="d-none d-md-block" lg={2} style={{ position: "relative" }}>
          {/* Componenti Sidebar Destro*/}
          <MyFavorites />
          
        </Col>
      </Row> 
      {/* : <LoadingHomeComponent />}  */}
      </div>
      <Footer />

    </>
  )
}
