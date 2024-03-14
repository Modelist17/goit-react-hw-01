import React from "react";
import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  const classes = [css.friendList];

  return (
    <ul className={clsx(...classes)}>
      {friends.map(({ name, avatar, isOnline, id }) => {
        const isFriendOnline = isOnline === true;

        return (
          <li
            className={clsx(css.friendListCard, {
              [css.online]: isFriendOnline,
            })}
            key={id}
          >
            <div>
              <img src={avatar} alt="Avatar" width="48" />
              <p className={css.friendListText}>{name}</p>
              {isFriendOnline ? (
                <p className={css.online}>{isOnline}Online</p>
              ) : (
                <p className={css.ofline}>{isOnline}Offline</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
