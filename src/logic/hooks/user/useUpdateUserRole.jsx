import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserRoleAPI } from "../../services/apiUsers";
import { useToast } from "@chakra-ui/react";

export function useUpdateUserRole() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const { mutate: updateUserRole, isPending: isUpdatingUserRole } =
        useMutation({
            mutationFn: ({ userId, role }) => updateUserRoleAPI(userId, role),
            onSuccess: async (data) => {
                toast({
                    title: `${data.message}`,
                    position: "top",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                await queryClient.invalidateQueries({
                    queryKey: ["users"],
                });
            },
            onError: (err) => {
                toast({
                    title: "User role not updated!",
                    position: "top",
                    description: `${err}`,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            },
        });

    return { updateUserRole, isUpdatingUserRole };
}
