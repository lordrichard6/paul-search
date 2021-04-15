import React from "react";

const Avatar = ({ url }) => {
  return <img loading="lazy" src={url} alt="profile picture" />;
};

export default Avatar;