import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'dashboard-logistico-sli-4pl',
  description: 'Diagrama de flujo logístico interactivo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Fonts y Material Symbols requeridos por el diseño original */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-gray-50 text-gray-800 h-screen flex flex-col overflow-hidden">
        {children}
      </body>
    </html>
  );
}
