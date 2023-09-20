export const NewsletterForm = () => {
  return (
    <form className="">
      <div className="flex flex-col gap-2 xl:gap-[.875rem] relative font-oxanium">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <div className="relative isolate rounded-[1.75rem] overflow-visible flex justify-between items-center bg-brand-black-90 p-2">
          <input
            type="email"
            className="w-full h-full rounded-[3rem]  px-2 xl:px-4 bg-transparent outline-none placeholder:text-base placeholder:leading-none placeholder:font-medium font-oxanium "
            id="newsletter-email"
            placeholder="Email address"
          />
          <button
            type="submit"
            className="relative isolate z-0 after:w-36 xl:after:w-48 after:h-20 xl:after:h-24 after:-translate-x-1/2 after:rounded-full after:bg-brand-primary-color-1/5 after:blur after:left-1/2 after:absolute after:-z-10 after:pointer-events-none inline-flex justify-between items-center gap-2 px-3 xl:px-3 py-2 xl:py-2 text-sm leading-normal rounded-[3rem] font-semibold font-oxanium text-white bg-brand-primary-color-1 hover:bg-brand-primary-color-light hover:text-black transition-all"
          >
            <span className="pl-2 leading-none">Subscribe</span>
            <span className="inline-flex w-7 h-7 overflow-hidden items-center justify-center text-center rounded-full">
              <svg
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.85"
                  y="0.35"
                  width="27.3"
                  height="27.3"
                  rx="13.65"
                  fill="#BD5A3A"
                />
                <path
                  d="M19.5 9.00008V14.0001C19.5 14.4601 19.1275 14.8334 18.6667 14.8334C18.2058 14.8334 17.8333 14.4601 17.8333 14.0001V11.0118L10.0892 18.7559C9.9267 18.9184 9.71334 19.0001 9.50001 19.0001C9.28668 19.0001 9.07332 18.9184 8.91082 18.7559C8.58498 18.4301 8.58498 17.9034 8.91082 17.5776L16.655 9.83341H13.6667C13.2058 9.83341 12.8333 9.46008 12.8333 9.00008C12.8333 8.54008 13.2058 8.16675 13.6667 8.16675H18.6667C18.775 8.16675 18.8834 8.18917 18.9851 8.23083C19.1892 8.315 19.3518 8.47751 19.4359 8.68168C19.4784 8.78335 19.5 8.89175 19.5 9.00008Z"
                  fill="white"
                />
                <rect
                  x="0.85"
                  y="0.35"
                  width="27.3"
                  height="27.3"
                  rx="13.65"
                  stroke="url(#paint0_radial_325_26827)"
                  strokeWidth="0.7"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_325_26827"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(19.75 9.1) rotate(105.524) scale(19.6156)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </form>
  );
};
