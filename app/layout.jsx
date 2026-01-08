export const metadata = {
  title: "Poésie Interactive - Mahmoud Darwich",
  description: "Littérature numérique interactive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
