import React from "react";

function Card({ image, title, value }) {
  return (
    <div className="rounded-small shadow-md h-[250px] min-w-[100px] p-12">
      {/* <Image
    src={image}
     /> */}
      helo
      <p className="text-gray-400 my-2">{title}</p>
      <p className="text-gray-400 font-extrabold text-5xl my-2">{value}</p>
    </div>
  );
}

export default Card;
