import { FAQ, LandingWrapper } from "@/components";
import { questions } from "../data";
import SectionWrapper from "@/components/shop/SectionWrapper";

const FaqSection = () => {
  return (
    <LandingWrapper title="Faq">
      <SectionWrapper>
        <section className="w-full flex flex-col gap-4 px-3 ">
          <h3 className="text-green-header text-center font-semibold text-xl md:text-3xl mb-4">
            Frequently Asked Questions
          </h3>
          <FAQ questions={questions} />
        </section>
      </SectionWrapper>
    </LandingWrapper>
  );
};

export default FaqSection;
