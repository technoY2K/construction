import type { MetaFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import App from "./App";

export const meta: MetaFunction = () => ({
    charset: "utf-8",
    title: "Cools",
    viewport: "width=device-width,initial-scale=1",
});

export default function Root() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
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
