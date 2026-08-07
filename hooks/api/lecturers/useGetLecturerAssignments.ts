import { useQuery } from "@tanstack/react-query";

import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api/api-endpoints";
import { queryKeys } from "@/lib/constants/queryKeys";

export interface LecturerAssignmentItem {
  id: string;
  title: string;
  due_date: string;
  created_at: string;
  is_draft: boolean;
  lesson_title: string;
  course_name: string | null;
  batch_name: string | null;
  type: string;
  source_name: string;
  total_enrolled: number;
  total_submitted: number;
  completion_rate: string;
}

export interface PaginatedAssignmentsResponse {
  message: string;
  data: LecturerAssignmentItem[];
  meta: {
    total: number;
    page: number;
    limit: number;
    total_pages: number;
  };
}

export function useGetLecturerAssignments(params?: { 
  page?: number; 
  limit?: number; 
  search?: string; 
  type?: string 
}) {
  return useQuery({
    queryKey: [queryKeys.lecturerAssignments, params],
    queryFn: async () => {
      const response = await api.get<{ data: PaginatedAssignmentsResponse }>(
        API_ENDPOINTS.lecturer.ASSIGNMENTS_LIST,
        { params }
      );

      return response.data.data;
    },
  });
}
