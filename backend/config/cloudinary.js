import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();
const uploadOnCloudinary = async(filePath) => {
     // Configuration
    cloudinary.config({ 
        cloud_name: process.env.Cloud_name,
        api_key: process.env.API_key,
        api_secret: process.env.API_Secret
    });

    try{
        const uploadResult=await cloudinary.uploader.upload(filePath)
        fs.unlinkSync()
        return uploadResult.secure_url
    }
    catch(error){
        fs.unlinkSync(filePath)
       return res.status(500).json({message:"Cloudinary Error"})
}
}
export default uploadOnCloudinary

