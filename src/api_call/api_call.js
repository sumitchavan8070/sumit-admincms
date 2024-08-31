  import axios from 'axios';



  class RoutePaths {
    // Define the base URL
    static baseUrl = "https://meadhikari-server.onrender.com/api/v1/admin/";
  
    // Define other static properties using the base URL
    static home = '/';
    static getAllCategories = `${RoutePaths.baseUrl}getall-cat`;
    static getPosts = `${RoutePaths.baseUrl}posts`;
    static createPost = `${RoutePaths.baseUrl}posts/create`;
    static updatePost = `${RoutePaths.baseUrl}posts/update`;
    static deletePost = `${RoutePaths.baseUrl}posts/delete`;
  }
  
  export default RoutePaths;
  






  // Enum-like object for requestFrom
  const RequestFrom = {
    meAdhikari: 'meadhikari',
    
  };
  
  // Function to create an Axios instance
  const createClient = () => {
    return axios.create({
      // You can set base URL or other configurations here if needed
    });
  };
  
  // GET request function
  async function getRequest(apiEndPoint, requestFrom) {
    const client = createClient();
  
    try {
      console.log(`^^^^^^^^^^^^^^^^^^ ${apiEndPoint} getRequest Start ${requestFrom} ^^^^^^^^^^^^^^^^^^`);
  
      const response = await client.get(apiEndPoint);
  
      console.log(`^^^^^^^^^^^^^^^^^^ ${apiEndPoint} getRequest End ^^^^^^^^^^^^^^^^^^`);
  
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
  
      return response;
    } catch (error) {
      console.error(`Error in getRequest: ${error}`);
      throw error;
    }
  }
  
  // POST request function
  async function postRequest(apiEndPoint, postData, requestFrom) {
    const client = createClient();
  
    try {
      console.log(`~~~~~~~~~~~~~~~~~~~~ ${apiEndPoint} postRequest Start ${requestFrom}\n${JSON.stringify(postData)} ~~~~~~~~~~~~~~~~~~~~ `);
  
      const response = await client.post(apiEndPoint, postData);
  
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
  
      console.log(`~~~~~~~~~~~~~~~~~~~~ ${apiEndPoint} postRequest End ~~~~~~~~~~~~~~~~~~~~ `);
  
      return response;
    } catch (error) {
      console.error(`Error in postRequest: ${error}`);
      throw error;
    }
  }
  
  export { getRequest, postRequest, RequestFrom,  RoutePaths, };
  