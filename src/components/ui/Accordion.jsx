import { useState, useRef, useEffect } from "react";
import ArrowDown from "../../assets/icons/ArrowDown";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={`border-bottom py-3 item ${isOpen && "active"}`}>
      <h4
        onClick={onClick}
        className={`fs-7 text-primary fw-light d-flex gap-2 mb-0`}
        style={{ cursor: "pointer" }}
      >
        <div className="flex-shrink-0 mt-1">
          <ArrowDown size="12px" fill=" white" />
        </div>

        {title}
      </h4>
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p className="text-secondary fw-light fs-7 mb-0 mt-2 ps-3">{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-wrapper">
      <h2 className="text-primary fs-4 fw-normal border-bottom lg-visible pb-3 mb-0 mb-lg-3">
        Frequently Asked Question
      </h2>
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
