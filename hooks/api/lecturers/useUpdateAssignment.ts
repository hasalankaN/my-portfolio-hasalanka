import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api/api-endpoints";
import { queryKeys } from "@/lib/constants/queryKeys";

export interface UpdateAssignmentMaterial {
  file_url: string;
  file_name: string;
  file_type?: string;
}

export interface UpdateAssignmentPayload {
  tier_id?: string;
  title?: string;
  description?: string;
  due_date?: string;
  is_draft?: boolean;
  materials?: UpdateAssignmentMaterial[];
}

export function useUpdateAssignment(assignmentId: string | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UpdateAssignmentPayload) => {
      if (!assignmentId) throw new Error("Assignment ID is required");

      const response = await api.patch(
        API_ENDPOINTS.lecturer.UPDATE_ASSIGNMENT(assignmentId),
        payload
      );

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.lecturerAssignments] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.lecturerAssignmentById, assignmentId] });
      toast.success("Assignment updated successfully.");
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || "Failed to update assignment.");
    },
  });
}
