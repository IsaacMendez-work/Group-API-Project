// Grabbing elements from HTML to work with in js
let search = document.getElementById("search"),
    submit = document.getElementById("submit"),
    bookName = document.getElementById("bookName"),
    directions = document.getElementById("directions"),
    needed = document.getElementById("needed"),
    one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three");
submit.addEventListener('click', getDrink)

// var myHeaders = new Headers();
// myHeaders.append("Cookie", "__cfduid=de230c27769be510293a1c0e90f7f788c1615655737");
// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

function getDrink(e){
    e.preventDefault();
    let typedTitle = search.value;
    fetch(`https://openlibrary.org/search.json?q=${typedTitle}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    bookName.innerHTML = result.docs[0].title;
    directions.innerHTML = result.docs[0].strInstructions;
    one.innerHTML = result.docs[0].strIngredient1;
    two.innerHTML = result.docs[0].strIngredient2;
    three.innerHTML = result.docs[0].strIngredient3;
    needed.style.visibility = 'visible';
  })
  .catch(error => console.log('error', error));
}