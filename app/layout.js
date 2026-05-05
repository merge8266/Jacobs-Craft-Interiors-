export const metadata = {
  title: "Jacob's Craft Interiors",
  description: "Interior design, cabinets, tiling and finishing",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
