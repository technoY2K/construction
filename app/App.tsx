import { Outlet } from "@remix-run/react";
import styled, { createGlobalStyle } from "styled-components";
import { EthersProvider } from "./hooks/useEthersProvider";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'IBM Plex Mono', monospace;
        background-image: url("/assets/grey-tile.png");
    }
`;

const MainWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
`;

const MainContainer = styled.div`
    min-width: 75vw;
`;

export default function App() {
    return (
        <div id="app">
            <EthersProvider>
                <GlobalStyle />
                <MainWrapper>
                    <MainContainer>
                        <Outlet />
                    </MainContainer>
                </MainWrapper>
            </EthersProvider>
        </div>
    );
}
