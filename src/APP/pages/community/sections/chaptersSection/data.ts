interface Chapter {
    id: number;
    country: string;
    city: string;
    name: string;
    members: number;
    banner: string;
}

const fetchChaptersData = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/chapter/`);
        const data: Chapter[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching chapters:", error);
        throw error;
    }
};

export { fetchChaptersData };