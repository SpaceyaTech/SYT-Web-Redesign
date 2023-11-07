import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// interface Organizer {
//     id: number;
//     name: string;
//     role: string;
//     image: string;
// }

// interface Socials {
//     twitter?: string;
//     website?: string;
//     instagram?: string;
//     youtube?: string;
//     facebook?: string;
//     linkedin?: string;
//     reddit?: string;
//     snapchat?: string;
//     tiktok?: string;
//     pinterest?: string;
//     whatsapp?: string;
// }

// interface Event {
//     id: number;
//     name: string;
//     about: string;
//     link: string;
//     location: string;
//     mode: string;
//     city: string;
//     country: string;
//     date: string;
//     start_time: string;
//     end_time: string;
//     poster: string;
//     category: string;
//     chapter: Chapter;
//     created_at: string;
//     updated_at: string;
// }

// interface Chapter {
//     id: number;
//     country: string;
//     city: string;
//     name: string;
//     about: string;
//     socials: Socials;
//     members: number;
//     banner: string;
//     organizers: Organizer[];
//     events_count?: number;
//     events?: Event[];
// }

const fetchChapterData = async (id) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/chapter/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching chapter data:', error);
        throw error;
    }
}

const useIndividualChapterData = (id) => {
    return useQuery({
      queryKey: ["oneChapter"],
      queryFn: () => fetchChapterData(id),
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 60, // A recall will be made after 30 seconds
    });
  };

export default useIndividualChapterData;
