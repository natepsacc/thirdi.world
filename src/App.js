import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import StandardImageList from './imageList.js';
import Contactsheet from './contact.js';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import ThreeDL from './threeDLogo.js';



window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("TitleLogo").style.height = "20vh";
    document.getElementById("TitleLogo").style.top = "5vh";
  //  document.getElementById("TitleLogo").style.backgroundColor = "white";
  //  document.getElementById("TitleLogo").style.animation = "";

		document.getElementById("nav").style.top = "3vh";



  } else {
    document.getElementById("TitleLogo").style.height = "35vh";
    document.getElementById("TitleLogo").style.top = "4vh";
    //document.getElementById("TitleLogo").style.backgroundColor = "";
    //document.getElementById("TitleLogo").style.animation = "pulsefade 4s ease-in-out infinite alternate";


		document.getElementById("nav").style.top = "7vh";


  }



}
let tagapp = "all";

function Home(){

	return(
		<span className="above">
	<Logo/>
	<StandardImageList className='above' tag="all" gridColumns="2"/>
	</span>
);

}
function Contact(){

  	return(
		<span className="above">
	<Logo/>

<Contactsheet className="above"/>
<StandardImageList tag='none' />
	</span>
);

}
function Rad(props){
	return(
		<span className="above">
	<Logo/>
	<StandardImageList className='above' tag={props.tag} gridColumns="2"/>
	</span>
);
}

function App() {


	return (
		<span>

		<Routes>
       <Route path='/contact' element={<Contact/> } />
       <Route  path='/' element={<Home /> } />


    </Routes>
</span>

	);


}



function Logo(props){

	return(
		<>

		<a href="/" >
    <ThreeDL/>

		</a>

		<div id="nav" class="nav">
		<a href="#/" ><b class="b bionic">thir</b>di </a>
		<a href="#/contact"> <b class="b bionic">cont</b>act </a>
    <a href="https://www.instagram.com/thirdi.world" ><b class="b bionic">instag</b>ram </a>


		</div>

		</>
);
}
function unusued(){
  //<img  className="TitleLogo" id="TitleLogo"  alt="thirdi Logo" src="https://i.imgur.com/5TeEDTO.png"/>

  //<a href="https://instagram.com/schidt.co/">
//  <img  id="igLogo" alt="Schidt.co IG Logo" src="https://i.imgur.com/inu4zIh.png" />
//  </a>
}




export default App;
