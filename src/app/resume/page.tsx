import { redirect } from "next/navigation";
 


 

export default function ResumeDownloadPage() {
 
 

  const googleDriveFileId = "1rXufEWgmeIqbayYjruBnl0DAr-XxjZT9"
 

  const googleDriveLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
 
 

  redirect(googleDriveLink);
 

}