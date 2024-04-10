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
        <Row>
          <Col className="d-none d-lg-block" lg={3}>
            <ActiveBookings />
          </Col>
          <Col lg={6}>
            <ProfileDetail />
          </Col>
          <Col className="d-none d-lg-block" lg={3}>
            <ExpiredBookings />
          </Col>
        </Row> 
      </div>
      <Footer />
      </>
  )
}
