interface Organizer {
    id: number;
    name: string;
    role: string;
    image: string;
}

interface Socials {
    twitter?: string;
    website?: string;
    instagram?: string;
    youtube?: string;
    facebook?: string;
    linkedin?: string;
    reddit?: string;
    snapchat?: string;
    tiktok?: string;
    pinterest?: string;
    whatsapp?: string;
}

interface Chapter {
    id: number;
    country: string;
    city: string;
    name: string;
    about: string;
    socials: Socials;
    members: number;
    banner: string;
    organizers: Organizer[];
}

const fetchChapterData = async (id) => {
    try {
        const res0 = await fetch(`${process.env.REACT_APP_API_BASE_URL}/chapter/${id}/`);
        const data = await res0.json();
        return data;
    } catch (error) {
        console.error('Error fetching chapter data:', error);
        throw error;
    }
}

export { fetchChapterData };
