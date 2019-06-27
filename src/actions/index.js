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