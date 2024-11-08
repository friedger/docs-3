import localFont from "next/font/local";

export const aeonik = localFont({
  src: [
    {
      path: "./Aeonik-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./Aeonik-Bold.woff",
      weight: "bold",
      style: "normal",
    },
  ],
  display: "optional",
  variable: "--font-aeonik",
});

export const aeonikFono = localFont({
  src: [
    {
      path: "./AeonikFono-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./AeonikFono-Regular.woff",
      weight: "normal",
      style: "normal",
    },
  ],
  display: "optional",
  variable: "--font-aeonikFono",
});

export const aeonikMono = localFont({
  src: [
    {
      path: "./AeonikMono-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./AeonikMono-Regular.woff",
      weight: "normal",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-aeonikMono",
});

export const inter = localFont({
  src: [
    {
      path: "./Inter-Regular.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./Inter-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-inter",
});
