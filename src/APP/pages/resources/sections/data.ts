interface Resource {
  id: number;
  name: string;
  description: string;
}

const fetchResourcesData = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/resourcetypes/`);
    const data: Resource[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching resources:", error);
    throw error;
  }
}

export { fetchResourcesData };