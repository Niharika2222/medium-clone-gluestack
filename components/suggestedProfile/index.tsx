import { Button, ButtonText, Image } from "@gluestack-ui/themed";
import { Box, HStack, Text } from "@gluestack-ui/themed";
import React from "react";

type SuggestedProfileProps = {
  profileImage: string;
  authorName: string;
  description: string;
};

const SuggestedProfile = ({
  profileImage,
  authorName,
  description,
}: SuggestedProfileProps) => {
  return (
    <Box w="$32">
      <HStack>
        <Image
          size="xs"
          alt="blog"
          h={"$8"}
          w={"$8"}
          rounded={"$full"}
          source={{
            uri: profileImage,
          }}
        />
        <HStack w="$32" alignItems="center">
          <Box w="$56">
            <Text
              color="$black"
              paddingLeft={"$2"}
              size="md"
              bold
              alignItems="center"
              fontWeight="$bold"
            >
              {authorName}
            </Text>
            <Text
              //@ts-ignore
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: 2,
              }}
              paddingTop={"$1"}
              paddingLeft={"$2"}
              size="sm"
              w="$56"
              color="#6B6B6B"
            >
              {description}
            </Text>
          </Box>
          <Box>
            <Button
              size="xs"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              bgColor="$white"
              borderWidth={"$1"}
              borderColor="#242424"
              rounded={"$full"}
            >
              <ButtonText color="#242424" size="sm" fontWeight="$normal">
                Follow
              </ButtonText>
            </Button>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default SuggestedProfile;
