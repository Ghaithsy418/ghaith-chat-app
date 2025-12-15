/* eslint-disable @next/next/no-img-element */

interface imageTypes {
  image: string;
  fullName: string;
  className?: string;
}

function ReusableImage({ image, fullName, className = "" }: imageTypes) {
  return (
    <img
      src={
        process.env.NEXT_PUBLIC_SUPABASE_URL +
        "/storage/v1/object/public/avatars//" +
        image
      }
      alt={`avatar for ${fullName}`}
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export default ReusableImage;
