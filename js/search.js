
// Rendre les champs (Titre et Auteur) obligatoires 
function validators() {
   
    let varTitle = document.getElementById('titreInput').value;
    let varAuthor = document.getElementById('auteurInput').value;
   
    if(varTitle=="")
    {
         alert('Veuillez inscrire un titre!');
        document.getElementById('titre').focus;
        return false;
             
    } 
     if (varAuthor=="") {
         alert("Veuillez inscrire un nom d'auteur !");
        document.getElementById('auteur').focus;
        return false;
                     
             } 
           
        return true;
}

function searchBooks(){
  
    let  valid =  validators();
    if(valid)
    {
    let title = document.getElementById('titreInput').value;
    let author = document.getElementById('auteurInput').value;
   

    fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:" + author + "+intitle:" + title + "&key=AIzaSyAcdIrqYKZEZPqjTNo_8-R5iZoSUcdM2qA").then(
        response => { 
           
                if(response.ok) return  response.json();
        }
    ).then (
        booksReponse => {
            //parcourir les livres pour les afficher
            if(!document.getElementById("result"))
                 createResultLayout();
            
              let resultatHtml="";
            if(booksReponse.totalItems > 0 )
           { 
               let books = booksReponse.items;
               books.forEach(book => {
               resultatHtml+=displayBook(book,"fas fa-bookmark");
               }); 
        
              
              document.getElementById("result").innerHTML= resultatHtml;

              /* fin affichage resultat */
              document.querySelectorAll('.fa-bookmark').forEach(element => {
                element.addEventListener('click' , function(event){
                    event.stopPropagation();
                    event.preventDefault();
                    console.log("#### livre : " +this.closest(".livre"));
                    // verfier si le livre est ajouté dans la liste favori 
                    let exist =  isExist(this.closest(".livre").dataset.id);
                    // si oui : afficher une alerte disant que le livre est deja en favori
                    if(exist){
                        alert("Le livre avec l'id:"+this.closest(".livre").dataset.id+" est dejà disponible dans votre Poch'list!!");
                    }
                    // sinon ajouter le livre dans la liste favori et mettre à jour sessionStorage.
                    else{
                        // ajouter le livre 
                        ajouterLivreSessionStorage(this.closest(".livre").dataset.id ,$(this).closest(".livre").html());
                       // mettre à jour l'affichage de poch'List
                        getSessionStorage();
                    }
                   
                   
                });
            });
           }
            else {
            alert("Aucun livre n'a été trouvé!!");
           }
        }
    ).catch(
        error => {
            console.log(error);
            alert("Une erreur est survenue!! Veuillez contacter l'administrateur du site!!")
        }
    );
    }
    
}

function cancelSearch() {
    // supprimer le formulaire de la div myBooks
    let form = document.getElementById("form"); 
    document.getElementById("myBooks").removeChild(form);
    createButton();
    //remettre Ma poch'liste en place
    //let pochListe = document.getElementById("content");
    //document.getElementById("myBooks").insertBefore( pochListe, document.getElementById("myBooks").children[1]);

    let pochListe = document.getElementById("content");
    pochListe.firstElementChild.textContent=  "Ma poch'liste";

    // supprimer les résultats de recherche 

    if(document.getElementById("result")!= null)
    {
        document.getElementById("result").remove();
    }
    if(document.getElementById("resTitle")!= null)
    {
        document.getElementById("resTitle").remove();
    } 

    // supprimer le titre résultat de recherche
    /*while (document.getElementsByClassName('res')[0]) {
        document.getElementsByClassName('res')[0].remove();
    }*/


}