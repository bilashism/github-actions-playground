import { useEffect, useState } from 'react';

import { RoleCard } from './components/RoleCard';

export type IRoleCard = {
  id: string;
  role: 'booster' | 'currency-supplier' | 'currency-seller';
  title: string;
  description: string;
  imageUrl: string;
  advantages: string[];
  buttonLabel: string;
};

export const ChoseARole = () => {
  const [roles, setRoles] = useState<IRoleCard[]>();
  useEffect(() => {
    if (roles?.length === undefined || roles?.length === 0) {
      fetch('./data/choseARole.json')
        .then((res) => res.json())
        .then((data: IRoleCard[]) => {
          // console.log(data);
          setRoles(data);
        })
        .catch(console.error);
    }
  }, [roles?.length]);

  return (
    <section className="py-11">
      <div className="fb-container">
        <div className="flex flex-col gap-24">
          <h2 className="capitalize text-center font-bold font-tti-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight">
            Choose a{' '}
            <span className="text-brand-primary-color-1/30 bg-clip-text bg-[linear-gradient(293deg,var(--tw-gradient-stops))] from-brand-primary-color-1 to-brand-primary-color-light animate-text-gradient">
              role that fits
            </span>{' '}
            you
          </h2>
          <div className="grid grid-cols-1 gap-16">
            {roles?.map((role) => <RoleCard key={role.id} card={role} />)}
          </div>
        </div>
      </div>
    </section>
  );
};
