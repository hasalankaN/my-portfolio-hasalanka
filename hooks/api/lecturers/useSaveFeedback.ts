import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api/api-endpoints";
import { queryKeys } from "@/lib/constants/queryKeys";

export interface SaveFeedbackPayload {
  score: number;
  feedback_text: string;
  feedback_file_url?: string;
  feedback_file_name?: string;
}

export function useSaveFeedback(submissionId: string | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: SaveFeedbackPayload) => {
      if (!submissionId) throw new Error("Submission ID is required");

      const response = await api.post(
        API_ENDPOINTS.lecturer.SAVE_FEEDBACK(submissionId),
        payload
      );

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.lecturerSubmissions] });
      toast.success("Feedback saved successfully.");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to save feedback.");
    },
  });
}
