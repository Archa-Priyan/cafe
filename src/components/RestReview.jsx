import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function RestReview() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <button  onClick={() => setOpen(!open)} className='btn btn-warning'>Click here to see Review</button>

    <Collapse in={open}>
        <div className='my-2'>
            <hr />
            <div className='mt-5'>
                <h6>name and date</h6>
                <p>Rating</p>
                <p>Description</p>
            </div>
        </div>
    </Collapse>
    </>
  )
}

export default RestReview