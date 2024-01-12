import { useToast } from "@chakra-ui/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserAPI } from "../../services/apiUsers";

export function useDeleteUser() {
    const queryClient = useQueryClient();
    const toast = useToast();

    const { mutate: deleteUser, isPending: isDeletingUser } = useMutation({
        mutationFn: ({ userId }) => deleteUserAPI(userId),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["users"] });

            toast({
                title: "Deleted Succesfully!",
                position: "top",
                status: "success",
                duration: 2500,
                isClosable: true,
            });
        },
        onError: (err) => {
            toast({
                title: "Deleting Failed",
                position: "top",
                description: `${err.message}`,
                status: "error",
                duration: 2500,
                isClosable: true,
            });
        },
    });

    return { deleteUser, isDeletingUser };
}
