import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import ActiveBookings from '../Components/ActiveBookings'
import ProfileDetail from '../Components/ProfilePageComp/ProfileDetail'
import ExpiredBookings from '../Components/ProfilePageComp/ExpiredBookings'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from '../slice/bookingSlice'

export default function ProfilePage() {

  const listaBooking = useSelector(state=> state.bookings.listaBooking)

  const dispatch = useDispatch()

  return (
    <>
      <div className='mx-3'>
        {/* {posts.length > 0 ?  */} 
        <Row>
          <Col className="d-none d-md-block" md={{ span: 5 }} lg={2}>
          <ActiveBookings />
          </Col>
          <Col md={{ span: 7 }} lg={{ span: 8 }}>
            {/* Componenti Main*/}
            <ProfileDetail />
            
          </Col>
          <Col className="d-none d-md-block" lg={2} style={{ position: "relative" }}>
            {/* Componenti Sidebar Destro*/}
            <ExpiredBookings />
          </Col>
        </Row> 
        {/* : <LoadingHomeComponent />}  */}
      </div>
      <Footer />
      </>
  )
}
