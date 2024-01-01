import { useState } from "react"

import { books as bookData } from "../constants/mockData";
import BooksCard from "./BooksCard";
import Sidecard from "./Sidecard";
import Searchbox from "./Searchbox";

import styles from "../Component/Books.module.css"


function Books() {

    const [books, setBooks] = useState(bookData);
    const [liked, setLiked] = useState([]);
    const [search, setSearch] = useState([]);


    const HandelLikedList = (book, status) => {
        if (status) {
            const newlikedlist = liked.filter(i => i.id !== book.id)
            setLiked(newlikedlist);
        } else {
            setLiked(liked => [...liked, book])
        }
    };

    const searchHandeler = () => {
        if (search) {
            const newBooks = bookData.filter(book => book.title.toLowerCase().includes(search));
            setBooks(newBooks);
        } else {
            setBooks(bookData);
        }
    }

    return (
        <>
            <Searchbox search={search} setSearch={setSearch} searchHandeler={searchHandeler} />

            <div className={styles.container}>
                <div className={styles.cards}>
                    {books.map((book) => (
                        <BooksCard key={book.id} data={book} HandelLikedList={HandelLikedList} />
                    ))}
                </div>
                <div className={styles.favorite}>
                    <h4>Favorite</h4>
                    {!!liked.length && <div>{liked.map(book => <Sidecard key={book.id} data={book} />)}</div>}
                </div>


            </div>
        </>
    )
}

export default Books