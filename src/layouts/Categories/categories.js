import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Bill from "layouts/billing/components/Bill";
import BaseLayout from "layouts/billing/components/BaseLayout";
import axios from "axios"; 
import { getRequest, RequestFrom, RoutePaths } from '../../api_call/api_call'; 
import ArgonButton from "components/ArgonButton";
import CategoryModal from "../Categories/modal/cat_model"; // Import the CategoryModal

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  async function fetchData() {
    try {
      const response = await getRequest(RoutePaths.getAllCategories, RequestFrom.meAdhikari);
      console.log('Data fetched successfully:', response.data);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData(); 
  }, []);

  const handleAddClick = () => {
    setSelectedCategory(null); // Reset selected category
    setShowEditModal(true);    // Show the modal for adding a new category
  };

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setShowEditModal(true);
  };

  const handleDeleteClick = (categoryId) => {
    axios
      .delete(`https://meadhikari-server.onrender.com/api/v1/admin/delete-cat/${categoryId}`)
      .then((response) => {
        setCategories(categories.filter(cat => cat._id !== categoryId));
      })
      .catch((error) => {
        console.error("Error deleting category:", error);
      });
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedCategory(null);
  };

  const handleSaveCategory = (category) => {
    if (selectedCategory) {
      // Editing an existing category
      axios.put(`https://meadhikari-server.onrender.com/api/v1/admin/update-cat/${category._id}`, category)
        .then(response => {
          setCategories(categories.map(cat => cat._id === category._id ? response.data : cat));
        })
        .catch(error => {
          console.error("Error updating category:", error);
        });
    } else {
      // Adding a new category
      axios.post('https://meadhikari-server.onrender.com/api/v1/admin/add-cat', category)
        .then(response => {
          setCategories([...categories, response.data]);
        })
        .catch(error => {
          console.error("Error adding category:", error);
        });
    }
    setShowEditModal(false);
  };

  return (
    <BaseLayout>
      <ArgonBox mt={4}>
        <ArgonBox mt={4}>
          <Grid container spacing={3}></Grid>
        </ArgonBox>
        <ArgonBox mb={3}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={7}>
              <Card id="delete-account">
                <ArgonBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h6" fontWeight="medium">
                    Categories
                  </ArgonTypography>
                  <ArgonButton variant="outlined" color="info" size="small" onClick={handleAddClick}>
                    Add New Category
                  </ArgonButton>
                </ArgonBox>
                <ArgonBox pt={1} pb={2} px={2}>
                  <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
                    {categories && categories.length > 0 ? (
                      categories.map((cat) => (
                        <Bill
                          key={cat._id}
                          name={cat.catName}
                          company={cat.catShortName}
                          email="test@gmail.com"
                          vat={cat.description}
                          onEdit={() => handleEditClick(cat)}
                          onDelete={() => handleDeleteClick(cat._id)}
                        />
                      ))
                    ) : (
                      <ArgonTypography>No categories available</ArgonTypography>
                    )}
                  </ArgonBox>
                </ArgonBox>
              </Card>
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>

      <CategoryModal
        show={showEditModal}
        onClose={handleCloseModal}
        category={selectedCategory}
        onSave={handleSaveCategory}
      />
    </BaseLayout>
  );
}

export default Categories;
