'use strict';


// function to close rules
const closeRules = function(){
    document.querySelector('.rules').classList.add('hidden');
}

// Show rules on clicking how to play button
document.querySelector('.how-to-play').addEventListener('click', function(){
    document.querySelector('.rules').classList.remove('hidden');
});

// Hide rules on clicking close icon in rules
document.querySelector('.close').addEventListener('click', closeRules)


// Hide rules on pressing Escape button
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && !document.querySelector('.rules').classList.contains('hidden'))
        closeRules();
});

// Hide rules on clicking outside rules window
// document.querySelector('.start').addEventListener('click', function(){
//     if(!document.querySelector('.rules').classList.contains('hidden'))
//         document.querySelector('.rules').classList.add('hidden');

// });


// Remove overlay and bring game window on clicking play button
document.querySelector('.play-btn').addEventListener('click', function(){
    document.querySelector('.start').classList.add('hidden')
})

// remove result wondow and start the game again
document.getElementById('90').addEventListener('click', function(){
    document.querySelector('.won').classList.add('hidden')
})

document.getElementById('91').addEventListener('click', function(){
    document.querySelector('.lost').classList.add('hidden')
})



// Starting number
let originalNum = Math.trunc(Math.random()*70 + 30);

// Displaying starting number
document.getElementById('currNum').textContent = originalNum;

let activePlayer = 1;

const youLose = function(){
    document.querySelector('.lost').classList.remove('hidden');
}

const youWon = function(){
    document.querySelector('.won').classList.remove('hidden');
}

const gameLogic = function(){
   let num  = Number(document.querySelector('.btn--roll').value);

   if(num > 0 && num < 5){
    document.querySelector('#current--1').textContent = 0;
   document.querySelector('#current--0').textContent = num;

   originalNum -= num;
   document.querySelector('#currNum').textContent = originalNum;
   
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.message').classList.remove('hidden');
    document.querySelector('.thinking').classList.remove('hidden');

    if(originalNum <= 0){
        setTimeout(youWon, 500);
        return;
    }


    const roxxy = function(){
        num = originalNum % 5;
        if(num === 0)
            num = Math.trunc(Math.random()*4) + 1;

        document.querySelector('#current--1').textContent = num
        originalNum -= num;
        document.querySelector('#currNum').textContent = originalNum;
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        document.querySelector('.message').classList.add('hidden');
        document.querySelector('.thinking').classList.add('hidden');
        document.querySelector('#current--0').textContent = 0;

        if(originalNum <= 0){
            setTimeout(youLose, 500);
            return;
        }

    }
    
    setTimeout(roxxy, 2500);
}
 
else{
    alert("Please Enter a Number Between 1 to 4");
}

};

document.querySelector('.btn--hold').addEventListener('click', gameLogic);

