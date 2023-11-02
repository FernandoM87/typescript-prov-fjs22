// DIN UPPGIFT: Skapa en egen sammansatt typ Book som beskriver en bok. Byt ut any mot passande typer. 
// Kompilera TS-koden och se att den fortfarande fungerar som den ska. / 2 poäng

const book: (number | string []) = {
  title: "The secret",
  pages: 312,
  authors: ["John Doe", "Jane Doe"],
  price: 129,
}

const describeBook = (book: number | string []) => {
  console.log(`The book "${book.title}" has ${book.pages} pages and costs ${book.price} dollar.`);
  book.authors.forEach((author: string) => { console.log(`Author: ${author}`); });
};

describeBook(book);