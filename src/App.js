import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import StandardImageList from './imageList.js';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  document.body.style.backgroundColor = "#F0C0C9";

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("TitleLogo").style.height = "25vh";
    document.getElementById("TitleLogo").style.top = "5vh";
  //  document.getElementById("TitleLogo").style.backgroundColor = "white";
  //  document.getElementById("TitleLogo").style.animation = "";

		document.getElementById("nav").style.top = "2vh";



  } else {
    document.getElementById("TitleLogo").style.height = "35vh";
    document.getElementById("TitleLogo").style.top = "4vh";
    //document.getElementById("TitleLogo").style.backgroundColor = "";
    //document.getElementById("TitleLogo").style.animation = "pulsefade 4s ease-in-out infinite alternate";


		document.getElementById("nav").style.top = "25vh";


  }
	if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 400) {

	} else {
		document.body.style.backgroundColor = "#d8e8ef";
	}



}
let tagapp = "all";

function Home(){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag="all" gridColumns="2"/>
	</span>
);
}

function Rad(props){
	return(
		<span>
	<Logo/>
	<Footer/>
	<StandardImageList tag={props.tag} gridColumns="2"/>
	</span>
);
}

function App() {


	return (
		<span>

		<Routes>
       <Route path='/cars' element={<Rad tag="CAR"  /> } />
       <Route  path='/' element={<Home /> } />
			 <Route path='/usa' element={<Rad tag="USA"  />} />
			 <Route path='/ppl' element={<Rad tag="ppl"  />} />
			 <Route path='/out' element={<Rad tag="out" /> } />
			 <Route path='/commod' element={<Rad tag="prop0623" /> } />
       <Route path='/rad' element={<Rad tag="RAD" /> } />
       <Route path='/prop0623' element={<Rad tag="prop0623" /> } />
       <Route path='/midjourneyPrompts' element={<Rad tag="midjourney"/> } />

    </Routes>
</span>

	);


}



function Logo(){

	return(
		<span>
		<a href="/" >
	<img  id="TitleLogo" alt="Schidt.co Logo" src="https://i.imgur.com/YZPgMPM.png"/>
		</a>

		<div id="nav" class="nav">
		<a href="#/cars" ><b class="b bionic">thir</b>di </a>
		<a href="#/usa"> <b class="b bionic">thir</b>di </a>
    <a href="#/cars" ><b class="b bionic">thir</b>di </a>
    <a href="#/cars" ><b class="b bionic">thir</b>di </a>
    <a href="#/cars" ><b class="b bionic">thir</b>di </a>

		</div>

		</span>
);
}
function unusued(){
  //<a href="https://instagram.com/schidt.co/">
//  <img  id="igLogo" alt="Schidt.co IG Logo" src="https://i.imgur.com/inu4zIh.png" />
//  </a>
}


function Footer(){
	return(
<div id="footer">
<span style={{backgroundColor: "#d8e8ef"}}>
natepsacc@gmail.com, @schidtery,
<br/>Schidt.co is a Web3 site, welcome to the new world.

</span>
</div>
);
}

export default App;
