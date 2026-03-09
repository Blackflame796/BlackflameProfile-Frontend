import api from "./api";

export interface Technology {
  id: number;
  name: string;
  icon_url: string;
  description?: string;
  link?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  github?: string;
  website?: string;
  technologies?: Technology[];
}

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects/");
  return response.data;
};

export const getProfiles = async (): Promise<any[]> => {
  const response = await api.get("/profile/");
  return response.data;
};

export const getProject = async (id: number | string): Promise<Project> => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

export const getTechnologies = async (): Promise<Technology[]> => {
  const response = await api.get("/technologies/");
  return response.data;
};

export const getTechnology = async (id: number | string): Promise<Technology> => {
  const response = await api.get(`/technologies/${id}`);
  return response.data;
};
