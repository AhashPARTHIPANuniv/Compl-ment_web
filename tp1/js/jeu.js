const pingouin = document.getElementById('pingouin');
const eau = document.getElementById('eau');
const hauteurEau = eau.offsetHeight;
const largeurEau = eau.offsetWidth;
const hauteurPingouin = pingouin.height;
const largeurPengouin = pingouin.width;
let score = 0;
document.getElementById("score").textContent = score;

document.addEventListener('keydown', function(event){
    
    var dy = parseInt(pingouin.style.top);
    var val_deplacement = 40;

    console.log(dy);

    switch (event.code) {
        case 'ArrowDown':
            dy += val_deplacement;
            if(dy>hauteurEau-hauteurPingouin){dy=390}
            pingouin.style.top = dy+"px";
            break;
        
        case 'ArrowUp':
            dy -= val_deplacement;
            if(dy<0){dy=0};
            pingouin.style.top = dy+"px";
            break
    }
})


window.setInterval(function(){
    const poisson=document.createElement('img');
    poisson.src='tp1/img/poisson.svg';
    poisson.className='poisson';
    eau.append(poisson);
    poisson.style.top=(Math.random()*(450-18))+'px';
    window.getComputedStyle(poisson).top;
    poisson.style.left='-40px';
    window.setTimeout(function(){
        poisson.remove();
    },2000);
    window.setTimeout(function(){
        const rectPingouin=pingouin.getBoundingClientRect();
        const rectPoisson =poisson.getBoundingClientRect();
        if(rectPingouin.bottom>rectPoisson.top && rectPingouin.top<rectPoisson.bottom){
            console.log('miam');
            score++
            document.getElementById('score').textContent = score;
            poisson.remove();
        }   
    }, 1650)
},500);

window.setInterval(function(){
    const phoque=document.createElement('img');
    phoque.src='img/phoque.svg';
    phoque.className='phoque';
    eau.append(phoque);
    phoque.style.top=(Math.random()*(450-117))+'px';
    phoque.style.left='920px';
    window.getComputedStyle(phoque).top;
    phoque.style.left='-120px';
    window.setTimeout(function(){
        phoque.remove();
    },2000);
    window.setTimeout(function(){
        const rectPingouin=pingouin.getBoundingClientRect();
        const rectPhoque =phoque.getBoundingClientRect();
        if(rectPingouin.bottom>rectPhoque.top && rectPingouin.top<rectPhoque.bottom)
        {
            alert('Mangé par le phoque!');
        }
    },1625);
},4000);