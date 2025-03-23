import { redirect } from "next/naviga~tion";
 


 

export default function ResumeDownloadPage() {
 

  // Replace YOUR_FILE_ID with the actual Google Drive file ID
 

  const googleDriveFileId = "1KpqIqC60Di_SBDiUUJH5cmg4N2JergI5";
 

  const googleDriveLink = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
 


 

  redirect(googleDriveLink);
 

}