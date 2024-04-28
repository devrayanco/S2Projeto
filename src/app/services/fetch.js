import axios from 'axios';

const fetchData = async () => {
    try {
      const response = await axios.get('https://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fq=C:65&_from=1&_to=50');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export default fetchData;
  