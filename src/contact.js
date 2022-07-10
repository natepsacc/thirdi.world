import * as React from 'react';
import {useState} from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import { typography } from '@mui/system';
import imageListItemClasses from "@material-ui/core/ImageListItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
export default function Contactsheet(props) {


return (



<span>
   <Box
   className='contactBox'
     sx={{
       borderRadius:'33%',
       backgroundColor:"#ffffff3c",
       marginTop:"35vh",
       marginLeft:'50%',
       height:'100vh',
       p:2,
       textAlign:'center',
       m:{
         mobile:0,
         bigMobile:1,
         tablet:3,
         desktop:10},
       height: {
         mobile:"100%",
         bigMobile: "100%",
         tablet: "100vh",
         desktop: "100%"
       },

     }}
   >
<img className='profpic' src='https://i.imgur.com/5TC2yt2.jpg'/><br/>
<h1>thirdi</h1>

<Box sx={{
  display:'inline',
  p:3,
}}>
<h1> <a href='tel:3077774444'><PhoneForwardedOutlinedIcon  sx={{fontSize:'2em'}}/> </a> </h1><h1> <a href='mailto:broncos.texas@gmail.com'><ForwardToInboxOutlinedIcon sx={{fontSize:'2em'}}/></a> </h1>
</Box>




   </Box>

</span>
      );
}
