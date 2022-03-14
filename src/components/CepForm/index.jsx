import React from 'react'
import { useState, useEffect } from 'react'
import API from '../../services/axios'
const CepForm = () => {
    const [locate, setLocate] = useState()
    useEffect(()=>{
        API.get('/01001000/json/')
        .then((response)=>{
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    })

  return (
    <>
    
    </>
  )
}

export default CepForm