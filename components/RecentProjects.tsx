"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

interface ProjectItemType {
  id: number;
  img: string;
  title: string;
  des: string;
  iconLists: string[];
  link: string;
}

/* ----------------------------------------------------------
   ✅ Optimized Project Card Component
---------------------------------------------------------- */
const ProjectCard = memo(({ item }: { item: ProjectItemType }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  // ✅ Each card animates only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative flex items-center justify-center"
      style={{ width: "100%", maxWidth: "21rem", height: "26rem" }}
    >
      {/* ✅ Animated Border */}
      <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
        <span
          className={`absolute inset-[-1000%] will-change-transform
          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]
          ${animate ? "animate-[spin_2s_linear_infinite]" : ""}`}
        ></span>

        {/* ✅ Card Content */}
        <div className="relative w-full h-full rounded-2xl bg-black p-5">
          {/* Image Section */}
          <div className="relative w-full h-[12rem] overflow-hidden rounded-lg mb-6">
            <Image
              src={item.img}
              alt="project cover"
              fill
              className="object-cover rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Title */}
          <h1 className="font-bold text-lg line-clamp-1">{item.title}</h1>

          {/* Description */}
          <p className="my-2 text-sm font-light text-gray-400 line-clamp-2">
            {item.des}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5">
            {/* Icons */}
            <div className="flex items-center">
              {item.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[0.2] rounded-full bg-black w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index}px)`,
                  }}
                >
                  {/* ✅ Optimized Icon Image */}
                  <Image
                    src={icon}
                    alt="tech icon"
                    width={18}
                    height={18}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Link */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-purple-400"
            >
              Check Live
              <FaLocationArrow className="ms-2" color="#CBACF9" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

/* ----------------------------------------------------------
   ✅ Recent Projects Section
---------------------------------------------------------- */
const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
        {projects.map((item: ProjectItemType) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
