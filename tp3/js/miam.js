const terrain=document.getElementById('terrain');
const chat   =document.getElementById('chat');
const souris =document.getElementById('souris');
let partieEnCours=true;

terrain.addEventListener('click',async function(e){
  let joueur=document.getElementById('joueur').value;
  console.log(joueur);

  const rectChat  =  chat.getBoundingClientRect();
  const rectSouris=souris.getBoundingClientRect();
  let x=event.offsetX;
  let y=event.offsetY;

  let rect;
  if(joueur==='chat'){rect=  chat.getBoundingClientRect();}
  else               {rect=souris.getBoundingClientRect();}

  if(x<    rect.width/2 ){x=    rect.width/2;}
  if(x>800-rect.width/2 ){x=800-rect.width/2;}
  if(y<    rect.height/2){y=    rect.height/2;}
  if(y>600-rect.height/2){y=600-rect.height/2;}

  let url='http://192.168.30.23/~12302331/miam-serveur.php';
  if(joueur==='chat'){
	url+='?clickChatX='+x+'&click'
	url+='?clickSourisX='+x+'&clickSourisY='+y;
  }

  let reponse;
  try{
	reponse=await simple_fetch(url);
  }catch(e){
	console.log('erreur',e);
	alert(e.erreur);
	return;
  }

  chat.style.left=(reponse.clickChat.x-rectChat.width/2)+'px';
  chat.style.top =(reponse.clickChat.y-rectChat.height/2)+'px';

  souris.style.left=(reponse.clickSouris.x-rectSouris.width/2)+'px';
  souris.style.top =(reponse.clickSouris.y-rectSouris.height/2)+'px';
});

setInterval(()=>{
  if(partieEnCours===false){return;}
  const rectChat  =  chat.getBoundingClientRect();
  const rectSouris=souris.getBoundingClientRect();
  //console.log(rectChat);
  if(rectChat.right  > rectSouris.left  &&
	 rectChat.left   < rectSouris.right &&
	 rectChat.bottom > rectSouris.top   &&
	 rectChat.top    < rectSouris.bottom )
  {
	alert('Miam');
	partieEnCours=false;
	setTimeout(()=>partieEnCours=true,1200);
	chat.style.left=null;
	chat.style.top =null;
	souris.style.left=null;
	souris.style.top =null;
  }
},50);
