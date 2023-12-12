import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/cafeSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <div>
        <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" style={{color:'white'}}>
          <i class="fa-solid fa-bowl-food text-warning me-3"></i>
             Food
          </Navbar.Brand>
          
            <input  onChange={(e)=>dispatch(search(e.target.value))} 
            type="text" className='form-control w-25' placeholder='search by neighbourhood' />
         
        </Container>
      </Navbar>
    </div>
  )
}

export default Header