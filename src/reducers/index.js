import * as Launches from '../services/Launches';

teste = {
    selectedLaunch: "Missao 1",    
    launches: [
        {
            key: '1',
            mission_name: "Missao 1",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 1"
            }
        },
        {
            key: '2',
            mission_name: "Missao 2",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 2"
            }
        },
        {
            key: '3',
            mission_name: "Missao 3",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 3"
            }
        },
        {
            key: '4',
            mission_name: "Missao 4",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 1"
            }
        },
        {
            key: '5',
            mission_name: "Missao 1",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 1"
            }
        },
        {
            key: '6',
            mission_name: "Missao 1",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 1"
            }
        },
        {
            key: '7',
            mission_name: "Missao 1",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 1"
            }
        },
        {
            key: '8',
            mission_name: "Missao 1",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 1"
            }
        },
        {
            key: '9',
            mission_name: "Missao 1",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 1"
            }
        },
        {
            key: '10',
            mission_name: "Missao 1",
            launch_date_local: "01/03/1997",
            rockets: {
                rocket_name: "Foguete 1"
            }
        },    
    ]

} 

export default function reducer(state = teste, action){
    //state = Launches.getAllLaunches();
    // if(state){
    // }
   //console.log(state);
   
    if(action.type == "SELECT_LAUNCH"){
        console.log(action);
        return {...state, selectedLaunch: action.launch }
    }

    if(action.type == "FILTER_LIST"){
        
        newLaunches = []
        state = teste;

        for (l of state.launches){
            if(l.mission_name.toLowerCase().includes(action.text.toLowerCase()))
                newLaunches.push(l)    
        }

        console.log(newLaunches);
        return {
            selectedLaunch: state.selectedLaunch,
            launches: newLaunches
        }
    }
    return state;
   
}