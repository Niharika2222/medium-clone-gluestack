import {
  Box,
  HStack,
  Heading,
  Input,
  InputField,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <Box>
      <Box flexDirection="row">
        <Box>
          <Image src={""} alt="blog" />
        </Box>
        <Text>Kim Kelly Stamp in The Narrative Arc</Text>
        <Text>Sep 21 Member-only</Text>
      </Box>
      <Box borderBottomWidth="$1" borderBottomColor="$red500" p="$5" />
      <Heading size="lg" as={"h1"}>
        Hello
      </Heading>
      <VStack reversed={false}>
        <Box w="$20" h="$20" bg="$blue300" />
        <Box w="$20" h="$20" bg="$blue400" />
        <Box w="$20" h="$20" bg="$blue500" />
      </VStack>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Text here" />
      </Input>
    </Box>
  );
};

export default Card;
