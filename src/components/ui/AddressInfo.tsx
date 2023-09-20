export const AddressInfo = () => {
  return (
    <div className="grid gap-8">
      <h2 className="capitalize font-bold font-tti-bold text-[clamp(1.5rem,4vw,3.5rem)] leading-tight">
        <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
          SBDB Entertainment{' '}
        </span>{' '}
        Ltd.
      </h2>
      <address className="grid gap-4 not-italic font-oxanium text-base xl:text-xl leading-normal text-brand-black-10 font-medium">
        <p className="">
          Diagorou 4, Kermia Building, 3rd floor, office 304, 1097, <br />
          Nicosia, Cyprus, Reg. number: XXXXX
        </p>
        <p className="">Customer support: support@FullBoosts.com </p>
        <p className="">Business inquiries: business@FullBoosts.com</p>
      </address>
    </div>
  );
};
