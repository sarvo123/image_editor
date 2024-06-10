// croping and converting images to grayscale 
const sharp = require('sharp');

async function cropImage(){
    try{
        const newImage = await sharp("D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy.png");
        await newImage.extract({width : 500 , height : 300  , left : 120 , top : 70})
        .grayscale()
        .toFile("D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy_croped.png")
    }catch(error){
        console.error("error in croping the image  : ", error);
    }
}

cropImage();
