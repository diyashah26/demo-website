import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    const data = useLoaderData()

    // const[data,setData]=React.useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/diyashah26")
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl font-bold'>
        Github id: {data.login}
        
        <img src={data.avatar_url} widht={300} alt=""/> 
    </div>
  )
}

export const githubInfoLoader = async ()=> {
    const response = await fetch("https://api.github.com/users/diyashah26")
    return response.json()
}