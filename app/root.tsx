import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/main.css";
import slickStylesUrl from "react-awesome-slider/dist/styles.css";
import slickThemeStylesUrl from "react-awesome-slider/dist/custom-animations/cube-animation.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "LUX Nails",
  description: "Nails Saloon",
  viewport: "width=device-width,initial-scale=1",
});
export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: slickStylesUrl },
    { rel: "stylesheet", href: slickThemeStylesUrl },
  ];
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
