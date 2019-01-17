import Axios from 'axios/index';

const getBrands = () => Axios({
  method: 'get',
  url: 'brands.json',
}).then(response => response.data);

export default getBrands;
