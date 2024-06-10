// Rotate images and blur 
const sharp = require('sharp');

async function rotateImage(){
    try{
        const newImage = await sharp("D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy.png")
        await newImage.rotate(33, {background : {r : 0 , g : 0 , b : 0 , alpha  : 0}})
        .blur(4)
        .toFile("D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy_rotate.png")
        console.log("image has been rotated ");

    }catch(error){
        console.error("error in rotating the images " , error);
    }
}

rotateImage();