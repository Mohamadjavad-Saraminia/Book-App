import styles from "../Layouts/Layout.module.css";
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <div>
            {/* Bara Sabet moondane Footer & header  
            children props haye Component Vaaled ya Hamoon App.js hast*/}
            <header className={styles.header}>
                <h1>Book App</h1>
                <p><a href="https://react.dev/">LearnStart </a>| React.js Full Course</p>
            </header>
            {children}
            <footer className={styles.footer}>
                <p>Developed by Mohamad with ❤ </p>
            </footer>
        </div>
    )
}

export default Layout