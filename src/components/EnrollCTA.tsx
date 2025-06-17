import UiButton from "@/components/ui/UiButton";

const EnrollCTA = () => (
  <section
    className="relative py-16 bg-[#9be89b]  "
    style={{
      borderTopLeftRadius: "0 0",
      borderTopRightRadius: "0 0",
      clipPath: "ellipse(110% 100% at 50% 0%)", // for top wave effect
    }}
  >
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex-1 flex flex-col items-start md:items-start">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-left mb-8">
          Make your children's life special by enrolling them in our academy
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-8 w-full">
          <UiButton
            color="#43268c"
            textColor="#fff"
            borderColor="#43268c"
            style={{
              borderRadius: "16px 32px 16px 16px",
              fontSize: "1.2rem",
              fontWeight: 400,
              minWidth: 170,
              boxShadow: "0 6px 0px 0px #7e6fcf",
            }}
            className="font-normal px-10 py-3 w-full md:w-[20%]"
          >
            Enroll Your Child
          </UiButton>
          <div className="flex items-center gap-3 text-lg font-semibold text-gray-800 mt-0 md:mt-0 pt-4">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-13Z" stroke="#43268c" strokeWidth="2" />
              <path d="M6 8h12M6 12h8" stroke="#43268c" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="tracking-wide">+91 5602200</span>
            <span className="text-base font-normal ml-2">(Indai, Madhya Pradesh)</span>
          </div>
        </div>
      </div>
      {/* Kid on stool image */}
      <div className="hidden md:block self-end w-[240px] h-[300px] absolute bottom-[75px] right-[120px]">
        <img
          src="/images/gallery/img23.jpg"
          alt="Kid on stool"
          className=" object-contain "
        />
      </div>
    </div>
    {/* Decorative element (optional) */}
    {/* <div className="absolute left-0 bottom-0 w-full h-12">
      <img src="/images/cta/decor-wave.svg" alt="" className="w-full h-full object-cover" />
    </div> */}
  </section>
);

export default EnrollCTA;