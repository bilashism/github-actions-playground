import { ShowTOSList } from './ShowTOSList';

export type NestedListItem = {
  content: string;
  itemType?: 'bullet' | 'none';
  items?: NestedListItem[];
};
export type TOSListType = {
  title: string;
  titleSize?: 'regular' | 'large';
  subtitle?: string;
  start: number;
  items: NestedListItem[];
};
type Props = {
  payload: TOSListType;
};

export const TermsOfServiceList = ({ payload }: Props) => {
  return (
    <section className="grid gap-10" data-tos-list={payload.start}>
      <h2
        className={`font-tti-regular ${
          payload?.titleSize === 'large'
            ? 'text-[clamp(1.5rem,4vw,2rem)]'
            : 'text-[clamp(1.15rem,3vw,1.5rem)]'
        } font-normal leading-none capitalize`}
      >
        <span className="text-brand-primary-color-1">{payload?.title}</span>
      </h2>
      <ShowTOSList data={payload} start={payload.start} />
    </section>
  );
};
