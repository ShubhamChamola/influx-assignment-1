import ArrowRight from "../assets/icons/ArrowRight";
import Star from "../assets/icons/Star";
import Stepper from "../components/ui/Stepper";
import Card from "../components/ui/Card";
import Credit from "../assets/icons/Credit";
import Rollover from "../assets/icons/Rollover";
import Perks from "../assets/icons/Perks";
import Flexible from "../assets/icons/Flexible";
import Discount from "../assets/icons/Discount";
import Fees from "../assets/icons/Fees";
import accordionData from "../assets/data/accordionData.json";
import Accordion from "../components/ui/Accordion";

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-6 text-center">
          <h1 className="text-primary letter-spacing-10 mb-2">
            MVP SUBSCRIPTION
          </h1>
          <p className="fs-6 fw-light text-secondary">
            Your go&#8209;to Movie Membership Program
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container padding-top-bottom-large">
        <div className="main-content-grid">
          {/* Heading */}
          <div className="grid-item">
            <div className="d-flex flex-row gap-1 align-items-end mb-3 mx-2 d-none d-lg-flex">
              <Star size="18px" />
              <div className="mb-2">
                <Star size="24px" />
              </div>
              <Star size="18px" />
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start gap-2">
              <div className="d-block d-lg-none">
                <Star size="20px" />
              </div>
              <h3 className="text-primary text-center text-lg-left fs-4 fw-normal">
                Reel Deal Monthy Movies
              </h3>
              <div className="d-block d-lg-none">
                <Star size="20px" />
              </div>
            </div>

            <p className="fw-normal pb-3 fs-6 border-bottom lg-visible text-center text-lg-start">
              Your flexible monthly membership to the latest movies
            </p>
          </div>

          {/* Benefits */}
          <div className="grid-item">
            <div className="row row-gap-3">
              <div className="col-12 col-xl-9 row m-0 p-0 order-0">
                <div className="col-6">
                  <Card
                    icon={<Credit size="50px" />}
                    title={"1 credit per month"}
                    text={
                      <>
                        One 2D standard per month<sup>1</sup>
                      </>
                    }
                  />
                </div>
                <div className="col-6 d-block d-xl-none">
                  <Card
                    icon={<Discount size="50px" />}
                    title={
                      <>
                        20<span className="font-family-sans">% </span>
                        Discount on all Food and Beverages
                      </>
                    }
                    text={
                      <>
                        <sup className="font-family-sans">*</sup>
                        Excluding alcohol
                      </>
                    }
                  />
                </div>
                <div className="col-6 d-none d-xl-block">
                  <Card
                    icon={<Rollover size="50px" />}
                    title={"Free rollover of unused credits"}
                    text="Unused credits will be combined the following month"
                  />
                </div>
              </div>
              <div className="col-6 col-xl-3 order-4 order-xl-1">
                <Card
                  icon={<Perks size="50px" />}
                  title={"All MMR perks included"}
                  text={
                    <>
                      <span className="font-family-sans">+ </span>
                      benefits
                    </>
                  }
                />
              </div>
              <div className="col-6 col-xl-3 order-3 order-xl-2">
                <Card
                  icon={<Flexible size="50px" />}
                  title={
                    <>
                      100<span className="font-family-sans">% </span>
                      Flexible
                    </>
                  }
                  text={
                    <>
                      Cancel anytime<sup>2</sup>
                    </>
                  }
                />
              </div>
              <div className="col-12 col-xl-9 row m-0 p-0 order-2 order-xl-3">
                <div className="col-6 d-block d-xl-none">
                  <Card
                    icon={<Rollover size="50px" />}
                    title={"Free rollover of unused credits"}
                    text="Unused credits will be combined the following month"
                  />
                </div>
                <div className="col-6 d-none d-xl-block">
                  <Card
                    icon={<Discount size="50px" />}
                    title={
                      <>
                        20<span className="font-family-sans">% </span>
                        Discount on all Food and Beverages
                      </>
                    }
                    text="Excluding alcohol"
                  />
                </div>
                <div className="col-6">
                  <Card
                    icon={<Fees size="50px" />}
                    title={"0 Convenience Fees"}
                    text={"Waived on all days on any tickets purchase"}
                  />
                </div>
              </div>
            </div>
            <div className="px-lg-3 mt-4">
              <p className="fw-light fs-8">
                <sup>1</sup>Exclude IMAX and DBOX formats. No fees apply to
                Passport Credits only. Other fees apply to full
                <span className="font-family-sans">-</span>priced tickets.
              </p>
              <p className="fw-light fs-8">
                <sup>2</sup>Exclude alcoholic beverages
              </p>
            </div>
          </div>

          {/* MVP Subscription */}
          <div className="grid-item">
            <h4 className="text-primary fs-5 fw-normal mb-3 mt-4 mt-lg-0">
              What is MVP Subscription?
            </h4>
            <Stepper
              steps={[
                "MVP Subscription provides the member 1 movie credit per month",
                "They can avail it at any Marcus theatre or Movie Tavern",
                [
                  "Members earn 100 points and get a ",
                  <span className="font-family-sans">$</span>,
                  "5 reward redeemable on food ",
                  <span className="font-family-sans">&</span>,
                  " beverages ",
                  <span className="font-family-sans">+</span>,
                  " many more benefits",
                ],
              ]}
            />
            <div className="d-none d-sm-flex flex-row align-items-center mt-4 gap-5">
              <button
                type="button"
                class="btn bg-primary-subtle text-primary px-4 py-2 d-flex flex-row gap-2 align-items-center icon-animate"
              >
                <span> Get started</span>
                <ArrowRight size="20px" fill="white" />
              </button>

              <a href="#!" className="animate fw-light">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="padding-top-bottom-large bg-dark footer-margin">
        <div className="container">
          <Accordion data={accordionData} />
        </div>
      </section>
    </>
  );
}
