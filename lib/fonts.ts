import localFont from "next/font/local"

export const telkomselBatikSans = localFont({
  src: [
    {
      path: "../assets/fonts/TelkomselBatikSans/TelkomselBatikSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/TelkomselBatikSans/TelkomselBatikSans-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-telkomselBatikSans",
})


