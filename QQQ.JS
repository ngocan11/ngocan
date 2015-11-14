$http.get('http://yourserver/api/books/' + 3).success(function(book) {
	book.name = "My name updated"
	$http.put('http://yourserver/api/books/', book);
});