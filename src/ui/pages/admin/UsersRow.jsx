import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Avatar,
    Button,
    Flex,
    Heading,
    Icon,
    IconButton,
    Td,
    Tooltip,
    Tr,
    useBoolean,
    useDisclosure,
} from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDeleteUser } from "../../../logic/hooks/user/useDeleteUser";
import { useRef } from "react";
import UserProfileModal from "./UserProfileModal";
import AlerPopUp from "../../components/AlerPopUp";

const UsersRow = ({ user }) => {
    const { deleteUser } = useDeleteUser();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isOpenDelete,
        onOpen: onOpenDelete,
        onClose: onCloseDelete,
    } = useDisclosure();

    async function handleDelete(userId) {
        await deleteUser(userId);
    }

    return (
        <Tr borderBottom="1px" borderColor="darkslategray">
            {isOpen && (
                <UserProfileModal
                    user={user}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            )}
            <Td>
                <Flex align="center">
                    <Avatar size="sm" mr={2} src="" />
                    <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                            {user.username}
                        </Heading>
                    </Flex>
                </Flex>
            </Td>
            <Td>{user.email}</Td>
            <Td py="-2.5em">
                <Tooltip
                    label="View"
                    fontSize="md"
                    offset={[0, -70]}
                    closeOnClick
                >
                    <IconButton
                        icon={<FiEye />}
                        colorScheme="green"
                        bg="green.400"
                        size="md"
                        cursor="pointer"
                        onClick={onOpen}
                    />
                </Tooltip>
                &nbsp;&nbsp;
                <Tooltip
                    label="Edit"
                    fontSize="md"
                    offset={[0, -70]}
                    closeOnClick
                >
                    <IconButton
                        icon={<FiEdit />}
                        colorScheme="blue"
                        bg="blue.400"
                        size="md"
                        cursor="pointer"
                        onClick={() => {}}
                    />
                </Tooltip>
                &nbsp;&nbsp;
                <Tooltip
                    label="Delete"
                    fontSize="md"
                    offset={[0, -70]}
                    closeOnClick
                >
                    <IconButton
                        icon={<FiTrash2 />}
                        colorScheme="red"
                        bg="red.400"
                        size="md"
                        cursor="pointer"
                        onClick={onOpenDelete}
                    />
                </Tooltip>
                &nbsp;
                <AlerPopUp
                    isOpen={isOpenDelete}
                    onClose={onCloseDelete}
                    onClick={() => {
                        handleDelete;
                        onCloseDelete();
                    }}
                    message={"User"}
                />
            </Td>
        </Tr>
    );
};
export default UsersRow;
