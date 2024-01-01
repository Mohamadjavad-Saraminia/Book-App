import { IoSearchSharp } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function Searchbox({ search, setSearch, searchHandeler }) {
    return (
        <>
            <input
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