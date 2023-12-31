import { books } from "../constants/mockData"
import BooksCard from "./BooksCard"

function Books() {
    return (
        <div>

            <div>
                {books.map((book) => (
                    <BooksCard key={book.id} data={book} />
                ))}
            </div>

            <div>

            </div>

        </div>
    )
}

export default Books