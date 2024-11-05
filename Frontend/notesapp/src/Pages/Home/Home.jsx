import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../Cards/NoteCard'
// import moment from "moment"
import {MdAdd} from "react-icons/md";
import AddEditNotes from './AddEditNotes';
import Model from "react-modal";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';

const Home = () => {

  const[openAddEditModel,setOpenAddEditModel] = useState({
    isshown : false,
    type: null,
    date: null,
  });

  const [allNotes, setAllNotes] = useState([])
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const getUserInfo = async() => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user){
        setUserInfo(response.data.user);
      }
    } catch (error){
      if(error.response.status === 401){
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  //Get all notes
  const getAllNotes = async () => {
    try{
      const response = await axiosInstance.get("/get-all-notes");

      if (response.data && response.data.notes){
        setAllNotes(response.data.notes);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(()=>{
    getAllNotes()
    getUserInfo();
    return()=>{}
  },[])

  return (
  <>
   <Navbar userInfo={userInfo}/>
    <div className="container mx-auto">
    <div className="grid grid-cols-3 gap-4 mt-8">
     {allNotes.map((item, index)=>(
       <NoteCard 
       key={item._id}
       title={item.title}
       date={item.createdOn}
       content={item.content} 
       tags={item.tags}
       ispinned={item.isPinned}
       onEdit={()=>{}}
       onDelete={()=>{}}
       onPinNote={()=>{}}/>
     ))}
    
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
    className="w-[40] max-h-3/4 bg-whit rounded-md mx-auto mt-14 p-5 overflow-scroll">
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