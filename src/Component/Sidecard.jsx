import styles from "../Component/Sidecard.module.css"

// eslint-disable-next-line react/prop-types
function Sidecard({ data: { image, title } }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default Sidecard