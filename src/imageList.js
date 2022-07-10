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
       m:{
         mobile:0,
         bigMobile:1,
         tablet:3,
         desktop:10},
       height: {
         mobile: clicked ? "100%" : "100%",
         bigMobile: clicked ? "100%" : "100%",
         tablet: "100vh",
         desktop: "100%"
       },
       display: "grid",
       gridTemplateColumns:{
         mobile: clicked ? 'repeat(1, 100%)' : 'repeat(2, 50%)',
         bigMobile: clicked ? 'repeat(1, 100%)' : 'repeat(2, 50%)',
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
id='imgimg' key={item.img} id="height" sx={{ }}>

       <LazyLoadImage
       sx={{ p:10,}}
          threshhold='100'
           width="100%"
           height="inherit"
           onClick={() => imageClick(item.mSrc)}

             effect="blur"
            alt={item.title}
            src={item.img} // use normal <img> attributes as props
             placeholderSrc="https://i.imgur.com/yP6GLSY.gif"
             />



              <ImageListItemBar
              position='below'
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
      date: '1',
      tag: 'USA',
      tag2: 'ppl',
    //  mSrc: 'javascript:;',
  },
  {
     img: 'https://i.imgur.com/DaGiBFO.jpgg',
     title: 'thirdi',
     tag: 'USA',
     tag2: 'ppl',
     date: '2',
    // mSrc: 'javascript:;',
 },

 {
     img: 'https://i.imgur.com/TbGLFYZ.jpg',
     title: 'thirdi!',
     date: '4',
     tag: 'USA',
     tag2: 'ppl',
  //   mSrc: 'javascript:;',
 },
 {
    img: 'https://i.imgur.com/7OJjN6b.jpg',
    title: 'thirdi',
    tag: 'USA',
    tag2: 'ppl',
    date: '6',
  //  mSrc: 'javascript:;',
},
 {
    img: 'https://i.imgur.com/YxkyjUa.jpg',
    title: 'thirdi',
    tag: 'USA',
    tag2: 'ppl',
    date: '7',
  //  mSrc: 'javascript:;',
},
{
    img: 'https://i.imgur.com/BqZGmpq.jpg',
    title: 'thirdi!',
    date: '8',
    tag: 'USA',
    tag2: 'ppl',
  //  mSrc: 'javascript:;',
},
 {
     img: 'https://i.imgur.com/7qo6dWx.jpg',
     title: 'thirdi!',
     date: '9',
     tag: 'USA',
     tag2: 'ppl',
    // mSrc: 'javascript:;',
 },
 {
     img: 'https://i.imgur.com/99hpZyC.jpg',
     title: '10!',
     date: 'thirdi',
     tag: 'USA',
     tag2: 'ppl',
    // mSrc: 'javascript:;',
 },
 {
    img: 'https://i.imgur.com/EQPZ1ep.jpg',
    title: 'thirdi',
    tag: 'USA',
    tag2: 'ppl',
    date: '3',
 //   mSrc: 'javascript:;',
},
 {
     img: 'https://i.imgur.com/CpZ7f2a.jpg',
     title: 'thirdi!',
     date: '11',
     tag: 'USA',
     tag2: 'ppl',
  //   mSrc: 'javascript:;',
 },
 {
     img: 'https://i.imgur.com/CrTrLQU.jpg',
     title: 'thirdi!',
     date: '12',
     tag: 'USA',
     tag2: 'ppl',
  //   mSrc: 'javascript:;',
 },

 {
     img: 'https://i.imgur.com/gRVV7mn.jpg',
     title: 'thirdi!',
     date: '13',
     tag: 'USA',
     tag2: 'ppl',
    // mSrc: 'javascript:;',
 },
 {
     img: 'https://i.imgur.com/jkPbblg.jpg',
     title: 'thirdi!',
     date: '14',
     tag: 'USA',
     tag2: 'ppl',
    // mSrc: 'javascript:;',
 },

 {
     img: 'https://i.imgur.com/yGsUBMN.jpg',
     title: 'thirdi!',
     date: '16',
     tag: 'USA',
     tag2: 'ppl',
    // mSrc: 'javascript:;',
 },
 {
     img: 'https://i.imgur.com/vgnkxen.jpg',
     title: '17!',
     date: 'thirdi',
     tag: 'USA',
     tag2: 'ppl',
    // mSrc: 'javascript:;',
 },
 {
     img: 'https://i.imgur.com/jhAvY8y.jpg',
     title: 'thirdi!',
     date: '18',
     tag: 'USA',
     tag2: 'ppl',
    // mSrc: 'javascript:;',
 },

];
