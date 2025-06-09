import { v2  as cloudinary} from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.config({
    cloud_name: "delbsx74s",
    api_key: "721783843688343",
    api_secret: "C1JJ8y1_1gCoMOE_o2NnL1MaatQ"
})


const handleFileUploadOverCloudinary =  async (filePath: string) => {
      if(!filePath){
           return null;
      }
      try {
          const uploadResult = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
            folder: "uploads",
            public_id: Date.now().toString(), // this an string
          });

          fs.unlinkSync(path.join(__dirname,  "../temp/upload"))
          return uploadResult;
      } catch (error) {
           fs.unlinkSync(path.join(__dirname,  "../temp/upload"));
            throw error;

      }

}


export default handleFileUploadOverCloudinary;