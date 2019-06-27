import * as Launches from '../services/Launches';

teste = [
    {
        key: '1',
        flight_number: 1,
        mission_name: "FalconSat"
    },
    {
        key: '2',
        flight_number: 2,
        mission_name: "Outra Missao"
    },
    {
        key: '3',
        flight_number: 2,
        mission_name: "Outra Missao"
    },
    {
        key: '4',
        flight_number: 2,
        mission_name: "Outra Missao"
    },
    {
        key: '5',
        flight_number: 2,
        mission_name: "Outra Missao"
    },
    {
        key: '6',
        flight_number: 2,
        mission_name: "Outra Missao"
    },
    {
        key: '7',
        flight_number: 2,
        mission_name: "Outra Missao"
    },
    {
        key: '8',
        flight_number: 2,
        mission_name: "Outra Missao"
    },
    {
        key: '9',
        flight_number: 2,
        mission_name: "Outra Missao"
    },
    {
        key: '10',
        flight_number: 2,
        mission_name: "Outra Missao"
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