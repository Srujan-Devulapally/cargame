class Player {
    constructor(){this.index = null
    this.distance = 0
    this.name = null}
    getCount(){
        var jar = database.ref('playerCount')
        jar.on("value",function(data){
        playerCount = data.val()
        })
    }
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
}
    update(){
var playerIndex = "players/player + " + this.index
database.ref(playerIndex).set({name:this.name})
    }
    
}
