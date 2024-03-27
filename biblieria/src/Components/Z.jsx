/* import React, { useEffect } from 'react';
import axios from 'axios';
import axiosLibrioteca from '../api/axios';

export default function Z() {
    let categorie = ["Fiction", "Drama", "Art"]
    const autori = [
        "Philip Pullman",
        "Neil Gaiman",
        "Giovanni Verga",
        "Italo Svevo",
        "J.K. Rowling",
        "Stephen King",
        "George Orwell",
        "Agatha Christie",
        "J.R.R. Tolkien",
        "Charles Dickens",
        "Leo Tolstoy",
        "Jane Austen",
        "Mark Twain",
        "Ernest Hemingway",
        "Fyodor Dostoevsky",
        "Gabriel Garcia Marquez",
        "Victor Hugo",
        "Arthur Conan Doyle",
        "Terry Pratchett",
        "Roald Dahl",
        "John Steinbeck",
        "James Joyce",
        "Margaret Atwood",
        "Herman Melville",
        "Kurt Vonnegut",
        "Ray Bradbury",
        "Philip K. Dick",
        "Aldous Huxley",
        "Virginia Woolf",
        "Albert Camus",
        "H.G. Wells",
        "Octavia E. Butler",
        "Isaac Asimov",
        "Kazuo Ishiguro",
        "H.P. Lovecraft",
        "Neil Gaiman",
        "Emily Bronte",
        "Daphne du Maurier",
        "Franz Kafka",
        "J.D. Salinger",
        "William Faulkner",
        "Toni Morrison",
        "Ursula K. Le Guin",
        "Raymond Chandler",
        "Homer",
        "Stephenie Meyer",
        "Michael Crichton",
        "Lewis Carroll",
        "Ayn Rand",
        "Anne Rice",
        "Orson Scott Card",
        "Stephen Hawking",
        "Carl Sagan",
        "Douglas Adams",
        "Jules Verne",
        "Jack London",
        "Margaret Mitchell",
        "C.S. Lewis",
        "Haruki Murakami",
        "Philip Roth",
        "Gillian Flynn",
        "David Foster Wallace",
        "Don DeLillo",
        "George R.R. Martin",
        "Harper Lee",
        "Dan Brown",
        "Ken Follet",
        "Oscar Wilde"
    ];
    let urlAutore = "https://www.googleapis.com/books/v1/volumes?printType=books&maxResults=40&q=inauthor:";

    useEffect(() => {
        for (let i = 0; i < autori.length; i++) {
            setTimeout(() => {                
                chiamatePerAutore(autori[i]);
            }, (1+i) * 4000); 
        }
    }, [])


   


    function mettiLibro(libro) {

    }
    function mettiAutore(autore) {
    }
    function mettiCategoria(categoria) {

    }


    function prendiAutore(autore) {

    }
    function prendiCategoria() {

    }

    function chiamatePerAutore(autore) {
      
            axios.get(urlAutore + autore).then(response => {
               let libri= response.data.items;
               for (let i = 0; i < libri.length; i++) {
                setTimeout(() => {                
                    mettiCategoria(libri[i].volumeInfo);
                }, (1+i) * 4000); 
            }
            })
      

    }


    return (
        <div>Z</div>
    )
}
 */