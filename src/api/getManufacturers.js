import Axios from 'axios/index';

const getManufacturers = () => Axios({
  method: 'get',
  url: 'manufacturers.json',
}).then(response => response.data);

export default getManufacturers;
