// composite images 
const sharp =require('sharp');

async function compositeImage(){
    try{
        const newImage = await sharp("D:/WEB DEV/PROJECTS/image Processing Project/process_images/underwater.png")
        .composite([
            {
                input : "D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy-transparent.png",
                top : 50,
                left : 50,
            },
        ])
        .toFile("D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy_uunderwater_composite.png");
        console.log("images has been composited");
    }catch(error){
        console.error("error in compositing the imagges " , error);
    }
}

compositeImage();