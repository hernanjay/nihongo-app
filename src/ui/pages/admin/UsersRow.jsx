import {
    Avatar,
    Flex,
    Heading,
    IconButton,
    Td,
    Tooltip,
    Tr,
    useDisclosure,
} from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { useDeleteUser } from "../../../logic/hooks/user/useDeleteUser";
import UserProfileModal from "./UserProfileModal";
import AlerPopUp from "../../components/AlerPopUp";
import { useState } from "react";

const UsersRow = ({ user }) => {
    const { deleteUser } = useDeleteUser();
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isOpenDelete,
        onOpen: onOpenDelete,
        onClose: onCloseDelete,
    } = useDisclosure();

    function handleDelete(userId) {
        deleteUser({ userId });
    }

    return (
        <Tr borderBottom="1px" borderColor="darkslategray">
            {(isOpen || isView || isEdit) && (
                <UserProfileModal
                    user={user}
                    isOpen={isOpen}
                    onClose={onClose}
                    isView={isView}
                    setIsView={setIsView}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
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
                        onClick={() => {
                            onOpen();
                            setIsView(true);
                        }}
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
                        onClick={() => {
                            onOpen();
                            setIsEdit(true);
                        }}
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
                        handleDelete(user._id);
                        onCloseDelete();
                    }}
                    message={"User"}
                />
            </Td>
        </Tr>
    );
};
export default UsersRow;
