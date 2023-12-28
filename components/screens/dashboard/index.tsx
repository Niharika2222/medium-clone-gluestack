import Card from "@/components/cards";
import StaffPick from "@/components/staffPick";
import SuggestedProfile from "@/components/suggestedProfile";
import { Divider, Heading, Link } from "@gluestack-ui/themed";
import { Box, HStack } from "@gluestack-ui/themed";
import React from "react";
import { blogs } from "../../../utils/blogs.json";
import { staff } from "../../../utils/staff.json";
import { profile } from "../../../utils/profile.json";
import { topics } from "../../../utils/topics.json";
import RecommendedTopics from "@/components/recommendedTopics";
import withAuth from "@/hoc/withAuth";

const DashboardPage = () => {
  return (
    <HStack w="$full">
      <Box w="$2/3" paddingLeft={"$40"}>
        <HStack>
          <Box w="$full" paddingTop={"$32"}>
            {blogs.map((blog) => {
              return (
                <Box paddingBottom={"$16"}>
                  <Link href={`/blog/${blog.id}`}>
                    <Card
                      key={blog.id}
                      blogImage={blog.blogImage}
                      profileImage={blog.profileImage}
                    />
                  </Link>
                </Box>
              );
            })}
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
                  <Box
                    key={item.id}
                    marginRight="$2"
                    marginBottom="$2"
                    paddingTop={"$2"}
                  >
                    <RecommendedTopics text={item.topic} />
                  </Box>
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
