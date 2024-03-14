import React from "react";
import css from "./FriendList.module.css";
import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem"; // Імпорт компонента FriendListItem

const FriendList = ({ friends }) => {
  const classes = [css.friendList];

  return (
    <ul className={clsx(...classes)}>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
