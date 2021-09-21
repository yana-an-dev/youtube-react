import React from 'react'
import { Frame, Logo, Search, SearchButton } from './styles/header'

export default function Header({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = ({ children }) => {
    return <Logo>{children}</Logo>
}

Header.Search = ({ children, ...restProps }) => {
    return <Search placeholder="Search.." {...restProps}>{children}</Search>
}
Header.SearchButton = ({ children, ...restProps }) => {
    return <SearchButton {...restProps}>{children}</SearchButton>
}