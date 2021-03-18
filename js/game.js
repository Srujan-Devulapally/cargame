class Game{
    constructor(){}
     getState(){
         var jar = database.ref('gameState')
         jar.on("value",function(data){
             gameState = data.val()
         })
     }
update(state){
    database.ref('/').update({
        gameState:state
    })

}
async start(){
    if(gameState===0){
        player = new Player()
        var playerRef = await database.ref("playerCount").once("value")
        if(playerRef.exists()){
            playerCount = playerRef.val()
            player.getCount()
        }
        form = new Form()
        form.display()
    }
}
play(){
    form.hide()
    text("Game Has Started",200,200)
}
}