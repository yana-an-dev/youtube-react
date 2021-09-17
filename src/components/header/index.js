import React from 'react'
import { Frame, Logo, Title } from './styles/header'

export default function Header({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Header.Logo = ({ children }) => {
    return <Logo>{children}</Logo>
}

Header.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}