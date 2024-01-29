import { IconButton, Td, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";
import UserProfileModal from "./UserProfileModal";
import { useState } from "react";
import { FiEdit, FiEye } from "react-icons/fi";

function StudentRow({ user }) {
    const [isView, setIsView] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Tr key={user.id}>
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
            <Td textAlign="center">{user.username}</Td>
            <Td textAlign="center">{user.email}</Td>
            {/* <Td>{user.level}</Td> */}
            <Td textAlign="center">
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
            </Td>
        </Tr>
    );
}
export default StudentRow;
