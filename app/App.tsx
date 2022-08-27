import { Outlet } from "@remix-run/react";
import { EthersProvider } from "./hooks/useEthersProvider";

export default function App() {
    return (
        <div id="app">
            <EthersProvider>
                <Outlet />
            </EthersProvider>
        </div>
    );
}
