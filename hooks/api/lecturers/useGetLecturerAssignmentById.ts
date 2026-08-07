import { useQuery } from "@tanstack/react-query";

import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api/api-endpoints";
import { queryKeys } from "@/lib/constants/queryKeys";

export interface AssignmentGuideline {
  id: string;
  assignment_id: string;
  file_url: string;
  file_name: string;
  file_type: string | null;
  created_at: string;
}

export interface AssignmentMetrics {
  total_enrolled: number;
  total_submitted: number;
  total_pending_grading: number;
  total_graded: number;
  total_not_submitted: number;
  completion_rate: string;
}

export interface LecturerAssignmentDetail {
  id: string;
  tier_id: string;
  title: string;
  description: string | null;
  due_date: string;
  created_at: string;
  is_draft: boolean;
  course_id: string | null;
  batch_id: string | null;
  lesson_title: string;
  guidelines: AssignmentGuideline[];
  metrics: AssignmentMetrics;
}

export function useGetLecturerAssignmentById(assignmentId: string | null) {
  return useQuery({
    queryKey: [queryKeys.lecturerAssignmentById, assignmentId],
    queryFn: async () => {
      if (!assignmentId) throw new Error("Assignment ID is required");

      const response = await api.get<{ data: LecturerAssignmentDetail }>(
        API_ENDPOINTS.lecturer.ASSIGNMENT_BY_ID(assignmentId)
      );

      return response.data.data;
    },
    enabled: !!assignmentId,
  });
}
