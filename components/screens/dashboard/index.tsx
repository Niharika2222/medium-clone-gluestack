import Card from "@/components/cards";
import StaffPick from "@/components/staffPick";
import SuggestedProfile from "@/components/suggestedProfile";
import {
  Center,
  Divider,
  Heading,
  Link,
  Pressable,
} from "@gluestack-ui/themed";
import { Box, HStack } from "@gluestack-ui/themed";
import React, { useState, useEffect } from "react";
import { staff } from "../../../utils/staff.json";
import { profile } from "../../../utils/profile.json";
import { topics } from "../../../utils/topics.json";
import RecommendedTopics from "@/components/recommendedTopics";
import withAuth from "@/hoc/withAuth";
import data from "../../../utils/blogs.json";
import { AnyARecord } from "dns";
import { useAuth } from "@/context/AuthProvider";

const DashboardPage = () => {
  const { blogs, filteredTag } = useAuth();

  return (
    <HStack w="$full">
      <Box w="$2/3" paddingLeft={"$40"}>
        <HStack>
          <Box w="$full" paddingTop={"$32"}>
            {blogs?.length === 0 ? (
              <Center mr="$24">No Blogs Found</Center>
            ) : (
              blogs?.map((blog: any) => {
                return (
                  <Box paddingBottom={"$16"}>
                    <Link href={`/blog/${blog.id}`}>
                      <Card
                        key={blog.id}
                        blogImage={blog.blogImage}
                        profileImage={blog.profileImage}
                        username={blog.name}
                        date={blog.date}
                        heading={blog.heading}
                        description={blog.description}
                        readTime={blog.readTime}
                        tag={blog.tag}
                      />
                    </Link>
                  </Box>
                );
              })
            )}
          </Box>
          <Divider
            orientation="vertical"
            //@ts-ignore
            minHeight={"90vh"}
          />
        </HStack>
      </Box>

      <Box w="$1/3">
        <Box py="$10" w="$full" px="$8">
          <Box>
            <Heading size="sm" fontWeight="$medium">
              Staff Picks
            </Heading>
            <Box>
              {staff.map((item) => {
                return (
                  <Box key={item.id} paddingTop={"$4"}>
                    <StaffPick
                      AuthorName={item.name}
                      description={item.description}
                      ProfileImage={item.profileImage}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box paddingTop={"$10"}>
            <Heading size="sm" fontWeight="$medium" paddingBottom={"$2"}>
              Recommended topics
            </Heading>
            <Box w="$80" flexDirection="row" flexWrap="wrap">
              {topics.map((item) => {
                return (
                  <Pressable
                    key={item.id}
                    marginRight="$2"
                    marginBottom="$2"
                    paddingTop={"$2"}
                    onPress={() => {
                      filteredTag(item?.topic);
                    }}
                  >
                    {" "}
                    <RecommendedTopics text={item.topic} />
                  </Pressable>
                );
              })}
            </Box>
          </Box>
          <Box paddingTop={"$10"}>
            <Heading size="sm" fontWeight="$medium">
              Who to follow
            </Heading>
            <Box>
              {profile.map((item) => {
                return (
                  <Box key={item.id} paddingTop={"$5"}>
                    <SuggestedProfile
                      profileImage={item.profileImage}
                      authorName={item.AuthorName}
                      description={item.description}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
};

export default withAuth(DashboardPage);
