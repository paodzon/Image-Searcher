import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID z4CkAiBSidUL0KgSnQfrChm8rgtDPoDGKY_XU3_8eLk'
      }
})