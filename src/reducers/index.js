import * as Launches from '../services/Launches';

teste = {
    selectedLaunch: "Missao 1",    
    launches: []

} 

export default function reducer(state = teste, action){
    //state = Launches.getAllLaunches();
    // if(state){
    // }
   //console.log(state);

   if(action.type == "UPDATE_LAUNCHES"){

        i = 0;
        for( l of action.launches){
            action.launches[i].key = i.toString();
            i++;
        }

        return {
            selectedLaunch : state.selectedLaunch,
            launches: action.launches
        }
   }
   
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