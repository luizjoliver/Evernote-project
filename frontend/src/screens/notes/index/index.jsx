import { useState } from "react";
import React from "react"; 
import HeaderLogged from "../../../components/headerLogged";
import Notes from "../../../components/notes";


const NotesScreen = () =>{    
   const [isOpen,setIsOpen] = useState(false)
 return (
    <>
    <HeaderLogged setIsOpen = {setIsOpen}/>
   <Notes setIsOpen = {setIsOpen} isOpen={isOpen} />

    </>
 )
}

export  default NotesScreen