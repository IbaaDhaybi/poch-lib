function ajouterLivreSessionStorage(id, bookContent){

    let livre= `<div class="livre" data-id="${id}"> ${bookContent}</div>`;
   //1/ Ajouter l'id du livre dans sessionStorage
    sessionStorage.setItem("book"+id, livre);

}

 // recuperer sessionStorage et afficher les livres stockés dans la session dans poch'list
function getSessionStorage(){
 
    let favori ="";
    console.log("session storage length " + sessionStorage.length)
    for (let index = 0; index < sessionStorage.length; index++) {
         let id = sessionStorage.key(index);
        let bookContent =  sessionStorage.getItem(id);
        console.log("## id start with book : " + id.startsWith("book"));
       if(id.startsWith("book"))
       favori+=displayBookMarked(bookContent);
    }

    createPochListLayout();
       
    document.getElementById("favori").innerHTML = favori;
    document.querySelectorAll('.fa-trash-alt').forEach(element => {
        element.addEventListener('click' , function(event){
            event.stopPropagation();
            event.preventDefault();
            //supprimer le livre du sessionStorage 
            let exist = isExist(this.closest(".livre").dataset.id);
            if(exist)
            {
                removeFromSessionStorage(this.closest(".livre").dataset.id);
                $(this).closest(".livre").remove();
            }
            else {
                alert("Livre n'est pas disponible!!");
            }
            //supprimer du visuel : actualiser getsessionStorage ou bien supprimer l'element en cours
        });
    });
}

function removeFromSessionStorage(id){
   sessionStorage.removeItem("book"+id);
}

function isExist(id){
 let exist = false;
    for (let index = 0; index < sessionStorage.length; index++) {
        let idKey = sessionStorage.key(index);
        if ("book"+id == idKey) 
        {
            exist=true;
            break;
        }
   }
   return exist;
}