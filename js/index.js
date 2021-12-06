var btn = document.createElement("div");
btn.id =  'bodyAll';
btn.innerHTML = '<button class="bouton" onclick="addBook()" >Ajouter un livre</button>';
btn.classList.add("bouton");
let elt = document.getElementById("myBooks");
elt.insertBefore(btn, elt.children[2]);

function addBook() {  
    let btn = document.getElementById("bodyAll"); 
    btn.classList.remove("bouton");
    btn.classList.add("formulaire");
    btn.innerHTML = '<div id="formulaire">'
    + '<form method="post" action="traitement.php" id="myform" >'
    + '<div class="recherche">'
    + '    <label for="titre">Titre du livre</label>'
    + '    <br />'
    + '    <input type="search" name="titre" id="titre" required />'   
    + '    <br />'
    + '    <label for="author">Auteur</label>'
    + '    <br />'
    + '    <input type="search" name="author" id="author" required />'
    +  '</div>'
    + '<button onclick="bookSearch()" id="rechercher">Rechercher</button>'
    + '    <br />'
    + '</form>'
    + '<button onclick="cancelAction()" id="annuler" >Annuler</button>'
    + '</div>';
    elt.insertBefore(btn, elt.children[2]);

}

   function cancelAction () {
    var frm = document.getElementById("formulaire");
    frm.innerHTML = '<button class="bouton" onclick="addBook()" >Ajouter un livre</button>';
    frm.classList.add("bouton");
}



//function bookSearch () {
//}
//var result = document.createElement("div");
//result.id = 'searchResult';