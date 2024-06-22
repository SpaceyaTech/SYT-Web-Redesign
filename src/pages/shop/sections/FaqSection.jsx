import { FAQ } from "@/components";
import { questions } from "../data";

const FaqSection = () => {
  return (
    <section className="w-full flex flex-col gap-4 px-3 pt-2">
      <FaqSeperator />
      <h3 className="text-green-header text-center font-semibold text-xl md:text-3xl mb-4">
        Frequently Asked Questions
      </h3>
      <FAQ questions={questions} />
    </section>
  );
};

const FaqSeperator = () => {
  return (
    <section className="my-2">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4">
        <div className="w-full h-0.5 rounded-sm bg-gray-300" />
        <h2 className="min-w-fit text-primary text-sm leading-loose px-4 bg-gradient-to-r from-[#D7F4EB] to-white py-2 rounded-full font-semibold border-2 border-gray-300 uppercase">
          Faq
        </h2>
        <div className="w-full h-0.5 bg-gray-300" />
      </div>
    </section>
  );
};
export default FaqSection;
