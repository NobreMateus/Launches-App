import * as Launches from '../services/Launches';

teste = {
    selectedLaunch: "Missao 1",    
    launches: [],
    filteredLaunches: [],
    page:0,
    qItemsPage: 10,
    ready: false
} 

const pageItems = 10;

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
            ...state,
            launches: action.launches,
            filteredLaunches: action.launches,
            ready: true
        }
   }
   
    if(action.type == "SELECT_LAUNCH"){
        console.log(action);
        return {...state, selectedLaunch: action.launch }
    }

    if(action.type == "FILTER_LIST"){
        
        newLaunches = []
        
        for (l of state.launches){
            if(l.mission_name.toLowerCase().includes(action.text.toLowerCase()))
                newLaunches.push(l)    
        }

        return {
            ...state,
            filteredLaunches: newLaunches,
            page: 0
        }
    }

    if(action.type == "CHANGE_PAGE"){
        if(action.direction == 'next' && state.page < Math.ceil(state.filteredLaunches.length / state.qItemsPage) - 1 )
            return{...state,  page: state.page + 1 }
        else if(action.direction == 'prev' && state.page > 0 ) 
            return{...state,  page: state.page - 1 } 
    }

    return state;
   
}