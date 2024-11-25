import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Progress,
  SkeletonText,
} from "@chakra-ui/react";
import { greenColor, lightColor } from "../../../constants";
import usePostAnalysis from "../hooks/usePostAnalysis";

const PostAnalysisCard = () => {
  let { data, isLoading } = usePostAnalysis();

  return (
    <Box h={"full"} p={7} borderRadius={10} bg={greenColor}>
      {data.length > 0 && !isLoading && (
        <Stack direction="column" justifyContent={"flex-start"} spacing={10}>
          <Box>
            <Heading
              textAlign={"left"}
              fontWeight={"semibold"}
              color={lightColor}
            >
              {data[0].totalPostCount}
            </Heading>
            <Text textAlign={"left"} color={lightColor}>
              Total Posts
            </Text>
          </Box>
          <Box textAlign={"left"}>
            <Text color={lightColor}>Server Information</Text>
            <Box>
              <Flex justifyContent={"space-between"}>
                <Heading
                  fontWeight={"semibold"}
                  fontSize={15}
                  color={lightColor}
                >
                  Media
                </Heading>
                <Heading
                  fontWeight={"semibold"}
                  fontSize={15}
                  color={lightColor}
                >
                  {Math.round(
                    (data[0].mediaPostCount / data[0].activePostCount) * 100
                  )}
                  %
                </Heading>
              </Flex>
              <Progress
                borderRadius={8}
                my={2}
                value={(data[0].mediaPostCount / data[0].activePostCount) * 100}
                size="sm"
                colorScheme={"yellow"}
              />
            </Box>
            <Box>
              <Flex justifyContent={"space-between"}>
                <Heading
                  fontWeight={"semibold"}
                  fontSize={15}
                  color={lightColor}
                >
                  Text Posts
                </Heading>
                <Heading
                  fontWeight={"semibold"}
                  fontSize={15}
                  color={lightColor}
                >
                  {(data[0].textPostCount / data[0].activePostCount) * 100}%
                </Heading>
              </Flex>
              <Progress
                borderRadius={8}
                mt={2}
                value={(data[0].textPostCount / data[0].activePostCount) * 100}
                size="sm"
                colorScheme={"yellow"}
              />
            </Box>
          </Box>
        </Stack>
      )}
      {isLoading && (
        <Box>
          <SkeletonText mt="2" noOfLines={1} spacing="4" skeletonHeight="2" />
          <Box mt={130} py="3" w={"100%"}>
            <SkeletonText mt="2" noOfLines={2} spacing="4" skeletonHeight="2" />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PostAnalysisCard;
