function displayBook(book,icon){

    var desc = book.volumeInfo.description== undefined ? 'Information manquante' : book.volumeInfo.description;
    var pic = book.volumeInfo.imageLinks== undefined ? './images/unavailable.png' : book.volumeInfo.imageLinks.thumbnail;
    var alt = book.volumeInfo.imageLinks== undefined ? 'unavailable image' : book.volumeInfo.imageLinks;
   
   return `<div class="livre" data-id="${book.id}">
    <div class="icon"> 
        <i class="${icon}"></i>
        </div>
        <h4 class="inBook">Titre: ${book.volumeInfo.title} </h4>
    <h4 class="bookId">Id:  ${book.id}</h4>
    <h4 class="inBook">Auteur:  ${ book.volumeInfo.authors } </h4>
    <p class="bookDesc">Description: ${desc.substring(0, 200)} </p>
    <img src="${pic}" class="pic" alt="${alt}" />
</div>`;


}

function displayBookMarked(html){ 
    // return le html d'un livre dans resultat avec l'icon trash 
return html.replace("fas fa-bookmark", "fas fa-trash-alt");

}