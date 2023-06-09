"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      alt="Avatar"
      width={30}
      height={30}
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
