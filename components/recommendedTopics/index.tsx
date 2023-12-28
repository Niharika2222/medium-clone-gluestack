import {
  Badge,
  BadgeText,
  Box,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import React from "react";

type RecommendedTopicsProps = {
  text: string;
};

const RecommendedTopics = ({ text }: RecommendedTopicsProps) => {
  return (
    <Badge
      size="md"
      variant="solid"
      borderRadius="$full"
      backgroundColor="$trueGray200"
    >
      <BadgeText p="$1.5" color="#242424" fontSize="$xs" fontWeight="$normal">
        {text}
      </BadgeText>
    </Badge>
    // <Button
    //   size="xs"
    //   variant={"solid"}
    //   action="primary"
    //   isDisabled={false}
    //   isFocusVisible={false}
    //   bgColor="$trueGray200"
    //   rounded={"$full"}
    // >
    //   <ButtonText color="#242424" size="sm" fontWeight="$normal">
    //     {text}
    //   </ButtonText>
    // </Button>
  );
};

export default RecommendedTopics;
