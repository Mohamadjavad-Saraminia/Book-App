import { useState } from "react"

import { books } from "../constants/mockData"
import BooksCard from "./BooksCard"

function Books() {
    const [liked, setLiked] = useState([]);

    const HandelLikedList = (book, status) => {
        if (status) {
            const newlikedlist = liked.filter(i => i.id !== book.id)
            setLiked(newlikedlist);
        } else {
            setLiked(liked => [...liked, book])
        }
    };

    return (
        <div>

            <div>
                {books.map((book) => (
                    <BooksCard key={book.id} data={book} HandelLikedList={HandelLikedList} />
                ))}
            </div>
            {!!liked.length && <div>ss</div>}

        </div>
    )
}

export default Books