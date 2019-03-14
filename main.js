$(document).ready(function(){
    let player1 = "X";
    let player2 = "O";
    // score variable  
    let player1Score =0 ;
    let player2Score =0 ;
    // i declare the current Turn variable to switch between player 
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
            
            $(".winner").text(player2 + "'s Turn")

        }
            else
            {   
            event.target.innerHTML= player2;
            event.target.style.color= "white";
            currentTurn--;
            
        $(".winner").text(player1 + "'s Turn")
    }

// check The winner 
function checkWinner(){
    if (moves > 4 && moves < 9){
    // call a prototype method on array and the slice array to return a subset of our array so it's gonna a new array on the start and end of the index we use ..
    let x = Array.prototype.slice.call($(".box")) ;
    //here we gonna go through the whole array and return just the innerHtml property 
        var result = x.map(function(box){
        return box.innerText;
    
    });
    console.log(result)
    
    // i create arrays to all possible ways to win in XO 
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
            if (result[chance[0]]!=="" && result[chance[1]]!=="" && result[chance[2]]!=="" && result[chance[0]] === result[chance[1]] && result[chance[1]] === result[chance[2]]){
                return true ;
            } else{
                return false ;}

    
    
    })
        
        
    
    } else if(moves === 9 ) {
        $(".winner").text( "it's Draw")
    }
    console.log(moves);
    // 
    
}

        // if checkWinner function return true 
    if (checkWinner()){ 
            let theWinner ;
            if( currentTurn==1)
            console.log(theWinner = player2)
            else (theWinner=player1)
    // call the declare winner function 
            declareTheWinner(theWinner);
            score(theWinner);

        }
    });
    

    function declareTheWinner(winner){
        $(".winner").css('display','block');
            $(".winner").text(` Congratulation  ${winner}`);
            $(".winner").addClass('zoomInUp'); // animation 


            $(".refresh").css("display","block");

          
    
        }
        // score counter function 
        function score(winner){
        if (winner===player1){
    
            player1Score++;
            $("#player1").html(player1Score)
        }
        else {
    
            player2Score++;
            $("#player2").html(player2Score)
        }
    }
    // clicking on play agin button 
    $(".refresh").on('click',function()
    {
     x = Array.prototype.slice.call($(".box")) ;
     // remove all marks in the board 
    x.map((m) =>{
    m.innerHTML ="";
    })
    $(".winner").html("");
    currentTurn=1;
    moves =0;

    })




        
});