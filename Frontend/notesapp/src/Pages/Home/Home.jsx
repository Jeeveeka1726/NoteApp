import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../Cards/NoteCard'
import {MdAdd} from "react-icons/md";
import AddEditNotes from './AddEditNotes';
import Model from "react-model";
const Home = () => {

  const[openAddEditModel,setOpenAddEditModel] = useState({
    isshown : false,
    type: null,
    date: null,
  });
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

    <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
    onClick={()=> {
      setOpenAddEditModel({isshown:true,type:"add",data:null});

    }}>
      <MdAdd className="text-[32px] text-white"/>
    </button>

    <model
    isopen={openAddEditModel.isshown}
    onRequestClose={() => {}}
    style={{
      overlay: {
        backgroundColor : "rgba(0,0,0,0.2)",
      },
      
    }}
    contentLabel=""
    className="w-[40] max-h-3/4 bg-whit rounded-md mx-auto mt-14 p-5 overflow-scroll"
    
    
    >


    </model>

    <AddEditNotes 
    type={openAddEditModel.type}
    noteData={openAddEditModel.data}
    onclose={()=>{
      setOpenAddEditModel({isshown:false,type:"add",data:null});
    }}
    />
  </>  
  
  );
};

export default Home;