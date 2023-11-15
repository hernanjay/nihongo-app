import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  IconButton,
  ListItem,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Userlist() {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Box pt={"10vw"} pb={"5vw"}>
        <Container maxW="container.xl" p="5" borderRadius="10" bg={"white"}>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>3rd Column</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Code Here */}
                {users.map((user, index) => {
                  return (
                    <Tr>
                      <Td isNumeric>{index}</Td>
                      <Td>user</Td>
                      <Td>dummy</Td>
                      <Td>
                        <IconButton icon={<DeleteIcon />} onClick={() => {}} />
                      </Td>
                    </Tr>
                  );
                })}
                {/* Code Here */}
              </Tbody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
}

export default Userlist;
