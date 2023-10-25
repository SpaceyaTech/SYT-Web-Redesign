import axios from "axios";

interface Resource {
  id: number;
  name: string;
  description: string;
}

const fetchResourcesData = async () => {
  try {
    const response = await axios.get<Resource[]>(`${process.env.REACT_APP_API_BASE_URL}/resourcetypes/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching resources:", error);
    throw error;
  }
}

export { fetchResourcesData };