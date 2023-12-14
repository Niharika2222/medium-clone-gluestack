import { Box, Button, ButtonText } from "@gluestack-ui/themed";
import React from "react";

type RecommendedTopicsProps = {
  text: string;
};

const RecommendedTopics = ({ text }: RecommendedTopicsProps) => {
  return (
    <Button
      size="xs"
      variant={"solid"}
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
      bgColor="$trueGray200"
      rounded={"$full"}
    >
      <ButtonText color="#242424" size="sm" fontWeight="$normal">
        {text}
      </ButtonText>
    </Button>
  );
};

export default RecommendedTopics;
