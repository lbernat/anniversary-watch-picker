export const metadata = {
  title: "Anniversary Watch Picker",
  description: "A shortlist of watches for a 20-year anniversary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
