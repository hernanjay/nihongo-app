import { Avatar, Flex, Heading, Icon, Td, Text, Tr } from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

const UsersRow = ({ user }) => {
    return (
        <Tr borderBottom="1px" borderColor="darkslategray">
            <Td>
                <Flex align="center">
                    <Avatar size="sm" mr={2} src="" />
                    <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                            {user.username}
                        </Heading>
                        {/* <Text fontSize="sm" color="gray">Name of Student</Text> */}
                    </Flex>
                </Flex>
            </Td>
            <Td>{user.email}</Td>
            <Td>N1</Td>
            <Td isNumeric>
                <Text fontWeight="bold" display="inline-table">
                    99%
                </Text>
            </Td>
            <Td>
                <Link>
                    <Icon as={FiEye} fontSize="lg" />
                    &nbsp;&nbsp;
                </Link>
                <Link>
                    <Icon as={FiEdit} fontSize="lg" />
                    &nbsp;&nbsp;
                </Link>
                <Link>
                    <Icon
                        as={FiTrash}
                        onClick={() => this.props.onDelete(this.props.id)}
                        fontSize="lg"
                    />
                    &nbsp;
                </Link>
            </Td>
        </Tr>
    );
};
export default UsersRow;
