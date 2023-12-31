

// eslint-disable-next-line react/prop-types
function BooksCard({ data: { title, author, image, language, pages } }) {
    return (
        <div>

            <img src={image} alt="title" />
            <div>
                <h3>{title}</h3>
                <p>{author}</p>
            </div>

            <div>
                <span>{language}</span>
                <span>{pages}</span>
            </div>
            <button>like</button>
        </div>
    )
}

export default BooksCard