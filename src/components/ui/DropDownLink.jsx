import ArrowDown from "../../assets/icons/ArrowDown";

function DropDown({ subLinks }) {
  return (
    <div className="list-wrapper">
      <ul className="list">
        {subLinks.map(({ link, title }, index) => (
          <li key={index}>
            <a className="fs-8" href={link}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DropDownLink({ parentLink, parentTitle, subLinks }) {
  return (
    <div className="dropdown-link ">
      <a
        className="fs-7 lh-md d-flex align-items-center gap-2"
        href={parentLink}
      >
        <span>{parentTitle}</span>
        <ArrowDown width={"11px"} fill={"white"} />
      </a>
      <DropDown subLinks={subLinks} />
    </div>
  );
}
