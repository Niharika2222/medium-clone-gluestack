import { Image } from "@gluestack-ui/themed";
import { Box, HStack, Heading, Text } from "@gluestack-ui/themed";
import React from "react";
import RecommendedTopics from "../recommendedTopics";
import { PiHandsClappingThin } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import { CiSaveDown2, CiShare1 } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";

type cardProps = {
  profileImage: string;
  blogImage: string;
};

const Card = ({ profileImage, blogImage }: cardProps) => {
  return (
    <HStack w="$5/6" borderBottomWidth="$1" borderBottomColor="$trueGray200">
      <Box w="$4/5">
        <HStack space="sm">
          <Image
            size="xs"
            alt="blog"
            h={"$6"}
            w={"$6"}
            rounded={"$full"}
            source={{
              uri: profileImage,
            }}
          />
          <Text size="sm" color="$black">
            Kim Kelly Stamp in The Narrative Arc
          </Text>
          <Box>.</Box>
          <Text size="sm">Sep 21 Member-only</Text>
        </HStack>
        <Heading color="$black" lineHeight={"$lg"} paddingTop={"$2"}>
          If You Want to Be a Creator, Delete All (But Two) Social Media
          Platforms
        </Heading>
        <Text
          //@ts-ignore
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
          }}
          paddingTop={"$2"}
        >
          In October 2022, during the whole Elon Musk debacle, I finally deleted
          Twitter from my phone. Around the same time, I also logged out of In
          October 2022, during the whole Elon Musk debacle, I finally deleted
          Twitter from my phone. Around the same time, I also logged out of
        </Text>
        <HStack
          py={"$10"}
          justifyContent="space-between"
          alignItems="center"
          marginRight={"$5"}
        >
          <HStack alignItems="center">
            <RecommendedTopics text={"Productivity"} />
            <Text size="xs" paddingLeft={"$1"}>
              8 min read
            </Text>

            <Text size="xs"> . Selected for you</Text>
          </HStack>
          <HStack space="2xl">
            <Text>
              <CiSaveDown2 size={20} />
            </Text>
            <Text>
              <BsPlayCircle size={20} />
            </Text>
            <Text>
              <BiDotsHorizontalRounded size={20} />
            </Text>
          </HStack>
        </HStack>
      </Box>
      <Box alignItems="flex-end" w="$1/5" marginTop={"$8"}>
        <Image
          size="md"
          alt="blog"
          h={"$24"}
          w={"$24"}
          source={{
            uri: blogImage,
          }}
        />
      </Box>
    </HStack>
  );
};

export default Card;
