var requests, OpenLibrary;
(function () {
	requests = {
		get: function (url, callback) {
			$.get(url, function (results) {
			}).done(function (data) {
				if (callback) { callback(data); }
			});
		}
	};

	OpenLibrary = {
		search: function (query, callback) {
			var url = "https://openlibrary.org/search/inside.json?q=" + query
			requests.get(url, function (response) { callback(response.hits.hits) });
		},
	};

	var debounce = function (func, threshold, execAsap) {
		var timeout;
		return function debounced() {
			var obj = this, args = arguments;
			function delayed() {
				if (!execAsap)
					func.apply(obj, args);
				timeout = null;
			};

			if (timeout) {
				clearTimeout(timeout);
			} else if (execAsap) {
				func.apply(obj, args);
			}
			timeout = setTimeout(delayed, threshold || 100);
		};
	};

	$(document).keyup('#booksearch', debounce(function (event) {
		$('.bookmatch').empty();
		$('.bookmatch').addClass('loader');
	}, 100, false));

	$(document).keyup('#booksearch', debounce(function (event) {
		OpenLibrary.search($('#booksearch input').val(), function (results) {
			var match = results[0];
			$('.bookmatch').removeClass('loader');
			$('.bookmatch').append(
				'<a href="https://openlibrary.org' + match.edition.key + '">' +
				'<img src="https:' + match.edition.cover_url + '">' +
				'</a>'
			);
		});
	}, 1000, false));
}());