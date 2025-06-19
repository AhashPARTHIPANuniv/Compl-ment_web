<script setup>
  import {ref,reactive} from 'vue';

  let tableau = reactive([
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '']
  ])

  let positionPiece=ref(0);

  let joueur = ref("chat");

  function mouvement_tableau(event){
    console
    positionPiece.value=event.pageX-30;
  }

  function click_td(ligne, colonne){
    for(let i = tableau.length-1; i >= 0; i--){
        if(tableau[i][colonne] === ""){
            tableau[i][colonne] = joueur.value;
            break;
        }
    }
    if(joueur.value=="chat"){joueur.value="souris"}
    else{joueur.value="chat"};
  }
</script>

<template>
<div id="jeu">
  <div id="joueur-chat" class="joueur" :class="{joueur:true, actif:joueur=='chat'}">
    <h2>Chat</h2>
    <img src="./assets/piece-chat.svg"/>
  </div>
  <img id="piece-active" :style="'left:'+positionPiece+'px'" :src="'/src/assets/piece-' + joueur + '.svg'"/>
  <table @mousemove="mouvement_tableau">
    <tr v-for="ligne in 6">
      <td @click="click_td(ligne-1, colonne-1)" v-for="colonne in 7">
          <Transition name="trans-piece">
            <img v-if="tableau[ligne-1][colonne-1]!==''" 
               :src="'/src/assets/piece-'+tableau[ligne-1][colonne-1]+'.svg'"/>
          </Transition>
      </td>
    </tr>
  </table>
  <div id="joueur-souris" :class="{joueur:true, actif:joueur=='souris'}">
    <h2>Souris</h2>
    <img src="./assets/piece-souris.svg"/>
  </div>
</div>
</template>

<style scoped>
#jeu{
	display: flex;
	margin-top: 100px;
}

#piece-active{
	position: absolute;
	left: 100px;
	top: 20px;
}

.joueur{
	width: 100px;
	height: 200px;
	margin:10px;
	margin-top:100px;
	background-color: blue;
	color: white;
	border-radius: 10px;
	font-family: sans;
	padding: .5em;
	text-align: center;
	box-shadow: 2px 2px 2px rgba(0,0,0,.5);
}

.joueur.actif{
	background-color: #55f;
}

.joueur h2{
	font-size: 18px;
}

table{
	padding: 25px;
	padding-top: 27px;
	padding-bottom: 23px;
	background-image: url(assets/cadre.svg);
	border-collapse: separate;
	border-spacing: 0;
}

td {
	text-align: center;
	width: 68px;
	height: 68px;
}

table img{
	position: relative;
	transition: top .5s ease-in;
	top: 0;
    z-index: -1;
}

#jeu tr:nth-child(1) .trans-piece-enter-from{top: -110px;}
#jeu tr:nth-child(2) .trans-piece-enter-from{top: -180px;}
#jeu tr:nth-child(3) .trans-piece-enter-from{top: -250px;}
#jeu tr:nth-child(4) .trans-piece-enter-from{top: -320px;}
#jeu tr:nth-child(5) .trans-piece-enter-from{top: -390px;}
#jeu tr:nth-child(6) .trans-piece-enter-from{top: -460px;}

</style>