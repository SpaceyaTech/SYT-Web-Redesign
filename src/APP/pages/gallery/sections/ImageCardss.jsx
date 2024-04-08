// import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// function ImageCard({ photo }) {
//   const { width, src, alt, date, event, height } = photo;
//   return (
//     <div className={`relative border w-[${width}px]`}>
//       <LazyLoadImage
//         src={src}
//         alt={alt}
//         className="aspect-video object-cover"
//         loading="lazy"
//       />

//       <div className="absolute top-0 right-0 w-full h-full flex opacity-0 transition-all duration-500 ease-linear hover:opacity-100">
//         <div className="bg-transparent w-1/2 h-full" />
//         <div className="bg-[#00664E] text-white w-1/2 h-full flex items-center justify-center flex-col gap-2">
//           <span className="text-xs font-normal">{date}</span>

//           <div className="w-1/5 h-[2px] bg-white rounded-sm" />

//           <h4 className="text-lg font-medium text-center">{event}</h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ImageCard;
