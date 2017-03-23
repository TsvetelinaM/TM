/* Task Description */
/*
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];
		function listBooks() {
			if (arguments[0] !== undefined) {
			    if (arguments[0].author) {
			        return authorOnly(arguments[0]);
			    }
			    if (arguments[0].category) {
			        return catOnly(arguments[0]);
			    }
			} else {
			    return books;
			}
			}

		function addBook(book) {
			if(book.title.length<2 || book.title.length>100) {
				throw '';
			}
			if (book.isbn.length!==10 && book.isbn.length!==13) {
				throw '';
			}
			if (book.author.length<1) {
				throw '';
			}
			if (uniqueTitle(book)) {
				throw '';
			}
			if (uniqueISBN(book)) {
				throw '';
			}
			if (categories.indexOf(book.category)<0) {
				categories.push(book.category);
			}


			book.ID = books.length + 1;
			books.push(book);
			return book;
		}

		function listCategories() {
				return categories;
		}


		function uniqueTitle(newBook) {
			for(let i in books) {
				if (books[i].title===newBook.title) {
					return true;
				} else {
					return false;
				}
			}
		}

		function uniqueISBN(newBook) {
			//console.log(newBook.isbn);
			return books.some(book =>book.isbn===newBook.isbn);
		}
		function authorOnly(newBook) {
			return books.filter(book=>book.authot === newBook.author);
		}
		function catOnly(newBook) {
			return books.filter(book=>book.category === newBook.category);
		}

			 	/*function addCategory(name) {
		       categories[name] = {
				    books: [],
		        ID: categories.length + 1
		       };
		    }*/

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;
