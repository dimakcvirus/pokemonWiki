const base = [
    {
        name:'Dima',
        age:18,
        floor:{floorOne:'man', floorTwo:'woman'}
    }
]

function SearchBase(){
    for(i = 0; i < base.length; i++){
        let result = base[i];
        console.log(result)
        searchFloor(result)
    }
    
}
SearchBase()


function searchFloor(result){
    for(key in result.floor){
        console.log(result.floor[key])
    }
}