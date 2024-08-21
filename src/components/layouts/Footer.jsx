import ArrowRight from "../../assets/icons/ArrowRight";

export default function Footer() {
  return (
    <footer className="d-block d-sm-none w-100">
      <div className="container px-5 py-4 d-flex flex-column justify-content-center align-items-center">
        <button
          type="button"
          class="w-100 btn text-primary text-center bg-primary-subtle px-4 py-2 d-flex flex-row gap-2 align-items-center justify-content-center icon-animate rounded-4"
        >
          <span> Get started</span>
          <ArrowRight size="20px" fill="white" />
        </button>
        <p className="text-center fw-light fs-7 mb-0 mt-2">
          Marcus MVP is Only available for use in our Mobile App.
        </p>
      </div>
    </footer>
  );
}
