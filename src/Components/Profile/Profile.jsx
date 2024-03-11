import React from 'react';
import css from './Profile.module.css';
import clsx from 'clsx';

const Profile = ({ name, tag, location, image, stats }) => {
  const classes = [css.profile];

  return (
    <div className={clsx(...classes)}>
      <div className={css.profileWrap}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileAcent}>{name}</p>
        <p className={css.profileLigth}>@{tag}</p>
        <p className={css.profileLigth}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileListItem}>
          <span className={css.profileStats}>Followers </span>
          <span className={css.profileAcent}>{stats.followers}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileStats}>Views</span>
          <span className={css.profileAcent}> {stats.views}</span>
        </li>
        <li className={css.profileListItem}>
          <span className={css.profileStats}>Likes</span>
          <span className={css.profileAcent}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
