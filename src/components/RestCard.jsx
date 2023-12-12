import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row ,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';



function RestCard({cafe}) {
  return (
    <>

    <Link to={`/cafe-view/${cafe.id}`} style={{textDecoration:'none'}}>

        <Card style={{ width: '100%'}}>
          <Card.Img height={'250px'} variant="top"
           src={cafe.photograph} />
          <Card.Body>
            <Card.Title className='text-center text-warning'>{cafe.name}</Card.Title>
            <hr />
            <Card.Text>
                <Row className='p-4'>
                    <Col className='ms-4'>
                        <Card.Text>
                        {cafe.neighborhood}
                        </Card.Text>
                    </Col>
    
                    <Col className='ms-4'>
                        <Card.Text>
                        cuisine_type:{cafe.cuisine_type}
                        </Card.Text>
                    </Col>
                </Row>
              
            </Card.Text>
          </Card.Body>
        </Card>
    </Link>
    </>
  )
}

export default RestCard