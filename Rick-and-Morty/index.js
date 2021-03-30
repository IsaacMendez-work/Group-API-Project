// fetch('https://openlibrary.org/search.json?q=dracula')
//     .then(function(response) {
//         response.json()
//     })
//     .then(function(bookTitle) {
//         bookInfo(bookTitle.docs)
//     })

// bookInfo = function(bookTitle) {
//     const bookDiv = document.querySelector('#book-div');
//     bookTitle.forEach(function(searchOutput) {
//         const bookParagraph = document.createElement("P");
//         bookParagraph.innerHTML = `Search Results: ${searchOutput.title}`;
//         bookDiv.append(bookParagraph)
//     });
// }



fetch('https://rickandmortyapi.com/api/character/')   
.then(response => response.json())   
.then(characters => showCharacters(characters.results));

showCharacters = characters => {  
    const charactersDiv = document.querySelector('#rick-and-morty-characters');  
    characters.forEach(character => {    
        const characterElement = document.createElement('p');    
        characterElement.innerText = `Character Name: ${character.name}`;    
        charactersDiv.append(characterElement);  
    });
}

