import { FetchHookReturn } from "@/utils/fetch";
import { Major } from "./major";

export type Company = {
  id: number;
  logo: string;
  name: string;
  description: string;
  majors: Major["id"][];
};

const dump: Company[] = [
  {
    id: 1,
    logo: "https://placehold.co/48",
    name: "Machinery Corp.",
    description:
      "A leading company specializing in industrial machinery and engineering solutions.",
    majors: [1],
  },
  {
    id: 2,
    logo: "https://placehold.co/48",
    name: "BuildRight Constructions",
    description:
      "Experts in civil engineering and large-scale construction projects, building the future.",
    majors: [2],
  },
  {
    id: 3,
    logo: "https://placehold.co/48",
    name: "PowerWorks Ltd.",
    description:
      "Provider of innovative solutions in power distribution and electrical engineering.",
    majors: [3],
  },
  {
    id: 4,
    logo: "https://placehold.co/48",
    name: "Innovative Solutions",
    description:
      "A software development firm focusing on cutting-edge technologies and digital transformation.",
    majors: [4],
  },
  {
    id: 5,
    logo: "https://placehold.co/48",
    name: "Skyline Builders",
    description:
      "Pioneers in sustainable building designs and urban development projects.",
    majors: [2],
  },
  {
    id: 6,
    logo: "https://placehold.co/48",
    name: "ElectroTechnics Inc.",
    description:
      "Specializes in electrical systems for large facilities and industrial applications.",
    majors: [3],
  },
  {
    id: 7,
    logo: "https://placehold.co/48",
    name: "CodeLab Solutions",
    description:
      "Offers full-stack software solutions for businesses and startups.",
    majors: [4],
  },
  {
    id: 8,
    logo: "https://placehold.co/48",
    name: "Industrial Maintenance Co.",
    description: "Leading in machine maintenance for manufacturing industries.",
    majors: [1],
  },
  {
    id: 9,
    logo: "https://placehold.co/48",
    name: "Greenfield Constructions",
    description:
      "A construction firm with a focus on green and eco-friendly building practices.",
    majors: [2],
  },
  {
    id: 10,
    logo: "https://placehold.co/48",
    name: "BrightEnergy",
    description:
      "Innovative energy solutions focused on electrical engineering and sustainability.",
    majors: [3],
  },
  {
    id: 11,
    logo: "https://placehold.co/48",
    name: "Pixel Perfect Ltd.",
    description:
      "Pixel Perfect Ltd delivers precise, pixel-perfect web design and development, creating responsive digital solutions that elevate user experience.",
    majors: [4],
  },
  {
    id: 12,
    logo: "https://placehold.co/48",
    name: "Automated Industries",
    description:
      "Automad Industries delivers advanced automation solutions to boost efficiency and precision in industrial operations.",
    majors: [1],
  },
  {
    id: 13,
    logo: "https://placehold.co/48",
    name: "UrbanPlan",
    description:
      "UrbanPlan designs smart, sustainable urban spaces to enhance modern living and connectivity in cities.",
    majors: [2],
  },
];

export function useCompany(
  id?: Company["id"],
): FetchHookReturn<Company | null> {
  if (id === undefined) {
    return {
      data: null,
      isLoading: true,
      isError: false,
    };
  }

  return {
    data: dump.find((s) => s.id == id) ?? null,
    isLoading: false,
    isError: false,
  };
}

export function useCompanies(): FetchHookReturn<Company[]> {
  return {
    data: dump,
    isLoading: false,
    isError: false,
  };
}

export function useCompaniesByMajor(
  majorId?: Major["id"],
): FetchHookReturn<Company[]> {
  if (majorId === undefined) {
    return {
      data: [],
      isLoading: true,
      isError: false,
    };
  }

  return {
    data: dump.filter((company) => company.majors.includes(majorId)),
    isLoading: false,
    isError: false,
  };
}
