import React from 'react'
import { useState } from 'react'

function login() {

  const [state,setState]= useState("sign up")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [name,setName]= useState("")

 async function onSubmitHandler(eve){
          eve.preventDefault()

  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4">
      <div className="max-w-md w-full">
        <form onSubmit={onSubmitHandler} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div className="text-center space-y-2">
            <p className="text-2xl font-bold text-gray-800">{state === "sign up" ? "create account" : "Login"}</p>
            <p className="text-gray-600"> please {state === "sign up" ? "sign up" : "log in"} sign up to book appointment</p>
        
          </div>
          {state === "sign up" && (
            <>
              <p className="text-sm font-medium text-gray-700">full name</p>
              <input value={name} onChange={(eve)=>setName(eve.target.value)} type='text' placeholder='full name' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
            </>
          )}
          <p className="text-sm font-medium text-gray-700">email</p>
          <input value={email} onChange={(eve)=>setEmail(eve.target.value)} type='email' placeholder='email' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
          <p className="text-sm font-medium text-gray-700">password</p>
          <input value={password} onChange={(eve)=>setPassword(eve.target.value)} type='password' placeholder='password' className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
      
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium">
              {state === "sign up" ? "create account" : "Login"}
            </button>
            
            <div className="text-center mt-4">
              {
                state === "sign up"? 
                <p className="text-gray-600">Already have an account? 
                  <span onClick={()=>setState("login")} className="text-blue-600 cursor-pointer ml-1 underline">Login here</span>
                </p>
                :
                <p className="text-gray-600">Create a new account? 
                  <span onClick={()=>setState("sign up")} className="text-blue-600 cursor-pointer ml-1 underline">Click here</span>
                </p>
              }
            </div>
            
          
          
        </form>
      </div>
    </div>
       
  )
}

export default login