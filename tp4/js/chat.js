const changer_nom = document.getElementById("changer-nom")
const messages=document.getElementById('messages');

simple_fetch('chat.php?action=nom').then(reponse=>{
    const nom=document.getElementById('nom');
    nom.value=reponse.nom;
});

changer_nom.addEventListener("click", ()=>{
    const nom = document.getElementById('nom').value;
    console.log(nom);
})

changer_nom.addEventListener('click',async ()=>{
    const nom=changer_nom.value;
    await simple_fetch('chat.php?action=changer-nom',{post:{nom}});
});

document.getElementById("rafraichir").addEventListener("click", rafraichir);

async function rafraichir(){
    console.log("rafraichir");
    const reponse = await simple_fetch("http://localhost/~12302331/chat.php?action=messages")
    messages.innerHTML='';
    console.log(reponse);
}