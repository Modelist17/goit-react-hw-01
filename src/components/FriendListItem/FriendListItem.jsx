// // src/components/FriendListItem/FriendListItem.jsx

import React from "react";
import styles from "./FriendListItem.module.css";

 const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
     <div className={styles.friend}>
       <img src={avatar} alt="Friend avatar" width="48" />
       <p>{name}</p>
       <p className={isOnline ? styles.online : styles.offline}>
         {isOnline ? "Online" : "Offline"}
       </p>
     </div>
   );
 };

 export default FriendListItem;
