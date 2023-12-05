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
  Td,
  Tr,
  useBoolean,
  useDisclosure,
} from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useDeleteUser } from "../../../logic/hooks/user/useDeleteUser";
import { useRef } from "react";
import UserProfileModal from "./UserProfileModal";

const UsersRow = ({ user }) => {
  const { deleteUser } = useDeleteUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isVisible, setIsVisible] = useBoolean();
  const cancelRef = useRef();

  async function handleSubmit(userId) {
    await deleteUser(userId);
  }

  return (
    <Tr borderBottom="1px" borderColor="darkslategray">
      <UserProfileModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        user={user}
      />
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
        <Link>
          <Icon as={FiEye} fontSize="lg" mr="0.5em" onClick={setIsVisible.on} />
        </Link>
        <Link>
          <Icon as={FiEdit} fontSize="lg" mr="0.5em" />
        </Link>

        <Link>
          <Icon as={FiTrash} onClick={onOpen} fontSize="lg" />

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete User?
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You can't undo this action afterwards.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() => handleSubmit(user._id)}
                    ml={3}
                  >
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Link>
      </Td>
    </Tr>
  );
};
export default UsersRow;
