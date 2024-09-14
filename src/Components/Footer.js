import React from 'react'

export default function Footer(props) {
  return (
    <>
     <div style={{color:props.mode==="light"?"black":"white"}} className={`container-fluid bg-${props.mode} text-center`}>Copyright&copy; 2024. All rights reserved. <br />Suggest a feature on <a className='text-success' href="https://api.whatsapp.com/send/?phone=%2B923006357871&text&type=phone_number&app_absent=0">Whatsapp</a></div> 
    </>
  )
}
