"use client";
import {
  Box,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import React from "react";
import { PiHandsClappingThin } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import { CiSaveDown2, CiShare1 } from "react-icons/ci";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import withAuth from "@/hoc/withAuth";

const page = () => {
  return (
    <Box>
      <VStack px="$96" py="$16">
        <Heading fontSize={"$4xl"} lineHeight={"$4xl"}>
          Ten Habits that will get you ahead of 99% of People
        </Heading>
        <Text fontSize={"$xl"} py="$3" color="#6B6B6B">
          Improve your life and get ahead of your peers in 10 simple steps
        </Text>
        <HStack py="$4">
          <Box>
            <Image
              size="xs"
              alt="blog"
              h={"$10"}
              w={"$10"}
              rounded={"$full"}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS280A02yZt4POsUaiIhN4RTJwuaiA6NNhf0Q&usqp=CAU",
              }}
            />
          </Box>
          <Box marginLeft={"$3"}>
            <HStack>
              <Text>Alexandru Lazar</Text>
              <Text color="#6B6B6B"> . Follow</Text>
            </HStack>
            <Box>
              <HStack>
                <Text fontSize={"$sm"} color="#6B6B6B">
                  Published in
                </Text>
                <Text fontSize={"$sm"} color="#242424" marginLeft={"$1"}>
                  ILLUMINATION
                </Text>
                <Text fontSize={"$sm"}> . 9 min read</Text>
                <Text fontSize={"$sm"}> . Nov 18</Text>
              </HStack>
            </Box>
          </Box>
        </HStack>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth={"$1"}
          borderTopWidth={"$1"}
          borderColor="$trueGray200"
          py="$3"
          my="$3"
        >
          <HStack space="2xl">
            <HStack alignItems="center">
              <PiHandsClappingThin size={24} />
              <Text color="#6B6B6B" fontSize={"$sm"} marginLeft={"$1"}>
                7.8k
              </Text>
            </HStack>
            <HStack alignItems="center">
              <TfiComment size={18} />
              <Text color="#6B6B6B" fontSize={"$sm"} marginLeft={"$1"}>
                147
              </Text>
            </HStack>
          </HStack>
          <HStack space="2xl">
            <Text>
              <CiSaveDown2 size={20} />
            </Text>
            <Text>
              <BsPlayCircle size={20} />
            </Text>
            <Text>
              <CiShare1 size={20} />
            </Text>
            <Text>
              <BiDotsHorizontalRounded size={20} />
            </Text>
          </HStack>
        </HStack>

        <Box py="$10">
          <Image
            size="xs"
            alt="blog"
            h={453}
            w={680}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAHgWsHJc33lBdA2hq9iCu6kFsHtyFH19kog&usqp=CAU",
            }}
          />
        </Box>
        <Box>
          <Text fontSize={"$xl"} py="$2">
            The concept of habits became extremely popular in the recent years,
            mostly due to the personal development wave brought up by the Gen Z
            culture.
          </Text>
          <Text fontSize={"$xl"} py="$2">
            Also, due to the books that appeared in the recent years, out of
            which, the most famous and a favorite of mine, Atomic Habits.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default withAuth(page);
