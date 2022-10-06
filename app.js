const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(() => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    console.log(seconds);
    if(seconds == 0){
        secondHand.style.transition = 'none';
    }
    if(seconds == 1){
        secondHand.style.transition = 'all 1s';
    }

    const minute = now.getMinutes();
    const minuteDegree = ((minute/60)*360) + 90;
    minHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour/12)*360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}, 1000);


