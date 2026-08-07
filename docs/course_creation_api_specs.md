# API Specification: Create Course

This document outlines the required data structure for the Course Creation API, based on the current frontend implementation and validation schemas.

## Endpoint Overview
- **Method**: POST
- **URL**: `/api/v1/admin/courses` (TBD)
- **Content-Type**: `application/json`

## Request Payload Structure

The payload is a combination of General Details, Fee Details, and Commission Details.

```json
{
  "general_details": {
    "name": "Diploma in Computing – Batch 02",
    "staff_members": ["uuid-1", "uuid-2"],
    "has_assessment": true,
    "course_type": "Diploma",
    "start_date": "2024-04-01T00:00:00.000Z",
    "end_date": "2024-10-01T00:00:00.000Z",
    "certificates": ["cert-uuid-1"],
    "category_id": "cat-uuid-1",
    "lecturer_id": "lec-uuid-1",
    "level": "Beginner",
    "language": "English",
    "lesson_duration_hours": 2,
    "allow_lecturer_to_manage": true,
    "hierarchy_type": "3 Tiers",
    "batch_id": "batch-uuid-1",
    "short_description": "Short summary of the course.",
    "long_description": "<h1>Detailed content...</h1>",
    "cover_image_url": "https://...",
    "intro_video_url": "https://..."
  },
  "fee_details": {
    "pricing_option": "Paid", 
    "fees": [
      {
        "amount": 50000.00,
        "duration_years": 1
      }
    ],
    "installments_enabled": true,
    "number_of_installments": 3,
    "installment_plans": [
      {
        "description": "First Installment",
        "amount": 20000.00
      },
      {
        "description": "Second Installment",
        "amount": 15000.00
      },
      {
        "description": "Third Installment",
        "amount": 15000.00
      }
    ]
  },
  "commission_details": {
    "referral": {
      "type": "Percentage",
      "value": 10.00,
      "team_value": 2.00
    },
    "lecturer": {
      "type": "Fixed",
      "value": 5000.00
    },
    "staff": {
      "type": "Percentage",
      "value": 5.00
    },
    "branch_staff": {
      "type": "Fixed",
      "value": 1000.00
    }
  }
}
```

## Data Fields & Validation Rules

### 1. General Details (`general_details`)

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | String | Yes | Name of the course. |
| `staff_members` | String[] | Yes | Array of User IDs (Staff) assigned to the course. |
| `has_assessment` | Boolean | No | Whether the course has an assessment. |
| `course_type` | String | No | Enum: Workshop, Certificate, Diploma, HND, Degree, School, University, Exam Prep. |
| `start_date` | DateTime | No | Course start date. |
| `end_date` | DateTime | No | Course end date. |
| `certificates` | String[] | Yes | Array of Certificate Template IDs. |
| `category_id` | String | Yes | Course Category ID. |
| `lecturer_id` | String | Yes | User ID of the primary lecturer. |
| `level` | String | Yes | Enum: Beginner, Intermediate, Advanced, General. |
| `language` | String | Yes | Enum: English, Sinhala, Tamil. |
| `lesson_duration_hours` | Number | No | Duration per lesson in hours. |
| `allow_lecturer_to_manage` | Boolean | Yes | Whether the lecturer is allowed to manage course materials. |
| `hierarchy_type` | String | Yes | Enum: 3 Tiers, 4 Tiers, 5 Tiers. |
| `batch_id` | String | No | Batch UUID. |
| `short_description` | String | No | Plain text short summary. |
| `long_description` | String (HTML) | Yes | Rich text content for the course. |
| `cover_image_url` | String | No* | URL to the uploaded cover image. |
| `intro_video_url` | String | No* | URL to the uploaded introduction video. |

### 2. Fee Details (`fee_details`)

- **Rule**: If `pricing_option` is "Paid", at least one item in `fees` is required.
- **Rule**: If `installments_enabled` is true, `number_of_installments` must be between 2 and 6, and `installment_plans` must be populated.

| Field | Type | Description |
| :--- | :--- | :--- |
| `pricing_option` | String | Enum: Paid, Free. |
| `fees` | Array | Objects containing `amount` (Number) and `duration_years` (Number). |
| `installments_enabled` | Boolean | Whether to allow installment payments. |
| `number_of_installments` | Number | Max 6. |
| `installment_plans` | Array | Objects containing `description` (String) and `amount` (Number). |

### 3. Commission Details (`commission_details`)

