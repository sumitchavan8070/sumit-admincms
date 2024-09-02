import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Bill from "layouts/billing/components/Bill";
import ArgonButton from "components/ArgonButton";
import { Link, useNavigate } from "react-router-dom";

import ArgonInput from "components/ArgonInput";

 
// import { useDispatch } from "react-redux";
// import { updateCategory, addCategory } from "../Slice/categoriesSlice";

const CategoryModal = ({ show, onClose, category }) => {
  const [catName, setCatName] = useState("");
  const [catShortName, setCatShortName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [pdfFiles, setPdfFiles] = useState([{ heading: "", source: "" }]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

//   const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      setCatName(category.catName);
      setCatShortName(category.catShortName);
      setDescription(category.description);
      setImage(category.image);
      setPdfFiles(category.pdfFiles || [{ heading: "", source: "" }]);
    } else {
      setCatName("");
      setCatShortName("");
      setDescription("");
      setImage("");
      setPdfFiles([{ heading: "", source: "" }]);
    }
  }, [category]);

  const handlePdfChange = (index, field, value) => {
    setPdfFiles((prevPdfFiles) => {
      const updatedPdfFiles = prevPdfFiles.map((pdfFile, i) =>
        i === index ? { ...pdfFile, [field]: value } : pdfFile
      );
      return updatedPdfFiles;
    });
  };

  const handleAddPdfFile = () => {
    setPdfFiles((prevPdfFiles) => [
      ...prevPdfFiles,
      { heading: "", source: "" },
    ]);
  };

  const handleRemovePdfFile = (index) => {
    setPdfFiles((prevPdfFiles) => prevPdfFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryData = {
      catName,
      catShortName,
      description,
      image,
      pdfFiles,
    };

    // if (category) {
    //   dispatch(updateCategory({ ...category, ...categoryData }));
    // } else {
    //   dispatch(addCategory(categoryData));
    // }
    onClose();
  };

  if (!show) return null;

  return (
    <Dialog open={show} onClose={onClose} maxWidth="md" fullWidth>
        
      <DialogTitle>{category ? "Edit Category" : "Add Category"}</DialogTitle>
      
      <DialogContent>
        <form onSubmit={handleSubmit}>

        <ArgonBox pt={2} px={2} display="flex" justifyContent="end" alignItems="center">
                
                  <ArgonButton variant="outlined" color="info" size="small" >
                    Add New Category
                  </ArgonButton>
                  
                </ArgonBox>
                <ArgonBox mb={5}>
        {/* for use like seizedbox  */}
        </ArgonBox>
        <ArgonBox mb={3}>
        <ArgonBox component="form" role="form" onSubmit={handleSubmit}>
        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="Category Name"
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput
            placeholder="Category Short Name"
            size="large"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ArgonBox>
        <Grid item xs={12}>
              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>




      </ArgonBox>
        </ArgonBox>
          <Grid container spacing={2}>
         
            <ArgonBox mb={10}>
        {/* for use like seizedbox  */}
        </ArgonBox>
  
        
            <Grid item xs={12}>
              <label>PDF Files</label>
              {pdfFiles.map((pdfFile, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={5}>
                    <TextField
                      label="Heading"
                      value={pdfFile.heading}
                      onChange={(e) =>
                        handlePdfChange(index, "heading", e.target.value)
                      }
                      fullWidth
                    />  
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Source"
                      value={pdfFile.source}
                      onChange={(e) =>
                        handlePdfChange(index, "source", e.target.value)
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={2} container alignItems="center">
                    <IconButton
                      onClick={() => handleRemovePdfFile(index)}
                      color="error"
                    >
                      <RemoveIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              ))}
                      
                     
        <ArgonButton  color="info" size="medium" type="submit"   >
        Add PDF File                  </ArgonButton>
              
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>

        
        <ArgonButton  color="info" size="medium" type="submit"   >
        {category ? "Save changes" : "Add Category"}                  </ArgonButton>
   
      </DialogActions>
    </Dialog>
  );
};

export default CategoryModal;
