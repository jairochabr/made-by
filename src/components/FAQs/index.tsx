import { Title } from "../ui/Title";
import { Questions } from "./Questions";

import { QUESTIONS } from "@/constants";

export function FAQs() {
  return (
    <section className="from-brand-primary bg-black bg-gradient-to-b to-black py-16">
      <div className="container">
        <Title
          as="h2"
          className="text-center text-3xl font-semibold sm:text-6xl"
        >
          Frequently asked questions
        </Title>
        <div className="mx-auto mt-12 max-w-3xl">
          {QUESTIONS.map((item) => (
            <Questions
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
