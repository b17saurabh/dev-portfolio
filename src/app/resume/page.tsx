import { redirect } from "next/navigation";
 


 

export default function ResumeDownloadPage() {
 
 

  const googleDriveFileId = "1cEutMZc5ZU7OuoW7PM1MvKOUWOyF4AbK"
 

  const googleDriveLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
 
 

  redirect(googleDriveLink);
 

}