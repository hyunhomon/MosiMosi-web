import React from 'react';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import '../styles/fonts.css';

interface MenuItemProps {
    icon: React.ReactNode;
    title: string;
    href: string;
}

const MenuItemContainer = styled.div`
    width: 100%;

    padding: 12px 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    border-radius: 12px;

    &:hover {
        background-color: #c3ecc5;
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


    return (
        <MenuItemContainer onClick={ () => {
            navigate(href);
        } }>
            { icon }
            <span>{ title }</span>
        </MenuItemContainer>
    )
}

export default MenuItem;