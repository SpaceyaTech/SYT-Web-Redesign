import { Flame } from "lucide-react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { UI, UIDesignEra } from "../../../assets/images/resources-page";
import { cn } from "../../../utilities/utils";

const imageSlides = [
  UIDesignEra,
  "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/14158913/pexels-photo-14158913.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function Content() {
  const defaultFocusedLinkRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNextBtn = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, imageSlides.length - 1)
    );
  };

  const handlePrevBtn = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  React.useEffect(() => {
    if (defaultFocusedLinkRef.current) {
      defaultFocusedLinkRef.current.focus();
    }
  }, []);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex gap-6 md:gap-12 border-b border-green-header/70">
      <div className="bg-white p-1 rounded-xl w-1/5 h-fit hidden md:block">
        <div className="w-full border rounded-lg bg-green-light p-4 space-y-4 text-base pb-6">
          <div className="flex flex-col gap-3 text-[#767975] font-normal items-start">
            <button
              type="button"
              onClick={() => handleScrollToSection("Overview")}
              className="focus:bg-green-dark focus:text-white focus:font-medium outline-none text-left w-full py-2.5 px-2 rounded"
              ref={defaultFocusedLinkRef}
            >
              Overview
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("ImportanceofUIDesign")}
              className="focus:bg-green-dark focus:text-white focus:font-medium outline-none text-left w-full py-2.5 px-2 rounded"
            >
              Importance of UI Design
            </button>

            <button
              type="button"
              onClick={() => handleScrollToSection("EvolutionofDesign")}
              className="focus:bg-green-dark focus:text-white focus:font-medium outline-none text-left w-full py-2.5 px-2 rounded"
            >
              Evolution of Design
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/5 space-y-4 md:space-y-8 pb-6 md:p-6">
        {/* Overview */}
        <div className="space-y-2 md:space-y-4 lg:space-y-6" id="Overview">
          <h3 className="text-green-header text-xl font-semibold">Overview</h3>
          <p className="text-grey-dark text-sm md:text-base leading-loose font-normal">
            User interface (UI) design is the process designers use to build
            interfaces in software or computerized devices, focusing on looks or
            style. Designers aim to create interfaces which users find easy to
            use and pleasurable. UI design refers to graphical user interfaces
            and other forms—e.g., voice-controlled interfaces. Often confused
            with UX design, UI design is more concerned with the surface and
            overall feel of a design. UI design is a craft where you the
            designer build an essential part of the user experience. UX design
            covers the entire spectrum of the user experience. One analogy is to
            picture UX design as a car with UI design as the driving console.
          </p>
        </div>

        {/* Importance of UI Design */}
        <div
          className="space-y-2 md:space-y-4 lg:space-y-6"
          id="ImportanceofUIDesign"
        >
          <h3 className="text-green-header text-xl font-semibold">
            Importance of UI Design
          </h3>

          <p className="text-grey-dark text-sm md:text-base leading-loose font-normal">
            The significance of what makes a good user interface design cannot
            be overstated in today&lsquo;s digital landscape. As technology
            seamlessly integrates into our daily routines, it&lsquo;s easy to
            overlook its relatively recent emergence. This could be because some
            of us aren’t even old enough to remember back that far.
            <br />
            <br />
            Some younger millennials have no reference for a non-digitized
            world. However, older millennials and Gen Xers probably remember
            what a treat it was to play the Oregon Trail on one of the two
            school computers. Younger generations, accustomed to a digitized
            world from birth, may take for granted the transformative shift from
            antiquated systems like DOS and dial-up to the sleek interfaces of
            modern websites and apps.
            <br />
            <br />
            In today&lsquo;s competitive environment, businesses must prioritize
            the importance of good user interface design within their digital
            strategies. Aligning UI with UX objectives is essential, ensuring
            that every interaction is intuitive, efficient, and engaging. Don’t
            forget, your users might be your employees! By employing effective
            UI design strategies, organizations can cultivate a positive user
            experience, driving customer satisfaction, retention, and
            ultimately, business success.
          </p>
        </div>

        <div className="space-y-2 md:space-y-4 lg:space-y-6">
          <LazyLoadImage src={UI} alt="img" className="" effect="blur" />
        </div>

        <div className="space-y-2 md:space-y-4 lg:space-y-6 bg-[#1A7862] rounded-xl py-2 lg:py-4 px-5 lg:px-10 text-white">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 md:gap-2">
              <Flame size={24} color="white" />
              <h6 className="text-lg font-extrabold">Hot tip!</h6>
            </div>

            <p className="text-base font-medium">
              Perhaps the most important UI design principle is consistency.
              Consistency means that the look and feel of your website, from
              page to page and even within pages need to have a consistent and
              harmonious look. Your font style, font size, color usage and
              images need to have a consistent look.
            </p>
          </div>
        </div>

        {/* Evolution of Design */}
        <div
          className="space-y-2 md:space-y-4 lg:space-y-6"
          id="EvolutionofDesign"
        >
          <h3 className="text-green-header text-xl font-semibold">
            Evolution of Design
          </h3>

          <p className="text-grey-dark text-sm md:text-base leading-loose font-normal">
            “A funny thing happens when you design a computer everyone can use.”
            <br />
            <br />
            That was the headline of a 1984 print campaign for Apple’s newest
            device, the Macintosh. At the time the company was kicking off a
            revolution in personal computing with its graphical user interface
            (GUI) and mouse—two innovations that helped democratize computing by
            making computers understandable and approachable for the average
            consumer.
            <br />
            <br />
            During the ’90s and early 2000s, however, continued innovation
            stalled. But as the 2010s approached, a UI renaissance began that
            has led to many powerfully disruptive—and, frankly, more human—forms
            of interaction.
            <br />
            <br />
            So where are we headed as the planet continues to digitize? To
            figure that out, we must start with a look at how we have interacted
            with computing to date and how those innovations have created the
            foundation for the newest forms of interaction.
            <br />
            <br />
            1980-2000 As the 1990s began, the laptop computer started to
            overtake the desktop. Along with that came incremental changes in
            the mouse/keyboard interface. Apple started incorporating trackballs
            and trackpads into its Powerbook laptops, while IBM introduced
            pointing sticks (branded “TrackPoint”) into its laptops.
            <br />
            <br />
            While computing continued miniaturizing from the desktop to the
            portable PC, a new device was also becoming popular: the PalmPilot.
            Along with the handheld form factor, Palm introduced a a new user
            interface, the stylus, which worked with its touchscreen, and an
            alternative alphabet it called “Graffiti.”
            <br />
            <br />
            2000 - Present In recent years, user interface (UI) and user
            experience (UX) design have become integral components of product
            development. As technology continues to advance at a rapid pace, the
            need for intuitive, seamless, and user-centered designs has become
            more critical than ever. The field of User Interface (UI) and User
            Experience (UX) design has undergone significant evolution over the
            years. In this article, we will explore the key milestones in the
            evolution of UI/UX design and their impact on the design process.
            <br />
            <br />
            The second phase was the mobile era, which began in the early 2000s
            with the advent of smartphones. This phase brought about significant
            changes in UI/UX design, with designers now creating interfaces for
            smaller screens. Designers had to make interfaces responsive and
            adaptable to different screen sizes and resolutions. This led to the
            creation of new design patterns, such as hamburger menus, swipe
            gestures and pinch-to-zoom.
            <br />
            <br />
            In the early days of mobile, UI/UX design was largely based on the
            principles of desktop design, with designers attempting to replicate
            desktop interfaces on mobile screens. However, this approach was not
            effective, as mobile devices presented unique challenges such as
            smaller screens, touch-based inputs, and varied usage contexts.
            <br />
            <br />
            Designers quickly realized that mobile interfaces needed to be
            tailored to the unique characteristics of mobile devices. This led
            to the development of responsive design, which allowed interfaces to
            adapt to different screen sizes and orientations. Designers also
            began to focus on creating interfaces that were touch-friendly, with
            larger buttons and simpler navigation.
            <br />
            <br />
            The mobile era also brought about the rise of app-based interfaces,
            which allowed users to access content and services directly from
            their mobile devices. This led to the development of app stores and
            a new ecosystem of mobile apps, with designers focusing on creating
            interfaces that were engaging, visually appealing, and easy to use.
            <br />
            <br />
            Overall, the mobile era marked a significant shift in UI/UX design,
            with designers moving away from desktop-based design principles and
            focusing on creating interfaces that were tailored to the unique
            characteristics of mobile devices. This era also saw the rise of
            app-based interfaces and the development of responsive design, which
            are still important principles in modern UI/UX design.
            <br />
            <br />
            The third phase is the current era, the post-mobile era, which began
            in the mid-2010s. During this phase, UI/UX design has become more
            complex, with designers creating interfaces for a wide range of
            devices, including smartwatches, virtual reality (VR) headsets, and
            voice assistants. The focus has shifted from creating interfaces for
            specific devices to creating interfaces that work seamlessly across
            multiple devices and platforms. This phase is characterized by the
            increasing prevalence of connected devices, the Internet of Things
            (IoT), and advancements in artificial intelligence (AI) and machine
            learning (ML).
            <br />
            <br />
            In the post-mobile era, UI/UX design is becoming more integrated
            with technology and data, with designers leveraging AI and ML to
            create more personalized and intelligent interfaces. This is leading
            to the development of interfaces that are able to adapt to user
            behavior, context, and preferences, providing a more tailored and
            seamless experience.
          </p>
        </div>

        {/* Image Carrousel */}
        <div className="flex flex-col w-full mt-8 gap-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:h-96 overflow-hidden rounded-xl transition-transform duration-500 ease-in-out">
            <LazyLoadImage
              src={imageSlides[currentIndex]}
              effect="blur"
              alt={`Slide-${imageSlides[currentIndex + 1]}`}
              className={cn(
                "size-full flex-shrink-0 transition-opacity object-cover"
              )}
            />
          </div>

          {/* Btns */}
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handlePrevBtn}
              disabled={currentIndex === 0}
              className={cn(
                "rounded p-2.5 text-white text-sm font-normal leading-[30px] disabled:cursor-not-allowed",
                currentIndex === 0 ? "bg-[#868888]" : "bg-green-dark"
              )}
            >
              Previous
            </button>
            <button
              type="button"
              disabled={currentIndex === imageSlides.length - 1}
              onClick={handleNextBtn}
              className={cn(
                "rounded p-2.5 text-white text-sm font-normal leading-[30px] disabled:cursor-not-allowed",
                currentIndex === imageSlides.length - 1
                  ? "bg-[#868888]"
                  : "bg-green-dark"
              )}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
