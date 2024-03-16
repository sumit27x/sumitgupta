import React from "react";
import "./Project.css";
import Data from "./../../data/Data";
import { VscGithub } from "react-icons/vsc";
import { GrLanguage } from "react-icons/gr";
// 
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination} from "swiper/modules";

function Project() {
  return (
    <>
      <div className="project">
        <div className=" container">
          <h4 className="section-subtitle">My Work</h4>
          <h1 className="section-title">Projects.</h1>
          <p className="section-description">
            Following project showcases my skills and experience through
            real-worls examples of my work. Each project is brietly described
            with links to code responsitories and live demos in it. it reflects
            my ability to solve complex problems, work different technologies,
            and manage projects effectively.
          </p>

          <div className="card-container">
            <Swiper
              style={{
                "--swiper-pagination-color": "grey",
              }}
              loop={true}
              slidesPerView={3}
              spaceBetween={20}
              centeredSlides={true}
              grabCursor={true}
              freeMode={true}
              pagination={{
                dynamicBullets: true,
              }}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[FreeMode, Pagination]}
            >
              {Data.project.map((item) => {
                return (
                  <SwiperSlide key={item.id} item={item}>
                    <div className="card-content" >
                      <div className="card-head">
                        <img
                          src={item.image}
                          alt="Images"
                          className="card-img"
                        />

                      </div>

                      <div className="card-info">
                        <h3 className="project-name">{item.name}</h3>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <a
                            href={item.weblink}
                            target="_blank"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <GrLanguage className="card-icon" />
                          </a>
                          <a href={item.codelink}
                            target="_blank"
                            style={{ display: "flex", alignItems: "center" }}>
                            <VscGithub className="card-icon" />
                          </a>
                        </div>
                      </div>
                      <p className="card-description">{item.description}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
