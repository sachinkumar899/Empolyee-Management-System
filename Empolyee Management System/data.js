export const initialEmployees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    department: "Engineering",
    role: "Frontend Developer",
    status: "Active",
    joiningDate: "2025-02-10",
  },

  {
    id: 2,
    name: "Priya Singh",
    email: "priya@example.com",
    department: "Design",
    role: "UI/UX Designer",
    status: "Active",
    joiningDate: "2024-11-18",
  },

  {
    id: 3,
    name: "Rohan Verma",
    email: "rohan@example.com",
    department: "Engineering",
    role: "Backend Developer",
    status: "On Leave",
    joiningDate: "2025-06-02",
  },

  {
    id: 4,
    name: "Neha Patel",
    email: "neha@example.com",
    department: "HR",
    role: "HR Executive",
    status: "Active",
    joiningDate: "2024-08-21",
  },

  {
    id: 5,
    name: "Sachin Kumar",
    email: "sachinpratapyadav3@gmail.com",
    department: "Finance",
    role: "Financial Analyst",
    status: "Active",
    joiningDate: "2025-01-06",
  },
];

export const initialLeaves = [
  {
    id: 1,
    employee: "Rohan Verma",
    type: "Sick Leave",
    from: "2026-09-29",
    to: "2026-09-30",
    reason: "Medical appointment",
    status: "Pending",
  },

  {
    id: 2,
    employee: "Priya Singh",
    type: "Casual Leave",
    from: "2026-10-03",
    to: "2026-10-04",
    reason: "Personal work",
    status: "Pending",
  },

  {
    id: 3,
    employee: "Vikram Rao",
    type: "Annual Leave",
    from: "2026-10-10",
    to: "2026-10-12",
    reason: "Family trip",
    status: "Approved",
  },
];