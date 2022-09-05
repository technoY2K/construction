import { Outlet } from "@remix-run/react";
import { createGlobalStyle } from "styled-components";
import { EthersProvider } from "./hooks/useEthersProvider";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'IBM Plex Mono', monospace;
    }
`;

export default function App() {
    return (
        <div id="app">
            <EthersProvider>
                <GlobalStyle />
                <Outlet />
            </EthersProvider>
        </div>
    );
}
