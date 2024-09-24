import { FAQ } from "../../../components";
import { questions } from "./data";

function FAQSection() {
  return (
    <section className="w-full max-w-1440 mx-auto flex-center flex-col gap-8 px-3 pt-2">
      <div className="flex-center gap-4 flex-col w-full max-w-2xl text-center">
        <h3 className="max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
          Frequently Asked Questions
        </h3>
      </div>

      <FAQ questions={questions} />
    </section>
  );
}

export default FAQSection;