Common structure for each commission type:
- `type`: String (Enum: Percentage, Fixed)
- `value`: Number

| Field | Description |
| :--- | :--- |
| `referral` | Includes `type`, `value`, and `team_value`. |
| `lecturer` | Includes `type` and `value`. |
| `staff` | Commission for office staff per enrollment. |
| `branch_staff` | Commission for branch staff per enrollment. |

---
**Notes for Backend**:
- Please confirm the image/video upload strategy (Direct upload to API or S3 Presigned URLs).
- Ensure consistency in snake_case naming for the API fields.

## Sample List Response (GET courses)

Below is an example response returned by the courses list endpoint (used by `useGetCourses.ts`). Note: several fields in the response may be null — the frontend must handle these gracefully.

```json
{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "results": [
      {
        "id": "c52c83ca-6e73-4cc6-b98b-ec6e5f974dff",
        "custom_id": "COURSE-2026-471094",
        "name": "Cyber Security: From Beginner to Expert",
        "short_description": "Cybersecurity made easy for absolute beginners - learn from an industry expert with PhD",
        "cover_image_url": "https://storage.googleapis.com/binzo-bucket/assets/9070e6cd-8b48-4ea7-b7ac-f21b48a4a093.jpg",
        "type": "CERTIFICATE",
        "level": "INTERMEDIATE",
        "language": "ENGLISH",
        "start_date": "2026-05-11",
        "end_date": "2026-05-30",
        "status": "ACTIVE",
        "category_id": "9e4e686d-7959-4007-b2f4-9b87fd2cd6bb",
        "category_name": "ICT",
        "lecturer_id": "006065fd-d06d-4503-a0ad-96a44c31faa0",
        "lecturer_name": null,
        "batch_id": "fef4c1f2-e32c-4fb5-bfff-0c02b8052d17",
        "batch_name": "BSc (Hons) Software Engineering",
        "updated_at": "2026-05-11T03:44:54.980Z",
        "total_enroll_count": "1",
        "staff_member_ids": [
          "c965347c-285f-4634-abcb-977e92810b9a"
        ],
        "staff_members": [
          {
            "id": "c965347c-285f-4634-abcb-977e92810b9a",
            "name": null
          }
        ]
      },
      {
        "id": "49f57c64-6585-43ad-b73b-5f5c2b821dae",
        "custom_id": "COURSE-2026-765163",
        "name": "BSc (Hons) Software Engineering - Full Stack Development",
        "short_description": "Lorem ipsum dolor sit amet consectetur. Quis tortor porttitor eget senectus. Non turpis duis ac proin turpis gravida. ",
        "cover_image_url": "https://storage.googleapis.com/binzo-bucket/assets/3630c7a1-4fd3-49bd-9897-d883eca5c33f.jpg",
        "type": "DEGREE",
        "level": "ADVANCED",
        "language": "ENGLISH",
        "start_date": "2026-04-21",
        "end_date": "2028-06-21",
        "status": "ACTIVE",
        "category_id": "9e4e686d-7959-4007-b2f4-9b87fd2cd6bb",
        "category_name": "ICT",
        "lecturer_id": "86195abf-6d7c-4b06-8f57-3221640b2872",
        "lecturer_name": null,
        "batch_id": "fef4c1f2-e32c-4fb5-bfff-0c02b8052d17",
        "batch_name": "BSc (Hons) Software Engineering",
        "updated_at": "2026-04-21T09:52:43.513Z",
        "total_enroll_count": "4",
        "staff_member_ids": [
          "2a3b0b80-f8c3-4b07-9136-b3961b79da06"
        ],
        "staff_members": [
          {
            "id": "2a3b0b80-f8c3-4b07-9136-b3961b79da06",
            "name": null
          }
        ]
      }
    ],
    "totalResults": 7,
    "page": 1,
    "size": 10,
    "totalPages": 1,
    "isFirstPage": true,
    "isLastPage": true
  }
}
```

Notes about nullable fields in the response:

- `lecturer_name` can be `null` when the lecturer profile is unavailable or name is not set.
- `short_description` may be `null` for some courses.
- `batch_id` / `batch_name` may be `null` when a course is not tied to a batch.
- In `staff_members`, the `name` property can be `null` (only `id` may be populated).

Frontend guidance:

- Treat these fields as optional and defensively check for `null` before rendering.
- Prefer fallbacks like `"—"` or `"No lecturer"` when values are missing.
