import { FetchHookReturn } from "@/utils/fetch";
import { JobCategory } from "./job-category";

export type Job = {
  id: number;
  logo: string;
  employmentType: string;
  position: string;
  company: string;
  location: string;
  description: string;
  categories: Pick<JobCategory, "id" | "name" | "color">[];
  applied: number;
  capacity: number;
};

const dump: Job[] = [
  {
    id: 1,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 3,
    capacity: 10,
  },
  {
    id: 2,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    description: "Dropbox is looking for Brand Designer to help the team",
    categories: [
      {
        id: 1,
        name: "Design",
        color: "green",
      },
      {
        id: 7,
        name: "Business",
        color: "purple",
      },
    ],
    applied: 7,
    capacity: 10,
  },
  {
    id: 3,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
    ],
    applied: 6,
    capacity: 10,
  },
  {
    id: 4,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team design",
    categories: [
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 8,
    capacity: 10,
  },
  {
    id: 5,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 9,
    capacity: 10,
  },
  {
    id: 6,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop",
    categories: [
      {
        id: 1,
        name: "Design",
        color: "green",
      },
      {
        id: 7,
        name: "Business",
        color: "purple",
      },
    ],
    applied: 9,
    capacity: 10,
  },
  {
    id: 7,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
    ],
    applied: 3,
    capacity: 10,
  },
  {
    id: 8,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team design",
    categories: [
      {
        id: 5,
        name: "Technology",
        color: "red",
      },
    ],
    applied: 0,
    capacity: 10,
  },
  {
    id: 9,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    description: "Nomad is looking for Social Media Assistant to help team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 4,
    capacity: 10,
  },
  {
    id: 10,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    description: "Netlify is looking for Social Media Assistant to help team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 8,
    capacity: 10,
  },
  {
    id: 11,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Brand Designer",
    company: "Maze",
    location: "San Francisco, USA",
    description: "Maze is looking for Brand Designer to help the team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 7,
    capacity: 10,
  },
  {
    id: 12,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    description:
      "Terraform is looking for Interactive Developer to help the team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 4,
    capacity: 10,
  },
  {
    id: 13,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    description:
      "Udacity is looking for Interactive Developer to help the team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 10,
    capacity: 10,
  },
  {
    id: 14,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    description:
      "Packer is looking for Human Resource Manager to help the team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 9,
    capacity: 10,
  },
  {
    id: 15,
    logo: "https://placehold.co/48",
    employmentType: "Full Time",
    position: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    description:
      "Webflow is looking for Human Resource Manager to help the team",
    categories: [
      {
        id: 3,
        name: "Marketing",
        color: "yellow",
      },
      {
        id: 1,
        name: "Design",
        color: "green",
      },
    ],
    applied: 6,
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
