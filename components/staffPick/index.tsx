import { Image } from "@gluestack-ui/themed";
import { Box, HStack, Heading, Text } from "@gluestack-ui/themed";
import React from "react";
type staffPickProps = {
  AuthorName: string;
  description: string;
  ProfileImage: string | undefined;
};

const StaffPick = ({
  AuthorName,
  description,
  ProfileImage,
}: staffPickProps) => {
  return (
    <Box>
      <HStack>
        <Image
          size="xs"
          alt="blog"
          h={"$5"}
          w={"$5"}
          rounded={"$full"}
          source={{
            uri: ProfileImage,
          }}
        />
        <Text
          color="$black"
          paddingLeft={"$2"}
          size="xs"
          bold
          alignItems="center"
          fontWeight="$medium"
        >
          {AuthorName}
        </Text>
      </HStack>
      <Heading size="sm" w="$80" paddingTop={"$1"}>
        {description}
      </Heading>
    </Box>
  );
};

export default StaffPick;
