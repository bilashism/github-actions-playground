import { HotOfferIcon } from '../icons/icons';

type OfferLabelProps = {
  label: string;
  className?: string;
};
export const OfferLabel = ({ label, className }: OfferLabelProps) => {
  return (
    <figcaption
      className={`flex gap-2 items-center max-h-10 max-w-[10rem] h-full z-10 font-bebas-neue font-bold text-base leading-none text-white tracking-wider bg-fading-theme-gradient-light-to-deep py-3 px-5 rounded-tr-lg [clip-path:polygon(0_0,100%_0,100%_87%,13%_100%)] ${className}`}
    >
      {label.toLowerCase().includes('hot offer') ? <HotOfferIcon /> : false}
      {label}
    </figcaption>
  );
};

OfferLabel.defaultProps = {
  className: 'justify-self-end',
};
