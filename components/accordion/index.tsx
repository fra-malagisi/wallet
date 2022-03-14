import { Collapse } from "@nextui-org/react";
import { FC, ReactNode } from "react";

export type AccordionProps = {
  split?: boolean;
  accordions: AccordionDetails[];
};

type AccordionDetails = {
  id: string;
  title: string;
  content: ReactNode;
};

const Accordion: FC<AccordionProps> = ({ accordions, split }) => {
  if (accordions.length === 1) {
    return <Collapse title={accordions[0].title}>{accordions[0].content}</Collapse>;
  }
  return (
    <Collapse.Group splitted={split}>
      {accordions.map((accordion) => (
        <Collapse key={accordion.id} title={accordion.title}>
          {accordion.content}
        </Collapse>
      ))}
    </Collapse.Group>
  );
};

export default Accordion;
