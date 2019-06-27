import axios from 'axios';

export function getAllLaunches() {
    
    // let launches = 
    axios.get('https://api.spacexdata.com/v3/launches/latest').then((a)=>{
        return a.data
    })
    
    // return launches.data;
    
    
}

// export default getAllLaunches;
