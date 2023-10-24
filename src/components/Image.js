
import {useState } from "react";
import Modal from "./Modal" 


const Image = ({ data }) => {
  
  const [showModal, setShowModal]=useState(false)
  const handleClose =()=> setShowModal(false)
  
  const handleOn=()=>{
    setShowModal(true)
  }

   return (

   <>
      <div 
      onClick={handleOn}
      className="p-5 rounded-3xl shadow-md bg-white" >
        <article key={data.id} className="rounded-3xl" >
        
         <img
            src={data.urls.regular}
            alt={data.user.username}
            className="h-52 object-fit object-cover w-full lg:h-80 rounded-3xl"
            
          />
           

          <div className="p-5 pb-0 flex flex-col md:flex-row items-start md:items-center justify-between">
            <article className="flex items-center justify-start ">
              <img
                src={data.user.profile_image.medium}
                alt={data.user.username}
                className="rounded-full mr-2 w-10 md:w-auto "
              />
              <ul>
                <li className="text-slate-800 font-bold">{data.user.name}</li>
                
              </ul>
            </article>

            <article className="mt-5 md:mt-0 mr-0">
              <a
                href={`https://instagram.com/${data.user.instagram_username}`}
                className="text-sm text-slate-800 underline "
                target="_blank"
                rel="noreferrer"
              >
                {data.user.instagram_username}
              </a>
              <small className="text-slate-800 block ">
                {data.likes} Likes
              </small>
            </article>
          </div>
        </article>
      </div>
         <Modal onClose={handleClose} visible={showModal} data={data}/>
    </>
  )
}


export default Image