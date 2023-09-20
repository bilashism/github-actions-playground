import { GradientFadePrimaryHr } from '../../../components/ui/GradientFadePrimaryHr';

export type TProductType = {
  id: string;
  title: string;
  description: string;
  listItems: string[];
  footnote?: string;
};
type Props = {
  card: TProductType;
};
export const ProductTypeCard = ({
  card: { title, description, listItems, footnote },
}: Props) => {
  return (
    <div className="grid grid-cols-1 items-center gap-4 text-sm xl:text-lg leading-relaxed text-brand-black-10 font-normal font-oxanium">
      <h3 className="font-tti-regular font-normal text-brand-primary-color-1 text-lg xl:text-xl uppercase">
        {title}
      </h3>
      <GradientFadePrimaryHr />
      <p className="">{description}</p>
      <ul className="list-disc pl-4 grid grid-cols-1 gap-4">
        {listItems?.map((item) => (
          <li key={crypto.randomUUID().toString()} className="">
            {item}
          </li>
        ))}
      </ul>
      {footnote ? <p className="">{footnote}</p> : null}
    </div>
  );
};
