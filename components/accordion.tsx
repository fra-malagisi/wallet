import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { FC, ReactNode } from "react";

type AccordionProps = {
  text: string;
  content: ReactNode;
};

const Accordion: FC<AccordionProps> = ({ text, content }) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75">
            <span>{text}</span>
            <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} w-5 h-5 text-green-500`} />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">{content}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
