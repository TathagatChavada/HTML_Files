const rock = document.getElementById('b1');
const paper = document.getElementById('b2');
const scissor = document.getElementById('b3');
const result = document.getElementById('Result');
const You = document.getElementById('btn');
const Bot = document.getElementById('bot');

rock.addEventListener('click', func1);
paper.addEventListener('click', func2);
scissor.addEventListener('click', func3);

const arr = ['Rock', 'Paper', 'Scissor'];
function func1() {
    let i = Math.floor(Math.random() * arr.length);
    y = arr[i];
    You.innerHTML = 'Rock';

    if (y == arr[0]) {
        Bot.innerHTML = 'Rock';
        result.innerHTML = 'Match Tied!!'
    }

    else if (y == arr[1]) {
        Bot.innerHTML = 'Paper';
        result.innerHTML = 'You Lose!'
    }
        
    else {
        Bot.innerHTML = 'Scissor';
        result.innerHTML = 'You Won!'
    }

    setTimeout(reset_Value,2000)
    function reset_Value() {
        let rv = '';
        You.innerHTML = rv;
        Bot.innerHTML = rv;
        result.innerHTML = rv;
    }
}

function func2() {
    let j = Math.floor(Math.random() * arr.length);
    z = arr[j];
    You.innerHTML = 'Paper';

    if (z == arr[0]) {
        Bot.innerHTML = 'Rock';
        result.innerHTML = 'You Won!'
    }

    else if (z == arr[1]) {
        Bot.innerHTML = 'Paper';
        result.innerHTML = 'Match Tied!!'
    }
        
    else {
        Bot.innerHTML = 'Scissor';
        result.innerHTML = 'You Lose!'
    }

    setTimeout(reset_Value,2000)
    function reset_Value() {
        let rv = '';
        You.innerHTML = rv;
        Bot.innerHTML = rv;
        result.innerHTML = rv;
    }
}

function func3() {
    let k = Math.floor(Math.random() * arr.length);
    x = arr[k];
    You.innerHTML = 'Scissor';

    if (x == arr[0]) {
        Bot.innerHTML = 'Rock';
        result.innerHTML = 'You Lose!'
    }
    
    else if (x == arr[1]) {
        Bot.innerHTML = 'Paper';
        result.innerHTML = 'You Won!'
    }
        
    else {
        Bot.innerHTML = 'Scissor';
        result.innerHTML = 'Match Tied!!'
    }

    setTimeout(reset_Value,2000)
    function reset_Value() {
        let rv = '';
        You.innerHTML = rv;
        Bot.innerHTML = rv;
        result.innerHTML = rv;
    }
}
