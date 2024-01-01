import { IoSearchSharp } from "react-icons/io5";
import styles from "../Component/Searchbox.module.css"

// eslint-disable-next-line react/prop-types
function Searchbox({ search, setSearch, searchHandeler }) {
    return (
        <>
            <input
                className={styles.search}
                type="text"
                placeholder="Search title"
                value={search}
                onChange={
                    (e) => setSearch(e.target.value.toLowerCase())
                } />
            <button onClick={searchHandeler} ><IoSearchSharp /></button>
        </>
    )
}

export default Searchbox