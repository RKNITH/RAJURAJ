// import React from "react";
// import "./Service.css";

// function Service() {
//   return (
//     <div className="service component__space" id="Services">

//       <div className="heading">
//         <h1 className="heading">My Awesome Service</h1>
//         <p className="heading p__color">
//           There are many variations of passages of Lorem Ipsum available,
//         </p>
//         <p className="heading p__color">
//           but the majority have suffered alteration.
//         </p>
//       </div>

//       <div className="container">
//         <div className="row">
//           <div className="col__3">
//             <div className="service__box pointer">
//               <div className="icon">
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   stroke-width="2"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
//                   <line x1="2" y1="20" x2="2" y2="20"></line>
//                 </svg>
//               </div>
//               <div className="service__meta">
//                 <h1 className="service__text">Business Stratagy</h1>
//                 <p className="p service__text p__color">
//                   I throw myself down among the
//                 </p>
//                 <p className="p service__text p__color">
//                   tall grass by the stream as I lie
//                 </p>
//                 <p className="p service__text p__color">close to the earth.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col__3">
//             <div className="service__box pointer">
//               <div className="icon">
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   stroke-width="2"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
//                   <polyline points="2 17 12 22 22 17"></polyline>
//                   <polyline points="2 12 12 17 22 12"></polyline>
//                 </svg>
//               </div>
//               <div className="service__meta">
//                 <h1 className="service__text">Website Development</h1>
//                 <p className="p service__text p__color">
//                   I throw myself down among the
//                 </p>
//                 <p className="p service__text p__color">
//                   tall grass by the stream as I lie
//                 </p>
//                 <p className="p service__text p__color">close to the earth.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col__3">
//             <div className="service__box pointer">
//               <div className="icon">
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   stroke-width="2"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="9" cy="7" r="4"></circle>
//                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                 </svg>
//               </div>
//               <div className="service__meta">
//                 <h1 className="service__text">Marketing & Reporting</h1>
//                 <p className="p service__text p__color">
//                   I throw myself down among the
//                 </p>
//                 <p className="p service__text p__color">
//                   tall grass by the stream as I lie
//                 </p>
//                 <p className="p service__text p__color">close to the earth.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col__3">
//             <div className="service__box pointer">
//               <div className="icon">
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   stroke-width="2"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//                   <line x1="8" y1="21" x2="16" y2="21"></line>
//                   <line x1="12" y1="17" x2="12" y2="21"></line>
//                 </svg>
//               </div>
//               <div className="service__meta">
//                 <h1 className="service__text">Mobile App Development</h1>
//                 <p className="p service__text p__color">
//                   I throw myself down among the
//                 </p>
//                 <p className="p service__text p__color">
//                   tall grass by the stream as I lie
//                 </p>
//                 <p className="p service__text p__color">close to the earth.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col__3">
//             <div className="service__box pointer">
//               <div className="icon">
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   stroke-width="2"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//                   <circle cx="9" cy="7" r="4"></circle>
//                   <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//                   <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//                 </svg>
//               </div>
//               <div className="service__meta">
//                 <h1 className="service__text">Marketing & Reporting</h1>
//                 <p className="p service__text p__color">
//                   I throw myself down among the
//                 </p>
//                 <p className="p service__text p__color">
//                   tall grass by the stream as I lie
//                 </p>
//                 <p className="p service__text p__color">close to the earth.</p>
//               </div>
//             </div>
//           </div>

//           <div className="col__3">
//             <div className="service__box pointer">
//               <div className="icon">
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   stroke-width="2"
//                   viewBox="0 0 24 24"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//                   <line x1="8" y1="21" x2="16" y2="21"></line>
//                   <line x1="12" y1="17" x2="12" y2="21"></line>
//                 </svg>
//               </div>
//               <div className="service__meta">
//                 <h1 className="service__text">Mobile App Development</h1>
//                 <p className="p service__text p__color">
//                   I throw myself down among the
//                 </p>
//                 <p className="p service__text p__color">
//                   tall grass by the stream as I lie
//                 </p>
//                 <p className="p service__text p__color">close to the earth.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Service;


import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading">My Civil Engineering Services</h1>
        <p className="heading p__color">
          Utilizing my knowledge and experience in civil engineering to provide
        </p>
        <p className="heading p__color">
          a range of professional services for various projects.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Structural Design</h1>
                <p className="p service__text p__color">
                  Designing safe and efficient
                </p>
                <p className="p service__text p__color">
                  structures, ensuring compliance
                </p>
                <p className="p service__text p__color">
                  with standards and regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Project Management</h1>
                <p className="p service__text p__color">
                  Coordinating all aspects of
                </p>
                <p className="p service__text p__color">
                  civil engineering projects, from
                </p>
                <p className="p service__text p__color">
                  planning to execution.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Geotechnical Engineering</h1>
                <p className="p service__text p__color">
                  Analyzing soil and rock
                </p>
                <p className="p service__text p__color">
                  properties to design foundations
                </p>
                <p className="p service__text p__color">
                  and earth structures.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Construction Management</h1>
                <p className="p service__text p__color">
                  Overseeing construction
                </p>
                <p className="p service__text p__color">
                  activities to ensure projects are
                </p>
                <p className="p service__text p__color">
                  completed on time and within budget.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Environmental Engineering</h1>
                <p className="p service__text p__color">
                  Developing sustainable
                </p>
                <p className="p service__text p__color">
                  engineering solutions to
                </p>
                <p className="p service__text p__color">
                  protect and improve the environment.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Transportation Engineering</h1>
                <p className="p service__text p__color">
                  Planning and designing
                </p>
                <p className="p service__text p__color">
                  transportation systems for


                </p>
                <p className="p service__text p__color">
                  safe and efficient movement of people and goods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;


