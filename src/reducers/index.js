import * as Launches from '../services/Launches';

teste = [
    {
        flight_number: 1,
        mission_name: "FalconSat"
    }
] 

export default function reducer(state = teste, action){
    //state = Launches.getAllLaunches();
    // if(state){
    // }
   //console.log(state);
    if(action.type == "TOOGLE_AUMENTA"){
        return [
            {
                flight_number: 1,
                mission_name: "Mateus Nobre"
            }
        ];
    }
    return state; 
   
}