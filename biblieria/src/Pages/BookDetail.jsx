import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RelatedContent from '../Components/RelatedContent'
import BookDetailComponent from '../Components/BookDetailComp/BookDetailComponent'
import MyFavorites from '../Components/MyFavorites'
import Pagination from '../Components/Pagination'
import ActiveBookings from '../Components/ActiveBookings'
import Footer from '../Components/Footer';




export const BookDetail = () => {
  return (
    <>
      <div className='mx-3'>
      {/* {posts.length > 0 ?  */}
      <Row>
        <Col className="d-none d-md-block" md={{ span: 5 }} lg={2}>
         <RelatedContent />
        </Col>
        <Col md={{ span: 7 }} lg={{ span: 8 }}>
          {/* Componenti Main*/}
          <BookDetailComponent />
           
        </Col>
        <Col className="d-none d-md-block" lg={2} style={{ position: "relative" }}>
          {/* Componenti Sidebar Destro*/}
          <MyFavorites />
          
          <ActiveBookings />
          
        </Col>
      </Row> 
      {/* : <LoadingHomeComponent />}  */}
      </div>
      <Footer />

      
    </>
    
  )
}
