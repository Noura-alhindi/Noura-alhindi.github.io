$(document).ready(function(){
    let player1 = "X";
    let player2 = "O";
    // {
    //     $('#x').on('click',player1);
    //     $('#o').on('click',player2);

    // }
    let currentTurn=1;
    let moves = 0 ;
    
    $('.box').on('click',function()
    {
        moves++;
        if (currentTurn == 1)
        {
            event.target.innerHTML= player1;
            event.target.style.color ="black";
            currentTurn++;
            }
            else
            {   
            event.target.innerHTML= player2;
            event.target.style.color= "white";
            currentTurn--;
            }
                if (checkWinner()){  
            let theWinner = currentTurn==1?player2:player1;
            declareTheWinner(theWinner);
        }
    });

    
    $(".refresh").on('click',function()
    {
    let x = Array.prototype.slice.call($(".box")) ;
    x.map((m) =>{
    m.innerHTML ="";
    })
    $(".winner").html("");
    $(".winner").css('display','none');
    currentTurn=1;
    moves =0;

    })


// check The winner 
function checkWinner(){
if (moves > 4){

 x = Array.prototype.slice.call($(".box")) ;
 var result = x.map(function(box){
    return box.innerText;
    //  console.log(something)
// return something
});
console.log(result)


var winChance=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

    return winChance.find(function(chance){
        // debugger;
        if (result[chance[0]]!=="" && result[chance[1]]!=="" && result[chance[2]]!=="" && result[chance[0]] === result[chance[1]] && result[chance[1]] === result[chance[2]]){
            return true ;
        } else {
            return false ;
}

})


}};
function declareTheWinner(winner){
    $(".refresh").css("display","block");
    $(".winner").css('display','block');
    
        // $(".winner").html(`<p>${winner}</p>`);
        swal("Congratulation", winner, "success");

    
        
}
});