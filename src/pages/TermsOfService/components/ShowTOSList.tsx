import { sanitizeHTML } from '../../../utils/DOMPurifier';

import { NestedListItem, TOSListType } from './TermsOfServiceList';

export const ShowTOSList = ({
  data,
  start,
}: {
  data: TOSListType | NestedListItem;
  start: number | string;
}) => {
  return (
    <ol className="list-none font-tti-regular font-normal text-sm xl:text-base leading-relaxed text-white">
      {'subtitle' in data ? <li>{data.subtitle}</li> : null}
      {data?.items?.map((item, idx: number) => (
        <li key={crypto.randomUUID().toString()}>
          {item?.itemType === undefined ? `${start}.${idx + 1}. ` : null}
          {item?.itemType === 'none' ? null : null}
          {item?.itemType === 'bullet' ? (
            <span className="inline-flex w-1 h-1 rounded-circle bg-white align-middle mx-1.5" />
          ) : null}
          <div
            className="contents"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(item.content) }}
          />
          {item.items && item.items.length > 0 && (
            <ShowTOSList data={item} start={`${start}.${idx + 1}`} />
          )}
        </li>
      ))}
    </ol>
  );
};
