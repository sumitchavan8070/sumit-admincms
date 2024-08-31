import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Bill from "layouts/billing/components/Bill";
import BaseLayout from "layouts/billing/components/BaseLayout";
import axios from "axios"; // Import axios for API calls
import { getRequest, RequestFrom, RoutePaths } from '../../api_call/api_call'; // Adjust the path as needed

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  
  async function fetchData() {
    try {
  
      const response = await getRequest(RoutePaths.getAllCategories, RequestFrom.meAdhikari);
      console.log('Data fetched successfully:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  

  useEffect(() => {
    // Fetch the categories from the API when the component mounts
    // axios
    //   .get("https://meadhikari-server.onrender.com/api/v1/admin/getall-cat")
    //   .then((response) => {
    //     setCategories(response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching categories:", error);
    //   });
    fetchData(); 
  }, []);

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setShowEditModal(true);
  };

  const handleDeleteClick = (categoryId) => {
    axios
      .delete(`https://meadhikari-server.onrender.com/api/v1/admin/delete-cat/${categoryId}`)
      .then((response) => {
        // Remove the deleted category from the state
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
                <ArgonBox pt={3} px={2}>
                  <ArgonTypography variant="h6" fontWeight="medium">
                    Categories
                  </ArgonTypography>
                </ArgonBox>
                <ArgonBox pt={1} pb={2} px={2}>
                  <ArgonBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                  >
                    {categories.map((cat) => (
                      <Bill
                        key={cat._id}
                        name={cat.catName}
                        company={cat.catShortName}
                        email="test@gmail.com"
                        vat="FRB1235476"
                        onEdit={() => handleEditClick(cat)}
                        onDelete={() => handleDeleteClick(cat._id)}
                      />
                    ))}
                  </ArgonBox>
                </ArgonBox>
              </Card>
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
 
    </BaseLayout>
  );
}

export default Categories;
