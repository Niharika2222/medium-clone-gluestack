import Card from "@/components/cards";
import { Box, Button, ButtonText, HStack, Text } from "@gluestack-ui/themed";
import Image from "next/image";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <main>
      <LoginPage />
    </main>
  );
}
