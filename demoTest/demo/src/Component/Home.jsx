
import React from 'react';
import { Link } from 'react-router-dom'; 
import { useState, useEffect } from 'react'; 
import { v4 as uuid} from 'uuid'; 

function Home() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        const fetchedBooks = [
            {
                id: uuid(),
                Author: "Divyanshu",
                Books: "Dogs"
            },
            {
                id: uuid(),
                Author: "Dev",
                Books: "Birds"
            }
        ];
        setBooks(fetchedBooks);
    }, []); 
    return (
        <div>
            <h1>Home</h1>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <div>Author: {book.Author}</div>
                        <div>Books: {book.Books}</div>
                    </li>
                ))}
            </ul>
            <Link to="/home">Refresh Data</Link> 
        </div>
    );
}

export default Home;