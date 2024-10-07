// "use client";

// import { FaLocationArrow } from "react-icons/fa6";
// import { useEffect, useRef, useState, useMemo } from "react";
// import Image from "next/image";
// import { projects } from "@/data";
// import { PinContainer } from "./ui/Pin";

// interface ProjectItem {
//   id: number;
//   img: string;
//   title: string;
//   des: string;
//   iconLists: string[];
//   link: string;
// }

// const RecentProjects = () => {
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   const projectRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (projectRef.current) {
//       observer.observe(projectRef.current);
//     }

//     return () => {
//       if (projectRef.current) {
//         observer.unobserve(projectRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="py-20" id="projects" ref={projectRef}>
//       <h1 className="heading">
//         A small selection of{" "}
//         <span className="text-purple">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
//         {projects.map((item: ProjectItem) => (
//           <div
//             className="relative flex items-center justify-center"
//             style={{ width: "100%", maxWidth: "21rem", height: "26rem" }}
//             key={item.id}
//           >
//             {/* Animated border */}
//             <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
//               <span
//                 className={`absolute inset-[-1000%] ${
//                   isVisible ? "animate-[spin_2s_linear_infinite]" : ""
//                 } bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]`}
//               ></span>
//               {/* Card content */}
//               <div className="relative w-full h-full rounded-2xl bg-black p-5">
//                 <div className="relative flex items-center justify-center w-full h-[12rem] overflow-hidden mb-6">
//                   <div
//                     className="relative w-full h-full overflow-hidden rounded-2xl"
//                     style={{ backgroundColor: "#13162D" }}
//                   >
//                     <Image
//                       src="/bg.png"
//                       alt="bgimg"
//                       layout="fill"
//                       objectFit="cover"
//                       loading="lazy"
//                     />
//                   </div>
//                   <Image
//                     src={item.img}
//                     alt="cover"
//                     layout="fill"
//                     objectFit="cover"
//                     priority={false}
//                     loading="lazy"
//                     className="rounded-2xl"
//                     // className="z-10 absolute bottom-0 rounded-2xl"
//                   />
//                 </div>

//                 <h1 className="font-bold text-lg line-clamp-1">{item.title}</h1>

//                 <p className="my-2 text-base font-light text-gray-400 line-clamp-2">
//                   {item.des}
//                 </p>

//                 <div className="flex items-center justify-between mt-5">
//                   <div className="flex items-center">
//                     {useMemo(
//                       () =>
//                         item.iconLists.map((icon: string, index: number) => (
//                           <div
//                             key={index}
//                             className="border border-white/[.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
//                             style={{
//                               transform: `translateX(-${5 * index}px)`,
//                             }}
//                           >
//                             <Image
//                               src={icon}
//                               alt="icon"
//                               layout="fill"
//                               objectFit="contain"
//                               loading="lazy"
//                             />
//                           </div>
//                         )),
//                       [item.iconLists]
//                     )}
//                   </div>

//                   <div className="flex justify-center items-center">
//                     <a
//                       href={item.link}
//                       target="_blank"
//                       className="flex text-sm text-purple"
//                     >
//                       Check Live Site
//                     </a>
//                     <FaLocationArrow className="ms-3" color="#CBACF9" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;

"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

interface ProjectItem {
  id: number;
  img: string;
  title: string;
  des: string;
  iconLists: string[];
  link: string;
}

// Memoized ProjectItem component
const ProjectItem = React.memo(
  ({ item, isVisible }: { item: ProjectItem; isVisible: boolean }) => (
    <div
      className="relative flex items-center justify-center"
      style={{ width: "100%", maxWidth: "21rem", height: "26rem" }}
      key={item.id}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
        <span
          className={`absolute inset-[-1000%] ${
            isVisible ? "animate-[spin_2s_linear_infinite]" : ""
          } bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]`}
        ></span>
        {/* Card content */}
        <div className="relative w-full h-full rounded-2xl bg-black p-5">
          <div className="relative flex items-center justify-center w-full h-[12rem] overflow-hidden mb-6">
            <div
              className="relative w-full h-full overflow-hidden rounded-2xl"
              style={{ backgroundColor: "#13162D" }}
            >
              <Image
                src="/bg.png"
                alt="bgimg"
                layout="fill"
                objectFit="cover"
                loading="lazy"
              />
            </div>
            <Image
              src={item.img}
              alt="cover"
              layout="fill"
              objectFit="cover"
              priority={false}
              loading="lazy"
              className="rounded-2xl"
            />
          </div>

          <h1 className="font-bold text-lg line-clamp-1">{item.title}</h1>

          <p className="my-2 text-base font-light text-gray-400 line-clamp-2">
            {item.des}
          </p>

          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center">
              {useMemo(
                () =>
                  item.iconLists.map((icon: string, index: number) => (
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
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                        className="rounded-full"
                      />
                    </div>
                  )),
                [item.iconLists]
              )}
            </div>

            <div className="flex justify-center items-center">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer" // Improve security
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
  )
);

const RecentProjects = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  // Memoize projects to avoid unnecessary re-renders
  const memoizedProjects = useMemo(() => projects, []);

  return (
    <div className="py-20" id="projects" ref={projectRef}>
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
        {memoizedProjects.map((item: ProjectItem) => (
          <ProjectItem item={item} isVisible={isVisible} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
