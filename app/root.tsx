import type { MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import App from "./App";
import { EPErrors } from "./hooks/useEthersProvider";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Cools",
    viewport: "width=device-width,initial-scale=1",
});

const initStyledComponents = () =>
    typeof document === "undefined" ? "__STYLES__" : null;

export default function Root() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
                {initStyledComponents()}
            </head>
            <body>
                <App />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

interface Props {
    error: Error;
}

export function ErrorBoundary(props: Props) {
    const message =
        props.error.message === EPErrors.MetaMaskNotInstalled
            ? "Please Install MetaMask"
            : props.error;

    return (
        <html>
            <head>
                <title>Oh no!</title>
                <Meta />
                <Links />
                {initStyledComponents()}
            </head>
            <body>
                <p>{`${message}`}</p>
                <Scripts />
            </body>
        </html>
    );
}
