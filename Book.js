// Grabbing elements
let search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    bookName = document.getElementById('bookName'),
    bookAuthor = document.getElementById('bookAuthor'),
    publishYear = document.getElementById('publishYear'),
    editionCount = document.getElementById('editionCount'),
    firstPublished = document.getElementById('firstPublished'),
    languages = document.getElementById('languages');


    submit.addEventListener('click', searchBook)

    // var myHeaders = new Headers();
    // myHeaders.append("Cookie", "__cfduid=d354e8c66446965133da840d1d57820451615506517");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    function searchBook(event) {
      event.preventDefault();
      let book = search.value;

      fetch(`http://openlibrary.org/search.json?q=${book}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        bookName.innerHTML = result.doc.title;
        bookAuthor.innerHTML = result.doc.author_name;
        editionCount.innerHTML = result.doc.edition_count;
        firstPublished.innerHTML = result.doc.first_publish_year;
        languages.innerHTML = result.doc.language[0];
        publishYear.style.visibility = 'visible';
      })
      .catch(error => console.log('error', error));
    }