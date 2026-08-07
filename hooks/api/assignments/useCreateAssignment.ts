import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api/api-endpoints";
import { queryKeys } from "@/lib/constants/queryKeys";
import type { CommonResponseDataType } from "@/types/common";

interface MaterialPayload {
  file_url: string;
  file_name: string;
  file_type: string;
}

export interface CreateAssignmentPayload {
  tier_id: string;
  title: string;
  description: string;
  due_date: string;
  is_draft: boolean;
  materials: MaterialPayload[];
}

export const useCreateAssignment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateAssignmentPayload) => {
      const { data } = await api.post<CommonResponseDataType<any>>(
        API_ENDPOINTS.lecturer.ASSIGNMENTS_LIST,
        payload
      );

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.lecturerAssignments] });
      queryClient.invalidateQueries({ queryKey: [queryKeys.lecturerSubmissions] });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "Failed to create assignment");
    },
  });
};
