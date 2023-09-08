import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Icon } from "./Icon";
import { faqs } from "../../../data/questions";

const FaqSection = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <section id="faqSection" className="w-[340px] md:w-[680px] lg:w-[920px] m-10">
      <h1 className="text-2xl font-bold text-center p-8">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          open={open === faq.id}
          className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          icon={<Icon id={faq.id} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(faq.id)}
            className={`border-b-0 transition-colors ${
              open === faq.id ? "text-blue-500 hover:!text-blue-700" : ""
            }`}
          >
            {faq.question}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            {(faq.id === 1) ? <pre>{faq.answer}</pre> : <>{faq.answer}</>}
          </AccordionBody>
        </Accordion>
      ))}
    </section>
  );
};

export default FaqSection;
