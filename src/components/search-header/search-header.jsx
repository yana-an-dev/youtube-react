import React, { useRef } from 'react'
import styles from './search-header.module.css'

const SearchHeader = ({ onSearch, onHomeClick }) => {
    const inputRef = useRef()

    const handleSearch = () => {
        const value = inputRef.current.value
        onSearch(value)
    }
    const onClick = () => {
        handleSearch()
    }

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    const logoClick = () => {
        onHomeClick()
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}
                onClick={() => logoClick()}>
                <img className={styles.img} src="images/logo.png" alt="logo" />
                <h1 className={styles.title}>YanaTube</h1>

            </div>

            <input
                ref={inputRef}
                className={styles.input}
                type="search"
                placeholder="search..."
                onKeyDown={onKeyDown}

            />
            <button
                type="submit"
                className={styles.button}
                onClick={onClick}>
                <i className="fas fa-search"></i>
            </button>

        </header>
    );
}
export default SearchHeader;



// export default function Header({ children, ...restProps }) {
//     return <Frame {...restProps}>{children}</Frame>
// }

// Header.Logo = ({ children }) => {
//     return <Logo>{children}</Logo>
// }

// Header.Search = ({ children, ...restProps }) => {
//     return <Search placeholder="Search.." {...restProps}>{children}</Search>
// }
// Header.SearchButton = ({ children, ...restProps }) => {
//     return <SearchButton {...restProps}>{children}</SearchButton>
// }