/* eslint-disable @next/next/no-img-element */
import React from "react";

interface imageTypes {
  avatar_url: string;
  display_name: string;
  className?: string;
}

function ReusableImage({
  avatar_url,
  display_name,
  className = "",
}: imageTypes) {
  return (
    <img
      src={
        process.env.NEXT_PUBLIC_SUPABASE_URL +
        "/storage/v1/object/public/avatars//" +
        avatar_url
      }
      alt={`avatar for ${display_name}`}
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export default ReusableImage;
