import dynamic from "next/dynamic";

import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";

import { Chart } from "@/components/chart";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" color="gray.50" bg="gray.900">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        {
          //flex 1 to fill the width aside sidebar
          //SimpleGrid automatize the responsively
        }
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box p="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              new accounts this week
            </Text>
            <Chart type="area" height={160} width={"100%"} />
          </Box>

          <Box p="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              info
            </Text>
            <Chart type="area" height={160} width={"100%"} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
