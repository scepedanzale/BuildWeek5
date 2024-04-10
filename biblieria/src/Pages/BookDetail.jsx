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
      <Row>
        <Col className="d-none d-lg-block" lg={3}>
         <RelatedContent />
        </Col>
        <Col>
          <BookDetailComponent />
        </Col>
        <Col className="d-none d-lg-block" lg={3}>
          <MyFavorites />
          <ActiveBookings />
        </Col>
      </Row> 
      </div>
      <Footer />

      
    </>
    
  )
}
