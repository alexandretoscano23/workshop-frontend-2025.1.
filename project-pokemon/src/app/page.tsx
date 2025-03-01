
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { Main } from "next/document";
import Emphasis from "./components/emphasis/emphasis";
import Destaque from "./components/main/main";


export default function Page(){
  return(
    <div>
      <Header/>
      <Destaque />
      <Emphasis />

     

      <Footer /> 
    </div>

   
  )
}

