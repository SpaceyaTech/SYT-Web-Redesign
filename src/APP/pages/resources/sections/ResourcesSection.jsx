import {
  curriculums,
  mentorlst,
  podcasts,
  yt_channel,
} from "../../../../assets/images/resources-page";
import ResourceCard from "./ResourceCard";

const resourcesData = [
  {
    id: 1,
    header: "Our YouTube Channel",
    desc: "We post weekly discussions regarding tech on a myriad of topics. Join us to learn more.",
    button: "Subscribe to our channel",
    img: yt_channel,
  },
  {
    id: 2,
    header: "Curriculums",
    desc: "We have free and paid ongoing classes to help techies get started and grow in their careers.",
    button: "Learn more",
    img: curriculums,
  },
  {
    id: 3,
    header: "SpaceYaTech Podcast",
    desc: "Get weekly recording of our Twitter spaces, and sessions with experts in the market on our podcast.",
    button: "Listen",
    img: podcasts,
  },
  {
    id: 4,
    header: "Mentorlst",
    desc: "Get personalized and one-on-one mentorship with experts across all tech fields.",
    button: "Join Mentorlst",
    img: mentorlst,
  },
];

const ResourcesSection = () => {
  return (
    <div className="grid sm:grid-cols-2  gap-16 grid-cols-1">
      {resourcesData.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
    </div>
  );
};

export default ResourcesSection;
