import "./globals.css";

export const metadata = {
  title: {
    default: "Mohamed Wael",
    template: "%s | Mohamed Wael",
  },
  description: "Portofolio website of Mohamed Wael",
  url: "https://mowael.com",
  siteName: "Mohamed Wael",
  locale: "en-US",
  type: "portfolio",
  images: [
    {
      url: "/images/main.jpg",
      width: 800,
      height: 600,
    },
  ],
  generator: "Next.js",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Mohamed", "Wael", "MoWael", "Portofolio", "Skills"],
  authors: [{ name: "Mohamed", url: "https://github.com/MoWael11" }],
  colorScheme: "dark",
  creator: "Mohamed Wael",
  publisher: "Mohamed Wael",
  category: "Personal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon/favicon-32x32.png",
    shortcut: "/icon/favicon.ico",
    apple: "/icon/apple-touch-icon.png",
    other: {
      rel: "android-chrome-192x192.png",
      url: "/icon/android-chrome-192x192.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
