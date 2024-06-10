const sharp = require('sharp');

// Function to read images and extract their metadata
async function getMetadata() {
  try {
    const metadata = await sharp("D:/WEB DEV/PROJECTS/image Processing Project/process_images/sammy_resized_compressed.jpeg").metadata();
    console.log(metadata);
  } catch (error) {
    console.error('Error getting metadata:', error);
  }
}

// Call the function to get metadata
getMetadata();
