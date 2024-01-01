import { useState } from "react"
import { AiFillHeart } from "react-icons/ai"

import styles from "./BooksCard.module.css"

// eslint-disable-next-line react/prop-types
function BooksCard({ data, HandelLikedList }) {
    const { title, author, image, language, pages } = data;

    const [like, setLike] = useState(false);

    const likeHandeler = () => {
        HandelLikedList(data, like);
        setLike((like) => !like);
    }

    return (
        <div className={styles.card}>
            <img src={image} alt="title" />

            <div className={styles.info}>
                <h3>{title}</h3>
                <p>{author}</p>

                <div>
                    <span>{language}</span>
                    <span>{pages}</span>
                </div>
            </div>
            <button onClick={likeHandeler}>
                <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
            </button>
        </div>
    )
}

export default BooksCard