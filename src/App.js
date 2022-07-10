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
  console.log('fuck');

	return(
		<span>
	<Logo/>
	<StandardImageList tag="all" gridColumns="2"/>
	</span>
);

}
function Contact(){

  	return(
		<span>
	<Logo/>

<Contactsheet/>
<StandardImageList tag='none' />
	</span>
);

}
function Rad(props){
	return(
		<span>
	<Logo/>
	<StandardImageList tag={props.tag} gridColumns="2"/>
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
		<span>
		<a href="/" >
	<img  className="TitleLogo" id="TitleLogo"  alt="Schidt.co Logo" src="https://i.imgur.com/NrYM2op.png"/>
		</a>

		<div id="nav" class="nav">
		<a href="#/" ><b class="b bionic">thir</b>di </a>
		<a href="#/contact"> <b class="b bionic">cont</b>act </a>
    <a href="https://www.instagram.com/thirdi.world" ><b class="b bionic">instag</b>ram </a>


		</div>

		</span>
);
}
function unusued(){
  //<a href="https://instagram.com/schidt.co/">
//  <img  id="igLogo" alt="Schidt.co IG Logo" src="https://i.imgur.com/inu4zIh.png" />
//  </a>
}




export default App;
