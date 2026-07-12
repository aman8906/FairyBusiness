import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/resumes",
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = [".pdf", ".doc", ".docx"];
  const ext = path.extname(file.originalname).toLowerCase();

  if (allowed.includes(ext)) cb(null, true);
  else cb(new Error("Only PDF, DOC, DOCX allowed"));
};

const upload = multer({ storage, fileFilter });

export default upload;