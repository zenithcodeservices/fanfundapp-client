import {
  Center,
  Stack,
  Flex,
  useColorModeValue,
  Image,
  Heading,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";

export default function CarouselCard() {
  return (
    <Center py={6}>
      <Stack
        w={{ md: "100%" }}
        height={{ sm: "auto", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
            }
          />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            Project Name
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            @social_media
          </Text>
          <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
            Description of project goes here blah blah blah
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
              #art
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
              #rnb
            </Badge>
            <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
              #sample
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              More
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Share
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
}
