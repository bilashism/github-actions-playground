import { Link } from 'react-router-dom';

export const WorkWithUsSection = () => {
  return (
    <section className="py-9 ">
      <div className="fb-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white font-bold font-tti-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight capitalize ">
            <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))]  from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
              Professional gamer <br className="xl:hidden" />
            </span>{' '}
            or in game currency trader?
          </h2>
          <p className="text-sm xl:text-base leading-normal text-brand-black-10 font-oxanium font-normal max-w-[36.25rem] mx-auto pt-4">
            Join our team of over 5,000 of professional gamers and suppliers who
            get paid helping other gamers worldwide.
          </p>
          <div className="flex items-center justify-center pt-8">
            <Link
              to="/work-with-us"
              className='inline-flex justify-center items-center px-8 xl:px-14 py-4 xl:py-5 text-base leading-none rounded-md font-medium font-tti-medium text-white bg-fading-theme-gradient-light-to-deep hover:bg-[linear-gradient(theme("colors.brand.primary.color-1")_100%,theme("colors.brand.primary.color-1")_100%)] transition-all'
            >
              Work with us
            </Link>
          </div>{' '}
        </div>
      </div>
    </section>
  );
};
