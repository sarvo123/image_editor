// adding text on images ...
const sharp = require("sharp");

async function addTextOnImage() {
  try {
    const width = 739;
    const height = 433;
    const text = "Sarvottam art !";
    const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
        .title { fill: #001; font-size: 70px; font-weight: bold; }
      </style>
      <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
    </svg>`;
    const svgBuffer = Buffer.from(svgImage);
    const image = await sharp(
      "D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy.png"
    )
      .composite([
        {
          input: svgBuffer,
          top: 0,
          left: 0,
        },
      ])
      .toFile(
        "D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy_text_onit.png"
      );
    console.log("adding text on image done successfully !");
  } catch (error) {
    console.error("error in adding text on image", error);
  }
}

addTextOnImage();
