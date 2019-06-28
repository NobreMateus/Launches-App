export function aumenta(id){
    return{
        type: "TOOGLE_AUMENTA",
        id
    }
} 

export function selectLaunch(launch){
    return{
        type: "SELECT_LAUNCH",
        launch
    }
}

export function filterList(text){
    return{
        type: 'FILTER_LIST',
        text
    }
}

export function updateLaunches(launches){

    return{
        type: 'UPDATE_LAUNCHES',
        launches
    }
}

export function changePage(direction){

    return{
        type: 'CHANGE_PAGE',
        direction
    }
}