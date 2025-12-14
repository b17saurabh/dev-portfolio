import { redirect } from "next/navigation";
 


 

export default function ResumeDownloadPage() {
 

  // Replace YOUR_FILE_ID with the actual Google Drive file ID
 

  const googleDriveFileId = "1cH-Z6mzudj354jaNOZTioGOtHZqYJ47E";
 

  const googleDriveLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
 


 

  redirect(googleDriveLink);
 

}