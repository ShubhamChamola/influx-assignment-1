import ArrowRight from "../../assets/icons/ArrowRight";

export default function Footer() {
  return (
    <footer className="d-block d-sm-none w-100">
      <div className="container px-5 py-4 d-flex flex-column justify-content-center align-items-center">
        <button
          type="button"
          class="w-100 btn text-center btn-danger btn-red px-4 py-2 d-flex flex-row gap-2 align-items-center justify-content-center btn-icon-right-animate rounded-4"
        >
          <span> Get started</span>
          <ArrowRight width="20px" fill="white" />
        </button>
        <p className="text-white text-center text-opacity-50 fw-light fs-7 mb-0 mt-2">
          Marcus MVP is Only available for use in our Mobile App.
        </p>
      </div>
    </footer>
  );
}
