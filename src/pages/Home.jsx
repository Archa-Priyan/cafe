import React, { useEffect } from 'react'
import { Row ,Col} from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCafe } from '../redux/cafeSlice'
import Spinner from 'react-bootstrap/Spinner';


function Home() {

    const  {allCafe, loading, error} = useSelector((state)=> state.cafeSlice)
    console.log(loading);
    console.log(allCafe);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCafe())
    },[])
  return (
    <>
      {/* <div className='mt-3'>
          {
            loading &&
            <p> <Spinner animation="border" className='text-warning' />Loading....</p>
          }
        </div> */}
      <Row>
  
        
  
        {
        allCafe?.length>0?
        allCafe?.map((cafe)=>(<Col className='px-5 py-3' sm={6} md={4}>
        <RestCard cafe={cafe}/>
    </Col>))
          : <p className='text-danger fw-bolder'>no restaurant available</p>
        }
          
      </Row>
    </>
  )
}

export default Home