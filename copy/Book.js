var getRequest, OpenLibrary;

(function () {
	getRequest = {get: function(url, callback) {
	    $.get(url, function(results) {})
		.done(function(data) {
			if (callback) { callback(data); }
	    });
	}};

    OpenLibrary = {search: function(query, callback) {
	    var url = "https://openlibrary.org/search/inside.json?q=" + query;
	    getRequest.get(url, function(response) {
			callback(response.hits.hits)
		});
	}};

    var debounce = function (func, threshold, execASAP) {
	var timeout;
	return function debounced () {
	    var obj = this;
		var args = arguments;
	    function delayed () {
		if (!execASAP)
		    func.apply(obj, args);
		timeout = null;
	    };

	    if (timeout) {
		clearTimeout(timeout);
	    } else if (execASAP) {
		func.apply(obj, args);
	    }
	    timeout = setTimeout(delayed, threshold || 100);
	};
    };

	
    $(document).keyup('#booksearch', debounce(function(event) {
		$('.bookmatch').empty();
		$('.bookmatch').addClass('knifeLoading');
    }, 1000, false));

	// var knifeSVG = document.createElement('img');
	// // console.log(knifeSVG)
	// 	knifeSVG.src = '/knife-svg-19.png';
	// 	// console.log(knifeSVG)
	// 	document.querySelector('.knifeLoading').addEventListener('keyup');

	// var knifeDiv = document.getElementsByClassName("knifeLoading");
		// knifeDiv.innerHTML = knifeSVG;
		


    
	// // knifeSVG.src  = 'https://designlooter.com/knife-svg.html#gal_post_14294_knife-svg-19.png';
	// $(document).keyup('#booksearch', debounce(function(event) {
	// OpenLibrary.search($('#booksearch input').val(), function(results) {
	//     var match = results[0];
	//     $('.bookmatch').removeClass('knifeLoading');
	//     $('.bookmatch').append(
	// 		'<a href="https://openlibrary.org' + match.edition.key + '">' +
	// 	    '<img src="https:' + match.edition.cover_url + '">' +
	// 		'</a>'
	//     );
	// });
    // }, 1500, false));

}());