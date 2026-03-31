// "use client";

// import React, { useEffect, useRef, useState, memo } from "react";
// import Image from "next/image";
// import { FaLocationArrow } from "react-icons/fa6";
// import { projects } from "@/data";

// interface ProjectItemType {
//   id: number;
//   img: string;
//   title: string;
//   des: string;
//   iconLists: string[];
//   link: string;
// }

// /* ----------------------------------------------------------
//    ✅ Optimized Project Card Component
// ---------------------------------------------------------- */
// const ProjectCard = memo(({ item }: { item: ProjectItemType }) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [animate, setAnimate] = useState(false);

//   // ✅ Each card animates only when visible
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setAnimate(entry.isIntersecting);
//       },
//       {
//         threshold: 0.3,
//       }
//     );

//     if (cardRef.current) observer.observe(cardRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={cardRef}
//       className="relative flex items-center justify-center"
//       style={{ width: "100%", maxWidth: "21rem", height: "26rem" }}
//     >
//       {/* ✅ Animated Border */}
//       <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
//         <span
//           className={`absolute inset-[-1000%] will-change-transform
//           bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]
//           ${animate ? "animate-[spin_2s_linear_infinite]" : ""}`}
//         ></span>

//         {/* ✅ Card Content */}
//         <div className="relative w-full h-full rounded-2xl bg-black p-5">
//           {/* Image Section */}
//           <div className="relative w-full h-[12rem] overflow-hidden rounded-lg mb-6">
//             <Image
//               src={item.img}
//               alt="project cover"
//               fill
//               className="object-cover rounded-lg"
//               loading="lazy"
//             />
//           </div>

//           {/* Title */}
//           <h1 className="font-bold text-lg line-clamp-1">{item.title}</h1>

//           {/* Description */}
//           <p className="my-2 text-sm font-light text-gray-400 line-clamp-2">
//             {item.des}
//           </p>

//           {/* Footer */}
//           <div className="flex items-center justify-between mt-5">
//             {/* Icons */}
//             <div className="flex items-center">
//               {item.iconLists.map((icon, index) => (
//                 <div
//                   key={index}
//                   className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
//                   style={{
//                     transform: `translateX(-${5 * index}px)`,
//                   }}
//                 >
//                   {/* ✅ Optimized Icon Image */}
//                   <Image
//                     src={icon}
//                     alt="tech icon"
//                     width={20}
//                     height={20}
//                     loading="lazy"
//                   />
//                 </div>
//               ))}
//             </div>

//             {/* Link */}
//              <div className="flex justify-center items-center">
//                 <a
//                    href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer" // Improve security
//                   className="flex text-sm text-purple"
//                 >
//                   Check Live Site
//                 </a>
//                 <FaLocationArrow className="ms-2" color="#CBACF9" />
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// ProjectCard.displayName = "ProjectCard";

// /* ----------------------------------------------------------
//    ✅ Recent Projects Section
// ---------------------------------------------------------- */
// const RecentProjects = () => {
//   return (
//     <section className="py-20" id="projects">
//       <h1 className="heading">
//         A small selection of{" "}
//         <span className="text-purple">recent projects</span>
//       </h1>

//       <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
//         {projects.map((item: ProjectItemType) => (
//           <ProjectCard key={item.id} item={item} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RecentProjects;




"use client";

import React, { useMemo } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { useInView } from "@/components/useInView";

interface ProjectItemType {
  id: number;
  img: string;
  title: string;
  des: string;
  iconLists: string[];
  link: string;
}

// ✅ Optimized Project Card
const ProjectItem = React.memo(function ProjectItem({
  item,
}: {
  item: ProjectItemType;
}) {
  const { ref, isVisible } = useInView(0.2);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{ width: "100%", maxWidth: "21rem", height: "26rem" }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
        {/* <span
          className={`absolute inset-[-1000%] ${
            isVisible ? "animate-[spin_2s_linear_infinite]" : ""
          } bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]`}
          style={{ willChange: "transform" }} // ✅ performance boost
        ></span> */}
        {/* <span
  className={`absolute inset-[-1000%] ${
    isVisible && !isMobile
      ? "animate-[spin_3s_linear_infinite]"
      : isVisible && isMobile
      ? "animate-[spin_8s_linear_infinite]" // slower on mobile
      : ""
  } bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]`}
  style={{ willChange: "transform" }}
></span> */}

<span
  className={`absolute inset-[-1000%] ${
    isVisible && !isMobile ? "animate-[spin_3s_linear_infinite]" : ""
  } bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]`}
/>

        {/* Card Content */}
        <div className="relative w-full h-full rounded-2xl bg-black p-5">
          {/* Image */}
          <div className="relative flex items-center justify-center w-full h-[12rem] overflow-hidden mb-6">
            <div
              className="relative w-full h-full overflow-hidden rounded-2xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <Image
                src="/bg.png"
                alt="bgimg"
                fill
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>

            <Image
              src={item.img}
              alt="cover"
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
              className="rounded-2xl"
            />
          </div>

          {/* Title */}
          <h1 className="font-bold text-lg line-clamp-1">
            {item.title}
          </h1>

          {/* Description */}
          <p className="my-2 text-base font-light text-gray-400 line-clamp-2">
            {item.des}
          </p>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-5">
            {/* Icons */}
            <div className="flex items-center">
              {item.iconLists.map((icon: string, index: number) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index}px)`,
                  }}
                >
                  <Image
                    src={icon}
                    alt="icon"
                    fill
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                    className="rounded-full p-1"
                  />
                </div>
              ))}
            </div>

            {/* Link */}
            <div className="flex justify-center items-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-sm text-purple"
              >
                Check Live Site
              </a>
              <FaLocationArrow className="ms-3" color="#CBACF9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// ✅ Main Component
const RecentProjects = () => {
  const memoizedProjects = useMemo(() => projects, []);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
        {memoizedProjects.map((item: ProjectItemType) => (
          <ProjectItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;