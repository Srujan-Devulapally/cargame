class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h4")
    }
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game") 
        title.position(300,50)
        this.input.position(350,200)
        this.button.position(420,250)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount +=1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello  " + player.name)
            this.greeting.position(350,200)
        })
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide() 
    }
}