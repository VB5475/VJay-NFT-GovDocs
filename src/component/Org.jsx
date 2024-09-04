import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import Navbar from './Navbar'


const Org = () => {

    const user = JSON.parse(Cookies.get("generate-user"))
    const accessToken = Cookies.get('generate-user-access-token');
    const navigate = useNavigate();

    useEffect(()=>{
        if(!accessToken){    
          navigate('/login')
        }
      },[])

    const handelClick = ()=>{
        navigate('/GenerateCertificate/form')
    }

    
  return (

    <div className='bg-purple-200'>
        <Navbar photourl={user.photo}/>

        <div className="mainbody flex-col items-center justify-center">


          {/* for make new samart contract */}
          <div className="new-contract flex justify-center">
            <button className='text-white bg-blue-600 font-medium text-xl p-3 rounded-lg mt-5'>New Smart Contract</button>
          </div>

          <div className="past-contract flex-col space-x-10 h-96 mt-10 justify-center items-center bg-purple-300 m-5 rounded-lg">
            <div className='text-center text-4xl font-medium p-16 pb-0 underline'>Current Smart Contracts</div>
            <div className='text-center'>For Institution and Private Organizations</div>

            <div className='flex space-x-40 justify-center items-center h-[100%]'>

             <button className='text-white bg-blue-600 font-medium text-xl p-3 rounded-lg mt-5 px-10' onClick={handelClick}>2023</button>
             <button className='text-white bg-blue-600 font-medium text-xl p-3 rounded-lg mt-5 px-10' onClick={handelClick}>2022</button>
             <button className='text-white bg-blue-600 font-medium text-xl p-3 rounded-lg mt-5 px-10' onClick={handelClick}>2021</button>

            </div>
          

          </div>
         
          
        </div>
    </div>
      
    
  )
}

export default Org
