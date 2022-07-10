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




const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 300,
      tablet: 650,
      desktop: 1000
    }
  },
  palette: {
    background: {
      paper: 'rgba(0,0,0,0.2)'
    }}
});

export default function StandardImageList(props) {


  let sort = itemData.filter((element) => {
      if (element.tag === props.tag) {
          return element;
      }
      if (element.tag2 === props.tag) {
          return element;
      }
      if (element.text === 'text') {
  //      document.getElementsByClassName('imgsvg').append;
      }
      if (element.tag3 === 'noshow') {
          return !element;
      }

      else{

      }
      if (props.tag === "all"){
        return itemData
      }
  });

var gridNum = props.gridColumns;
console.log(gridNum);
const imageClick = (props) => {

  console.log('Click!!!!');
  window.open(props, '_self');

}
  const [clicked, setClicked] = useState(false)
  const toggleClicked = () => setClicked((prev) => !prev)
      return (

      <ThemeProvider theme={theme}>

   <Box
   onClick={toggleClicked}
     sx={{
       height: {
         mobile: clicked ? "35vh" : "600px",
         bigMobile: clicked ? "35vh" : "85vh",
         tablet: "100vh",
         desktop: "100vh"
       },
       display: "grid",
       gridTemplateColumns:{
         mobile: clicked ? 'repeat(2, 50%)' : 'repeat(1, 100%)',
         bigMobile: clicked ? 'repeat(2, 50%)' : 'repeat(1, 100%)',
         desktop: clicked ? 'repeat(1, 100%)' : 'repeat(2, 50%)',
       },
       [`& .${imageListItemClasses.root}`]: {
         display: "flex",
         flexDirection: "column"
       }
     }}
   >

     {sort.map((item) => (


       <ImageListItem
id='imgimg' key={item.img} id="height" sx={{m:0}}>

       <LazyLoadImage

          threshhold='1000'
           width="100%"
           height="inherit"
           onClick={() => imageClick(item.mSrc)}

             effect="blur"
            alt={item.title}
            src={item.img} // use normal <img> attributes as props
             placeholderSrc="https://i.imgur.com/4GdCjPE.gif"
             />



              <ImageListItemBar
              sx={{
                overflowWrap:"break-word",

                bgcolor:'background.paper',
                maxWidth: "100%",
                height: 'fit-content',
                width:'fit-content',
                textAlign: 'left',
                fontFamily: 'Courier New',
                fontSize: {
                  mobile: "1em",
                bigMobile: "1em",
                tablet: "12pt",
                desktop: "12pt"}
                  }}
            title={item.date}
            subtitle={item.title}

          />

       </ImageListItem>

     ))}


   </Box>
 </ThemeProvider>

      );
}




const itemData = [
  {
      img: 'https://i.imgur.com/kQVedhu.jpg',
      title: 'thirdi!',
      date: 'thirdi',
      tag: 'USA',
      tag2: 'ppl',
      mSrc: 'javascript:;',
  },
  {
     img: 'https://i.imgur.com/DaGiBFO.jpgg',
     title: 'thirdi',
     tag: 'USA',
     tag2: 'ppl',
     date: 'thirdi',
     mSrc: 'javascript:;',
 },
  {
     img: 'https://i.imgur.com/EQPZ1ep.jpg',
     title: 'thirdi',
     tag: 'USA',
     tag2: 'ppl',
     date: 'thirdi',
     mSrc: 'javascript:;',
 },
 {
     img: 'https://i.imgur.com/TbGLFYZ.jpg',
     title: 'thirdi!',
     date: 'thirdi',
     tag: 'USA',
     tag2: 'ppl',
     mSrc: 'javascript:;',
 },
 {
    img: 'https://i.imgur.com/YxkyjUa.jpg',
    title: 'thirdi',
    tag: 'USA',
    tag2: 'ppl',
    date: 'thirdi',
    mSrc: 'javascript:;',
},
{
    img: 'https://i.imgur.com/BqZGmpq.jpg',
    title: 'thirdi!',
    date: 'thirdi',
    tag: 'USA',
    tag2: 'ppl',
    mSrc: 'javascript:;',
},
 {
     img: 'https://i.imgur.com/7qo6dWx.jpg',
     title: 'thirdi!',
     date: 'thirdi',
     tag: 'USA',
     tag2: 'ppl',
     mSrc: 'javascript:;',
 },
 {
     img: 'https://i.imgur.com/99hpZyC.jpg',
     title: 'thirdi!',
     date: 'thirdi',
     tag: 'USA',
     tag2: 'ppl',
     mSrc: 'javascript:;',
 },
];
