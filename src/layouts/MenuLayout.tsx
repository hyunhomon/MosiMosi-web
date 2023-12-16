import styled, { css } from "styled-components";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import MenuItem from "../components/MenuItem";

import { VscDesktopDownload } from "react-icons/vsc";
import { MdOutlineLogin } from "react-icons/md";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

const sidebarWidth = '240px';

const WholeContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    padding-left: ${ sidebarWidth };
`;

const LogoImg = styled.img`
    width: 80px;
    height: 80px;
`;

const MenuLayoutContainer = styled.div`
    width: ${ sidebarWidth };
    height: 100%;

    padding: 30px 20px;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 50px;

    position: fixed;
    left: 0;

    background-color: #E3F6E4;

`;

const MenuLayoutItemContainer = styled.div`
    width: fit-content;
    height: fit-content;
`;

const MenuItemContainer = styled.div`
    width: 100%;
    height: fit-content;
`;

const MenuItemList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const MenuItemListContainer= styled.div`   
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

function MenuLayout() {
    return (
        <WholeContainer>
            <MenuLayoutContainer>
                <LogoImg src="icon.svg" />
                <MenuItemListContainer>
                    <MenuItemList>
                        <MenuItem
                            icon={ <RiHome2Line /> }
                            title={ "홈" }
                            href={ "" }
                        />
                        <MenuItem
                            icon={ <VscDesktopDownload /> }
                            title={ "다운로드" }
                            href={ "download" }
                        />
                    </MenuItemList>
                    <MenuItemList>
                        <MenuItem
                            icon={ <MdOutlineLogin /> }
                            title={ "로그인" }
                            href={ "login" }
                        />
                        <MenuItem
                            icon={ <AiOutlineMenu /> }
                            title={ "더보기" }
                            href={ "add" }
                        />
                    </MenuItemList>
                </MenuItemListContainer>
            </MenuLayoutContainer>
            <Outlet />
        </WholeContainer>
    );
};

export default MenuLayout;
