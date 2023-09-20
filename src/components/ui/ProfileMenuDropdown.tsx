import { Fragment, PropsWithChildren } from 'react';
import { BiCaretDown } from 'react-icons/bi';

import { Menu, Transition } from '@headlessui/react';

import { UserImageIcon } from './UserImageIcon';

export const ProfileMenuDropdown = ({ children }: PropsWithChildren) => {
  return (
    <Menu as="div" className="relative inline-flex justify-center items-center">
      {({ open }) => (
        <>
          <Menu.Button className="inline-flex justify-center items-center flex-shrink-0 relative isolate z-0 overflow-clip focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <UserImageIcon
              className="aspect-square w-12 h-12 inline-flex justify-center items-center rounded-circle"
              width="48"
              height="48"
              loading="lazy"
              decoding="async"
            />
            <BiCaretDown
              className={`transition-all h-4 w-4 hover:text-brand-black-20 text-brand-black-40 ${
                open ? 'rotate-180' : 'rotate-0'
              }`}
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 top-full mt-2 origin-top-right bg-brand-black-120 xl:w-auto max-w-sm p-3 xl:p-8 rounded-[0.875rem] cursor-auto font-tti-medium font-medium text-base leading-none border border-brand-black-90 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {children}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
