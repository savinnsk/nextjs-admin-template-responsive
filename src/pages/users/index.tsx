import { Header } from "@/components/header";
import { Pagination } from "@/components/pagination";
import { Sidebar } from "@/components/sidebar";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                New User
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width={8}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                {isWideVersion && <Th>account created at</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Administrator</Text>
                    <Text fontSize="sm" color="gray.300">
                      administrator@mail.com
                    </Text>
                  </Box>
                </Td>

                {isWideVersion && <Td>04 April, 2022</Td>}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      {isWideVersion ? "Edit" : ""}
                    </Button>
                  ) : (
                    ""
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination></Pagination>
        </Box>
      </Flex>
    </Flex>
  );
}
