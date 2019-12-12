
import axios from 'axios'
import Urls from '@/config.js'


  export default {

    getPendingJson(){

    return new Promise((resolve, reject) => {
      axios.get(Urls.pendingQuotesUrl)
        .then(response => { console.log('Get pending quotes promise success '); resolve(response) })
        .catch(error => { console.log('Get pendins quotes promise failed'); reject(error) })
    })
    
  },

    getSoldJson(){

    return new Promise((resolve, reject) => {
      axios.get(Urls.soldQuotesUrl)
        .then(response => { console.log('Get sold quotes promise success '); resolve(response) })
        .catch(error => { console.log('Get sold quotes promise failed'); reject(error) })
    })
    
  }
}

