import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../Cards/NoteCard'
import {MdAdd} from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  return (
  <>
   <Navbar/>
    <div className="container mx-auto">
    <div className="grid grid-cols-3 gap-4 mt-8">
     
     <NoteCard 
     title="Meeting on 7th April"
     date="3rd Apr 2024"
     content="Meeting on 7th April Meeting on 7th April" 
     tags="#Meeting"
     ispinned={true}
     onEdit={()=>{}}
     onDelete={()=>{}}
     onPinNote={()=>{}}/>
   </div>
    </div>

    <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" onClick={()=> {}}>
      <MdAdd className="text-[32px] text-white"/>
    </button>
  </>  
  
  );
};

export default Home;