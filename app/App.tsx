import { Outlet } from "@remix-run/react";
import styled, { createGlobalStyle } from "styled-components";
import counterSrc from "../public/assets/counter.gif";
import ieLogoSrc from "../public/assets/ie-logo.gif";
import notePadSrc from "../public/assets/notepad.gif";
import nsSrc from "../public/assets/ns-logo.gif";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: serif;
        background-image: url("/assets/grey-tile.png");
    }
`;

const MainWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

const MainContainer = styled.div`
    width: 80%;
    padding-top: 32px;

    @media screen and (min-width: 992px) {
        width: 60%;
    }
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    margin-top: 64px;
`;

export default function App() {
    return (
        <div id="app">
            <GlobalStyle />
            <MainWrapper>
                <MainContainer>
                    <Outlet />
                    <Footer>
                        <img src={counterSrc} alt="counter-gif" />
                        <img src={nsSrc} alt="ns-logo-gif" />
                        <img src={ieLogoSrc} alt="ie-logo-gif" />
                        <img src={notePadSrc} alt="notepad-gif" />
                    </Footer>
                </MainContainer>
            </MainWrapper>
        </div>
    );
}
