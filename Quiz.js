class quiz{
constructor(){

}
getState(){
var gameStateRef  = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
}
)
}
    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      play(){
          background(225)
      }
}