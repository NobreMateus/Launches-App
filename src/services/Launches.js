import axios from 'axios';

export function getAllLaunches() {
    
    return axios.get('https://api.spacexdata.com/v3/launches')
    
}
