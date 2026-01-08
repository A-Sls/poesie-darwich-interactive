import '../styles/globals.css';

export const metadata = {
  title: "Poésie Interactive - Mahmoud Darwich",
  description: "Littérature numérique interactive - Sur cette terre ce qui mérite la vie",
  icons: {
    icon: '🖤',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f0f1e" />
      </head>
      <body>{children}</body>
    </html>
  );
}
