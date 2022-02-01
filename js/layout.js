
//creer un bouton pour l'affichage du formulaire d'ajout
function createButton(){

    let btn = document.createElement("div");
    btn.id= 'divButton';
    btn.innerHTML = '<button id="ajouter" class="button" onclick="createForm()" >Ajouter un livre</button>';
    btn.classList.add("divButton");
    document.getElementById("myBooks").insertBefore(btn, document.getElementById("myBooks").children[2]);
}


// creer un formulaire pour l'ajout d'un livre 
function createForm(){
    
    // supprimer le bouton de la div myBooks
    let btn = document.getElementById("divButton"); 
    document.getElementById("myBooks").removeChild(btn);
   
   let form = document.createElement('div');
   form.id ="form";
   form.className ="form";
   document.getElementById("myBooks").insertBefore(form, document.getElementById("myBooks").children[2]);

    // creer les composants du formulaire
    let titre = document.createElement('h3');
    titre.className ="libelle";
    titre.textContent= "Titre:";
    titre.id = "titre";
    document.getElementById("form").append(titre);
 
    let titreInput = document.createElement('input');
    titreInput.className ="input";
    titreInput.id ="titreInput";
    document.getElementById("form").append(titreInput);
   
    let auteur = document.createElement('h3');
    auteur.className ="libelle";
    auteur.textContent="Auteur:";
    auteur.id="auteur";
    document.getElementById("form").append(auteur);

    let auteurInput = document.createElement('input');
    auteurInput.className ="input";
    auteurInput.id = "auteurInput";
    document.getElementById("form").append(auteurInput);

    let rechercher =`<button onclick="searchBooks()" id="rechercher">Rechercher</button>`;
    let annuler = `<button onclick="cancelSearch()" id="annuler" >Annuler</button>`;

    document.getElementById("form").innerHTML += rechercher + annuler;
}

// preparer le layout des résultats de recherche
function createResultLayout() {
    
    // preparer le div  pour les livres recherchés
    let result = `<div id="resTitle" class="res"> <h2>Résultats de recherche</h2> <div id="result"></div> </div>`;
    $('hr').after(result);
  
}

// preparer le layout des favoris
function createPochListLayout() {
    if(document.getElementById("favori")!= null)
    {
        document.getElementById("favori").remove();
    }
    let content = document.getElementById("content");
    content.className= "res";
    //Ajouter un div pour les favoris dans content
    let favori = `<div id="favori"></div> `;
    $('#content h2').after(favori);
  
}