import { FetchHookReturn } from "@/utils/fetch";
import { Major } from "./major";
import { Company } from "./company";

export type Job = {
  id: number;
  logo: string;
  employmentType: string;
  position: string;
  company: Company["id"];
  location: string;
  description: string;
  majors: Major["id"][];
  applied: number;
  capacity: number;
};

const dump: Job[] = [
  {
    id: 1,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Mechanical Engineer",
    company: 1,
    location: "Jakarta, Indonesia",
    description:
      "Design and optimize machinery used in industrial applications, collaborate with cross-functional teams.",
    majors: [1],
    applied: 10,
    capacity: 15,
  },
  {
    id: 2,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Civil Engineer",
    company: 2,
    location: "Bandung, Indonesia",
    description:
      "Plan and oversee construction projects, ensure structural integrity and compliance with local standards.",
    majors: [2],
    applied: 5,
    capacity: 10,
  },
  {
    id: 3,
    logo: "https://placehold.co/48",
    employmentType: "Part-time",
    position: "Electrical Technician",
    company: 3,
    location: "Surabaya, Indonesia",
    description:
      "Install, maintain, and troubleshoot electrical systems, work with power distribution networks.",
    majors: [3],
    applied: 8,
    capacity: 12,
  },
  {
    id: 4,
    logo: "https://placehold.co/48",
    employmentType: "Internship",
    position: "Software Developer Intern",
    company: 4,
    location: "Yogyakarta, Indonesia",
    description:
      "Assist in the development of web applications, work closely with the development team on various projects.",
    majors: [4],
    applied: 20,
    capacity: 25,
  },
  {
    id: 5,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Quality Control Engineer",
    company: 5,
    location: "Medan, Indonesia",
    description:
      "Monitor production processes to ensure quality standards in mechanical parts and systems.",
    majors: [1],
    applied: 7,
    capacity: 10,
  },
  {
    id: 6,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Structural Designer",
    company: 5,
    location: "Bandung, Indonesia",
    description:
      "Create and manage designs for civil structures, ensuring stability and sustainability.",
    majors: [2],
    applied: 12,
    capacity: 20,
  },
  {
    id: 7,
    logo: "https://placehold.co/48",
    employmentType: "Contract",
    position: "Field Technician",
    company: 6,
    location: "Semarang, Indonesia",
    description:
      "Manage fieldwork, conduct maintenance, and assist with electric systems in large facilities.",
    majors: [3],
    applied: 9,
    capacity: 15,
  },
  {
    id: 8,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Software Engineer",
    company: 7,
    location: "Jakarta, Indonesia",
    description:
      "Develop software solutions, work on web applications, and improve digital tools for clients.",
    majors: [4],
    applied: 18,
    capacity: 30,
  },
  {
    id: 9,
    logo: "https://placehold.co/48",
    employmentType: "Internship",
    position: "Machine Maintenance Intern",
    company: 8,
    location: "Surabaya, Indonesia",
    description:
      "Assist with machine upkeep and learn industrial maintenance techniques.",
    majors: [1],
    applied: 3,
    capacity: 5,
  },
  {
    id: 10,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Site Supervisor",
    company: 9,
    location: "Bali, Indonesia",
    description:
      "Supervise construction sites, ensuring project deadlines and safety standards are met.",
    majors: [2],
    applied: 14,
    capacity: 20,
  },
  {
    id: 11,
    logo: "https://placehold.co/48",
    employmentType: "Contract",
    position: "Electrical Engineer",
    company: 10,
    location: "Bandung, Indonesia",
    description:
      "Work on sustainable energy solutions and manage electric system designs.",
    majors: [3],
    applied: 10,
    capacity: 12,
  },
  {
    id: 12,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Frontend Developer",
    company: 11,
    location: "Makassar, Indonesia",
    description:
      "Build and improve user interfaces for client websites and web applications.",
    majors: [4],
    applied: 22,
    capacity: 28,
  },
  {
    id: 13,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Production Engineer",
    company: 12,
    location: "Jakarta, Indonesia",
    description:
      "Oversee production processes and ensure operational efficiency in mechanical parts manufacturing.",
    majors: [1],
    applied: 6,
    capacity: 8,
  },
  {
    id: 14,
    logo: "https://placehold.co/48",
    employmentType: "Full-time",
    position: "Construction Planner",
    company: 13,
    location: "Surabaya, Indonesia",
    description:
      "Develop construction plans and schedules, working closely with project managers.",
    majors: [2],
    applied: 8,
    capacity: 10,
  },
];

export function useJob(id: number): FetchHookReturn<Job | null> {
  return {
    data: dump.find((s) => s.id == id) ?? null,
    isLoading: false,
    isError: false,
  };
}

export function useJobs(): FetchHookReturn<Job[]> {
  return {
    data: dump,
    isLoading: false,
    isError: false,
  };
}

export function useJobsByMajor(majorId?: number): FetchHookReturn<Job[]> {
  if (majorId === undefined) {
    return {
      data: [],
      isLoading: true,
      isError: false,
    };
  }

  return {
    data: dump.filter((job) => job.majors.includes(majorId)),
    isLoading: false,
    isError: false,
  };
}

export function useJobsByCompany(companyId?: number): FetchHookReturn<Job[]> {
  if (companyId === undefined) {
    return {
      data: [],
      isLoading: true,
      isError: false,
    };
  }

  return {
    data: dump.filter((job) => job.company == companyId),
    isLoading: false,
    isError: false,
  };
}
