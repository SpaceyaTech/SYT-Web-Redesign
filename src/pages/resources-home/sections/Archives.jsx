/* eslint-disable import/no-cycle */
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { space, spotify, youtube } from "../../../assets/images/resources-page";
import { youtubeData } from "./data";
import PodcastCard from "./PodcastCard";
import YoutubeCard from "./YoutubeCard";

function Archives() {
  return (
    <section className="max-w-1440 w-full mx-auto flex flex-col items-center gap-9 pt-2 bg-green-light px-5 md:px-8">
      <h3 className="w-full max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
        Go back in time and access our videos, spaces and podcasts
      </h3>

      <div className="space-y-8 md:space-y-12 xl:space-y-20 border border-red-500 w-full">
        {/* Youtube */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <LazyLoadImage
                src={youtube}
                alt="youtube"
                effect="blur"
                className="object-contain w-12"
              />

              <span className="">SpaceYaTech YouTube</span>
            </div>
            <Link
              to="/resources"
              className="text-sm xl:text-base leading-tight font-normal text-[#1E1E1E] underline hover:text-primary"
            >
              See all videos
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-5">
            {youtubeData.map(
              ({ channel, id, length, thumbnail, title, uploaded }) => (
                <YoutubeCard
                  key={id}
                  channel={channel}
                  length={length}
                  thumbnail={thumbnail}
                  title={title}
                  uploaded={uploaded}
                />
              )
            )}
          </div>
        </div>

        {/* Spotify */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <LazyLoadImage
                src={spotify}
                alt="spotify"
                effect="blur"
                className="object-contain w-12"
              />

              <span className="">SpaceYaTech Podcasts</span>
            </div>
            <Link
              to="/resources"
              className="text-sm xl:text-base leading-tight font-normal text-[#1E1E1E] underline hover:text-primary"
            >
              See all podcasts
            </Link>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-5">
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
          </div>
        </div>

        {/* Spaces */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <LazyLoadImage
                src={space}
                alt="space"
                effect="blur"
                className="object-contain w-12"
              />

              <span className="">SpaceYaTech Spaces</span>
            </div>
            <Link
              to="/resources"
              className="text-sm xl:text-base leading-tight font-normal text-[#1E1E1E] underline hover:text-primary"
            >
              See all spaces
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Archives;
