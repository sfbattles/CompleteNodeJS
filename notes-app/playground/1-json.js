const book = {
    title: 'ego is the Enemy',
    author: 'ryan Holiday'
};

bookJSON = JSON.stringify(book);

console.log(bookJSON);

const parsedData = JSON.parse(bookJSON);

console.log(parsedData.author);
