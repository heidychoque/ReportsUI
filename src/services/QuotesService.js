
import axios from 'axios'
import '@/interceptor.js'


  export default {

    getRequest(url){

    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => { console.log('Get request success '); resolve(response) })
        .catch(error => { console.log('Get request failed'); reject(error) })
    })
    
  },

}

