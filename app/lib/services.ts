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
  try {
    const response = await api.get("/projects/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
};

export const getProfiles = async (): Promise<any[]> => {
  try {
    const response = await api.get("/profile/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch profiles:", error);
    return [];
  }
};

export const getProject = async (id: number | string): Promise<Project | null> => {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch project ${id}:`, error);
    return null;
  }
};

export const getTechnologies = async (): Promise<Technology[]> => {
  try {
    const response = await api.get("/technologies/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch technologies:", error);
    return [];
  }
};

export const getTechnology = async (id: number | string): Promise<Technology | null> => {
  try {
    const response = await api.get(`/technologies/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch technology ${id}:`, error);
    return null;
  }
};
