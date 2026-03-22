import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer  ()  {
  return (
    <div className="col-12" style={{background:"rgb(0,29,97)"}}>
        <div className='col-11 m-auto p-3 d-flex gap-2 flex-wrap justify-content-between align-items-center'>
            {/* <div className='col-md-6'> */}
                <p className='pink-red fs-5'>© 2026 Kamesh Hedau.</p>
            {/* </div> */}
            {/* <div className='col-md-6'> */}
                <div className='d-flex gap-3'>
                    <a href="https://github.com/Kamesh255" target="_blank" rel="noopener noreferrer">
                      <FaGithub style={{fontSize:'25px'}} className=' pink-red' />

                    </a>
                    <a href="https://www.linkedin.com/in/kamesh-hedau-b22349226/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin style={{fontSize:'25px'}} className='pink-red' />
                    </a>
                    
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}
const styles = {
  footer: {
    width: "100%",
    backgroundColor: "rgb(0,29,97)",
  },
 
};
