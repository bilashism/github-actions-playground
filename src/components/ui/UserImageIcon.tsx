import { ComponentProps } from 'react';

export const UserImageIcon = (
  props: Omit<ComponentProps<'img'>, 'src' | 'srcSet' | 'alt'>
) => {
  const profileImageUrl = '';
  const userImageUrl = new URL(
    profileImageUrl ||
      `https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=48&d=identicon&r=G`
  );
  return <img src={userImageUrl.href} alt="user profile" {...props} />;
};
