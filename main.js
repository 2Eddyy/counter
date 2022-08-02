var sum =0;

document.getElementById('Counting').innerText=sum;

function increment(){
    sum = sum+1;
    document.getElementById('Counting').innerText=sum;
    // console.log(sum);
}
function decrement(){
    sum=sum-1;
    document.getElementById('Counting').innerText=sum;

    // console.log(sum);
}

function reset(){
    sum = 0;
    sum = 0;
    document.getElementById('Counting').innerText=sum;
    console.log(sum);
}
