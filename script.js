'use strict';
    this.document.getElementById('score--0').textContent=0;
    this.document.getElementById('score--1').textContent=0;
    this.document.querySelector('.dice').classList.add('hidden');
    

    // role a dice
    let curr_player=0;
    let current_score=0;
    let hold=0;
    let hold_1=0;
    let hold_2=0;

    function switch_player() 
    {
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        current_score=0;
        document.getElementById(`current--${curr_player}`).textContent=0;
        curr_player =  curr_player ===   0  ? 1 :0 ;
    }

    document.querySelector(".btn--roll").addEventListener('click',function ()
     {
     let num=   Math.trunc(Math.random()*6)+1;
    document.querySelector('.dice').classList.remove('hidden');
    document.querySelector('.dice').src= `dice-${num}.png`;
    
    if(num!==1)
    {
        current_score=current_score+num;
        document.getElementById(`current--${curr_player}`).textContent=current_score;
        // document.querySelector('#current--0').textContent=current_score;    
     
    }
    else
    {
        switch_player();
    }
    })

    document.querySelector('.btn--hold').addEventListener('click',function()
    {
        
   
        if(curr_player==0)
        {
            if (hold_1 >= 10) {
                document.querySelector('.player--0').classList.add('player--winner');
                document.querySelector('.player--0').classList.remove('player--active');
                document.body.textContent="Player 1 wins";
            }

            hold_1 = hold_1+ current_score;
            document.getElementById("score--0").textContent=hold_1;
            // document.getElementsByClassName('player').style.backgroundColor='red';
            // document.querySelector(".player--0").style.backgroundColor='cyan';
            // document.querySelector(".player--1").style.backgroundColor=' #8fcf75';
            
            if (hold_1 >= 50) {
                document.querySelector('.player--0').classList.add('player--winner');
                document.querySelector('.player--0').classList.remove('player--active');
                document.body.textContent="Player 1 wins";
                document.body.style.fontSize = "48px";
                document.body.style.fontWeight = "bold";
            }
        }
        else
        {
            if (hold_2 >= 50) {
                document.querySelector('.player--1').classList.add('player--winner');
                document.querySelector('.player--1').classList.remove('player--active');
                document.body.textContent="Player 2 wins";
                document.body.style.fontSize = "48px";
                document.body.style.fontWeight = "bold";
            }
               hold_2 = hold_2+ current_score;
            document.getElementById("score--1").textContent=hold_2;
            // document.querySelector(".player--1").style.backgroundColor='yellow';
            // document.querySelector(".player--0").style.backgroundColor=' #33f0a1';
            // hold_2=hold;
            
            if (hold_2 >= 50) {
                document.body.textContent="Player 2 wins";
                document.body.style.fontSize = "48px";
                document.body.style.fontWeight = "bold";
                document.querySelector('.player--1').classList.add('player--winner');
                document.querySelector('.player--1').classList.remove('player--active');
            }
            
        }

        switch_player();

    })
    document.querySelector('.btn--new').addEventListener('click', function () {
        // Reset variables
        curr_player = 0;
        current_score = 0;
        hold_1 = 0;
        hold_2 = 0;
    
        // Reset UI elements
        document.getElementById('score--0').textContent = 0;
        document.getElementById('score--1').textContent = 0;
        document.getElementById('current--0').textContent = 0;
        document.getElementById('current--1').textContent = 0;
    
        // Remove winner and active classes from players
        document.querySelector('.player--0').classList.remove('player--winner', 'player--active');
        document.querySelector('.player--1').classList.remove('player--winner', 'player--active');
    
        // Set Player 1 as the active player
        document.querySelector('.player--0').classList.add('player--active');
    
    });

    
    
    