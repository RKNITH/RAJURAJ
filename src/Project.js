// import React from "react";
// import "./Project.css";
// import Project1 from './img/portfolio-1.jpg';
// import Project2 from './img/portfolio-2.jpg';
// import Project3 from './img/portfolio-3.jpg';
// import Project4 from './img/portfolio-4.jpg';

// function Project() {
//   return (
//     <div className="project component__space" id="Portfolio">
//       <div className="heading">
//         <h1 className="heading">My Latest Project</h1>
//         <p className="heading p__color">
//           There are many variations of passages of Lorem Ipsum available,
//         </p>
//         <p className="heading p__color">
//           but the majority have suffered alteration.
//         </p>
//       </div>
//        <div className="container">
//            <div className="row">

//              <div className="col__3">
//                  <div className="project__box pointer relative">
//                      <div className="project__box__img pointer relative">
//                          <div className="project__img__box">
//                              <img src={Project1} alt="" className="project__img" />
//                          </div>
//                          <div className="mask__effect"></div>
//                      </div>
//                      <div className="project__meta absolute">
//                      <h5 className="project__text">Development</h5>
//                      <h4 className="project__text">Getting tickets to the big show</h4>
//                      <a href="#" className="project__btn">View Details</a>
//                      </div>
//                  </div>
//              </div>


//              <div className="col__3">
//                  <div className="project__box pointer relative">
//                      <div className="project__box__img pointer relative">
//                          <div className="project__img__box">
//                              <img src={Project2} alt="" className="project__img" />
//                          </div>
//                          <div className="mask__effect"></div>
//                      </div>
//                      <div className="project__meta absolute">
//                      <h5 className="project__text">Development</h5>
//                      <h4 className="project__text">Getting tickets to the big show</h4>
//                      <a href="#" className="project__btn">View Details</a>
//                      </div>
//                  </div>
//              </div>


//              <div className="col__3">
//                  <div className="project__box pointer relative">
//                      <div className="project__box__img pointer relative">
//                          <div className="project__img__box">
//                              <img src={Project3} alt="" className="project__img" />
//                          </div>
//                          <div className="mask__effect"></div>
//                      </div>
//                      <div className="project__meta absolute">
//                      <h5 className="project__text">Development</h5>
//                      <h4 className="project__text">Getting tickets to the big show</h4>
//                      <a href="#" className="project__btn">View Details</a>
//                      </div>
//                  </div>
//              </div>


//              <div className="col__3">
//                  <div className="project__box pointer relative">
//                      <div className="project__box__img pointer relative">
//                          <div className="project__img__box">
//                              <img src={Project4} alt="" className="project__img" />
//                          </div>
//                          <div className="mask__effect"></div>
//                      </div>
//                      <div className="project__meta absolute">
//                      <h5 className="project__text">Development</h5>
//                      <h4 className="project__text">Getting tickets to the big show</h4>
//                      <a href="#" className="project__btn">View Details</a>
//                      </div>
//                  </div>
//              </div>


//              <div className="col__3">
//                  <div className="project__box pointer relative">
//                      <div className="project__box__img pointer relative">
//                          <div className="project__img__box">
//                              <img src={Project3} alt="" className="project__img" />
//                          </div>
//                          <div className="mask__effect"></div>
//                      </div>
//                      <div className="project__meta absolute">
//                      <h5 className="project__text">Development</h5>
//                      <h4 className="project__text">Getting tickets to the big show</h4>
//                      <a href="#" className="project__btn">View Details</a>
//                      </div>
//                  </div>
//              </div>


//              <div className="col__3">
//                  <div className="project__box pointer relative">
//                      <div className="project__box__img pointer relative">
//                          <div className="project__img__box">
//                              <img src={Project4} alt="" className="project__img" />
//                          </div>
//                          <div className="mask__effect"></div>
//                      </div>
//                      <div className="project__meta absolute">
//                      <h5 className="project__text">Development</h5>
//                      <h4 className="project__text">Getting tickets to the big show</h4>
//                      <a href="#" className="project__btn">View Details</a>
//                      </div>
//                  </div>
//              </div>

//              <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
//              <button className="view__more pointer btn">View more</button>
//              </div>

//            </div>
//        </div>
//     </div>
//   );
// }

// export default Project;



import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-3.jpg';
import Project4 from './img/portfolio-4.jpg';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Projects</h1>
                <p className="heading p__color">
                    As a civil engineer, I have worked on various projects,
                </p>
                <p className="heading p__color">
                    each contributing to my professional growth and expertise.
                </p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Infrastructure Development</h5>
                                <h4 className="project__text">Designing and building urban infrastructure</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Structural Engineering</h5>
                                <h4 className="project__text">Creating robust and sustainable structures</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Environmental Engineering</h5>
                                <h4 className="project__text">Innovative solutions for environmental challenges</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Transportation Engineering</h5>
                                <h4 className="project__text">Developing efficient transportation systems</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Geotechnical Engineering</h5>
                                <h4 className="project__text">Analyzing soil properties for construction</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project4} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 className="project__text">Water Resources Engineering</h5>
                                <h4 className="project__text">Managing and conserving water resources</h4>
                                <a href="#" className="project__btn">View Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
                        <button className="view__more pointer btn">View more</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
