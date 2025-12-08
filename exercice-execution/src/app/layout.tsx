import type { Metadata } from "next";
import "../css/variables.css"
import "../css/reset.css"
import "../css/base.css"
import "../css/composition.css"
import "../css/blocks.css"
import "../css/utilities.css"

export const metadata: Metadata = {
  title: "mood Traker",
  description: "Track your emotional well-being",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
