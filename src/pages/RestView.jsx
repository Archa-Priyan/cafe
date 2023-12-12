import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RestView() {
    const [show, setShow] = useState(false);
    const {id} =useParams()
    console.log(id);

    const allCafe = useSelector((state)=>state.cafeSlice.allCafe)
    console.log(allCafe);

    const selectedcafe = allCafe.find(item =>item.id == id)
    console.log(selectedcafe);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <Row className='mt-5 mb-5' >
            <Col md={1}></Col>
            <Col md={3}>
                <img width={'100%'} height={'500px'} className='rounded'
                 src={selectedcafe.photograph} alt="" />
            </Col>
            <Col md={7} className='p-4'>
                <hr />
                <h4 className='text-center'><span className='text-warning'>Restaurant</span> Details</h4>
                <hr />

    <ListGroup>
      <ListGroup.Item><h4 className='text-center p-4'>{selectedcafe.name} </h4></ListGroup.Item>
      <ListGroup.Item>Neighborhood:  {selectedcafe.neighborhood}  </ListGroup.Item>
      <ListGroup.Item>Cuisine_type:  {selectedcafe.cuisine_type} </ListGroup.Item>
      <ListGroup.Item>Address:  {selectedcafe.address}  </ListGroup.Item>
      <ListGroup.Item className='text-center p-3 mb-2'>
            <button onClick={handleShow} className='btn btn-warning me-4'>Operating Hours</button>
    
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ListGroup>
          <ListGroup.Item>Monday:  {selectedcafe.operating_hours.Monday}</ListGroup.Item>
          <ListGroup.Item>Tuesday: {selectedcafe.operating_hours.Tuesday}</ListGroup.Item>
          <ListGroup.Item>Wedesday: {selectedcafe.operating_hours.Wednesday}</ListGroup.Item>
          <ListGroup.Item>Thursday: {selectedcafe.operating_hours.Thursday}</ListGroup.Item>
          <ListGroup.Item>Friday:  {selectedcafe.operating_hours.Friday}</ListGroup.Item>
          <ListGroup.Item>Saturday: {selectedcafe.operating_hours.Saturday}</ListGroup.Item>
          <ListGroup.Item>Sunday:  {selectedcafe.operating_hours.Sunday}</ListGroup.Item>
    
          </ListGroup>
            </Modal.Body>
            
          </Modal>
          
          <RestReview/>
       



        
      </ListGroup.Item>
    </ListGroup>
    <hr />
            </Col>
            
            <Col md={1}></Col>
           
        </Row>
       
    </>
  )
}

export default RestView