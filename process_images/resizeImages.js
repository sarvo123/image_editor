const sharp = require("sharp");

async function resizeImage(){
    try{
        const newImage = await sharp("D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy.png").resize({width : 150 , height : 97})
        await newImage.toFormat("jpeg",{mozjpeg : true}).toFile("D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy_resized_compressed.jpeg")
        console.log("Image resized and saved  locally successfully");

    }catch(error){
        console.error("getting error in resizing the images : ", error);
    }
}

resizeImage();
