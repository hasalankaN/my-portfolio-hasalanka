import { useQuery } from "@tanstack/react-query";

import api from "@/lib/axios";
import { API_ENDPOINTS } from "@/lib/api/api-endpoints";
import { queryKeys } from "@/lib/constants/queryKeys";

export interface AssignmentSubmissionRosterItem {
  student_id: string;
  student_name: string;
  student_email: string;
  submission_id: string | null;
  status: "GRADED" | "SUBMITTED_FOR_GRADING" | "SUBMITTED_LATE" | null;
  submitted_at: string | null;
  grade: string | null;
  is_late: boolean | null;
}

export function useGetLecturerAssignmentSubmissions(assignmentId: string | null) {
  return useQuery({
    queryKey: [queryKeys.lecturerAssignmentSubmissions, assignmentId],
    queryFn: async () => {
      if (!assignmentId) throw new Error("Assignment ID is required");

      const response = await api.get<{ data: AssignmentSubmissionRosterItem[] }>(
        API_ENDPOINTS.lecturer.ASSIGNMENT_SUBMISSIONS(assignmentId)
      );

      return response.data.data;
    },
    enabled: !!assignmentId,
  });
}
