import { useMutation, useQueryClient } from "@tanstack/react-query";
import privateAxios from "../../../api/privateAxios";

const useEnroll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData) => {
      const response = await privateAxios.post(
        "/mastercraft-enrollment/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enrollment"] });
    },
    onError: (error) => {
      const profileErrors = error?.response?.data?.profile;

      if (profileErrors && typeof profileErrors === "object") {
        Object.entries(profileErrors).forEach(([field, messages]) => {
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              console.error(`${field}: ${message}`);
              alert(`${field}: ${message}`);
            });
          }
        });
      } else if (error?.response?.data?.program_name) {
        console.error("Program name error:", error.response.data.program_name);
      } else {
        console.error("Enrollment failed with an unknown error", error);
      }
    },
  });
};

export default useEnroll;
