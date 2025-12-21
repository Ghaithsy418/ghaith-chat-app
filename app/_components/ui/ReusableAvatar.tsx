/* eslint-disable @next/next/no-img-element */

interface imageTypes {
  image: string;
  fullName: string;
  className?: string;
}

function ReusableImage({ image, fullName, className = "" }: imageTypes) {
  console.log(image)
  return (
    <img
      src={image}
      alt={`avatar for ${fullName}`}
      className={`rounded-full object-cover ${className}`}
    />
  );
}

export default ReusableImage;
