import {
  Badge,
  BadgeText,
  Button,
  ButtonText,
  Image,
} from "@gluestack-ui/themed";
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
  username: string;
  date: string;
  heading: string;
  description: string;
  readTime: string;
  tag: string;
};

const Card = ({
  profileImage,
  blogImage,
  username,
  date,
  heading,
  description,
  readTime,
  tag,
}: cardProps) => {
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
            {username}
          </Text>
          <Box>.</Box>
          <Text size="sm">{date}</Text>
        </HStack>
        <Heading color="$black" lineHeight={"$lg"} paddingTop={"$2"}>
          {heading}
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
          {description}
        </Text>
        <HStack
          py={"$10"}
          justifyContent="space-between"
          alignItems="center"
          marginRight={"$5"}
        >
          <HStack alignItems="center">
            <Badge
              size="md"
              variant="solid"
              borderRadius="$full"
              backgroundColor="$trueGray200"
            >
              <BadgeText
                p="$1.5"
                color="#242424"
                fontSize="$xs"
                fontWeight="$normal"
              >
                {tag}
              </BadgeText>
            </Badge>
            <Text size="xs" paddingLeft={"$1"}>
              {readTime}
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
