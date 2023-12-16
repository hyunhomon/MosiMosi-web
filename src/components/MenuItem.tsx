import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components';
import '../styles/fonts.css';

interface MenuItemProps {
    icon: React.ReactNode;
    title: string;
    href: string;
}

interface MenuItemContainerProps {
    backgroundColor: string;
}

const MenuItemContainer = styled.div<MenuItemContainerProps>`
    width: 100%;

    padding: 12px 16px;

    cursor: pointer;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    border-radius: 12px;

    transition: all .1s ease-in-out;

    background-color: ${(props) => props.backgroundColor};

    &:hover {
        background-color: #c3ecc5;
    }

    &:active {
        filter: brightness(0.9)
    }

    svg {
        width: 32px;
        height: auto;
    }

    span {
        font-family: 'Pretendard-Medium', sans-serif;
        font-size: 20px;
    }
`;

const MenuItem = ({ icon, title, href }: MenuItemProps) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <MenuItemContainer onClick={ () => {
            navigate(href);

        } } backgroundColor={ pathname  === '/' + href ? '#b8e9b9' : '' }>
            { icon }
            <span>{ title }</span>
        </MenuItemContainer>
    )
}

export default MenuItem;