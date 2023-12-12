import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import StyledJsxRegistry from "./registry";
import { Box, HStack, Text } from "@gluestack-ui/themed";
import Layout from "@/layout/DashboardLayout";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="gs">
      <body className={inter.className}>
        <main>
          <Providers>
            <AuthProvider>
              <Layout />
              <StyledJsxRegistry>{children}</StyledJsxRegistry>
            </AuthProvider>
          </Providers>
        </main>
      </body>
    </html>
  );
}
//login
