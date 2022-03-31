export const Resume = ({ className = "" }) => {
  return (
    <div className={`m-resume ${className}`}>
      <div className="m-resume__bg">
        <div className="font-light text-gray-600">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between lg:items-end items-center mb-10 pb-4 border-b-2 border-black">
            <h1 className="text-2xl lg:text-3xl font-bold text-black pb-3 lg:p-0">
              My Resume
            </h1>
            <a href="#" className="relative inline-block group">
              <span className="absolute inset-0 bg-blue-600 transition-transform transform translate-x-1 translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative inline-block px-3 lg:px-5 py-3 font-medium text-sm text-blue-600 bg-white hover:bg-blue-600 hover:text-white transition border-2 border-current">
                Download CV
              </span>
            </a>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0">
              <div className="mb-3 lg:mb-0 lg:h-20 flex justify-between">
                <div className>
                  <h5 className="text-xl font-bold text-gray-900">
                    FE, BE Developer
                  </h5>
                  <div className="flex items-center mt-2 text-xs font-medium text-gray-600">
                    <span className="flex items-center text-gray-500 font-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <rect
                          x={2}
                          y={7}
                          width={20}
                          height={14}
                          rx={2}
                          ry={2}
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="font-normal">Doutu.be</span>
                    </span>
                    <span className="flex items-center text-gray-500 font-light ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>{" "}
                      2021 - present
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block ml-3">
                  <img
                    className="object-cover w-auto h-8"
                    src="#"
                    alt="Doutu.be"
                  />
                </div>
              </div>
              <div className>
                <div className="text-gray-800 text-normal lg:leading-6">
                  Founded Doutu.be, a short video social network. I worked with
                  this site from idea to production. I do UX/UI design, develop
                  API backend (NodeJs, MongoDB, AWS, AWS Lambda) and Frontend
                  development (ReactJs). I also do some DevOps jobs, deploy the
                  website to the server.
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0">
              <div className="mb-3 lg:mb-0 lg:h-20 flex justify-between">
                <div className>
                  <h5 className="text-xl font-bold text-gray-900">
                    Digital Marketing Manager
                  </h5>
                  <div className="flex items-center mt-2 text-xs font-medium text-gray-600">
                    <span className="flex items-center text-gray-500 font-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <rect
                          x={2}
                          y={7}
                          width={20}
                          height={14}
                          rx={2}
                          ry={2}
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="font-normal">Otos</span>
                    </span>
                    <span className="flex items-center text-gray-500 font-light ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>{" "}
                      2014 - 2017
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block ml-3">
                  <img className="object-cover w-auto h-12" src="" alt="Otos" />
                </div>
              </div>
              <div className>
                <div className="text-gray-800 text-normal lg:leading-6">
                  Otos.vn is an automobile marketplace website, I helped the
                  company to build Marketing, Content teams. Joining in the
                  product development process, business planning,
                  online/offline/SEO marketing strategy. Working with Agencies,
                  Investors, Partners, Car Dealers...
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0">
              <div className="mb-3 lg:mb-0 lg:h-20 flex justify-between">
                <div className>
                  <h5 className="text-xl font-bold text-gray-900">
                    Website Developer
                  </h5>
                  <div className="flex items-center mt-2 text-xs font-medium text-gray-600">
                    <span className="flex items-center text-gray-500 font-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <rect
                          x={2}
                          y={7}
                          width={20}
                          height={14}
                          rx={2}
                          ry={2}
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="font-normal">Savico</span>
                    </span>
                    <span className="flex items-center text-gray-500 font-light ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>{" "}
                      2012 - 2014
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block ml-3">
                  <img
                    className="object-cover w-auto h-12"
                    src="https://kien.app/images/savico_logo.svg"
                    alt="Savico"
                  />
                </div>
              </div>
              <div className>
                <div className="text-gray-800 text-normal lg:leading-6">
                  Join the first stage in Otos project development. Design the
                  website’s structure, analyze competitors. I also developed
                  subsidiaries’ websites and internal information systems.
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0">
              <div className="mb-3 lg:mb-0 lg:h-20 flex justify-between">
                <div className>
                  <h5 className="text-xl font-bold text-gray-900">
                    WordPress Theme, Plugin Developer
                  </h5>
                  <div className="flex items-center mt-2 text-xs font-medium text-gray-600">
                    <span className="flex items-center text-gray-500 font-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <rect
                          x={2}
                          y={7}
                          width={20}
                          height={14}
                          rx={2}
                          ry={2}
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="font-normal">WPGroupbuy</span>
                    </span>
                    <span className="flex items-center text-gray-500 font-light ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>{" "}
                      2013 - present
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block ml-3">
                  <img
                    className="object-cover w-auto h-8"
                    src=""
                    alt="WPGroupbuy"
                  />
                </div>
              </div>
              <div className>
                <div className="text-gray-800 text-normal lg:leading-6">
                  Start a new WordPress Theme business with a Group buying
                  theme, plugin. Worked from planning, designing, developing,
                  and marketing.
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0">
              <div className="mb-3 lg:mb-0 lg:h-20 flex justify-between">
                <div className>
                  <h5 className="text-xl font-bold text-gray-900">
                    Website Developer, Designer
                  </h5>
                  <div className="flex items-center mt-2 text-xs font-medium text-gray-600">
                    <span className="flex items-center text-gray-500 font-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <rect
                          x={2}
                          y={7}
                          width={20}
                          height={14}
                          rx={2}
                          ry={2}
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="font-normal">MusicFaces</span>
                    </span>
                    <span className="flex items-center text-gray-500 font-light ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>{" "}
                      2010 - 2012
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block ml-3">
                  <img
                    className="object-cover w-auto h-12"
                    src=""
                    alt="MusicFaces"
                  />
                </div>
              </div>
              <div className>
                <div className="text-gray-800 text-normal lg:leading-6">
                  Design, develop websites for popular singers like Suboi, Ho
                  Ngoc Ha, Pham Anh Khoa... and some event websites. I also
                  worked as a webmaster and joined in the development for an
                  Online music website.
                </div>
              </div>
            </div>
            <div className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0">
              <div className="mb-3 lg:mb-0 lg:h-20 flex justify-between">
                <div className>
                  <h5 className="text-xl font-bold text-gray-900">
                    Website Developer
                  </h5>
                  <div className="flex items-center mt-2 text-xs font-medium text-gray-600">
                    <span className="flex items-center text-gray-500 font-light">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <rect
                          x={2}
                          y={7}
                          width={20}
                          height={14}
                          rx={2}
                          ry={2}
                        />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      <span className="font-normal">Freelancer</span>
                    </span>
                    <span className="flex items-center text-gray-500 font-light ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={10}
                        height={10}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="0.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-gray-500 mr-1"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>{" "}
                      2006 - present
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block ml-3">
                  <img
                    className="object-cover w-auto h-9"
                    src=""
                    alt="Freelancer"
                  />
                </div>
              </div>
              <div className>
                <div className="text-gray-800 text-normal lg:leading-6">
                  Design, develop corporate, eCommerce websites for many
                  clients: Savico Invest, Nano Pharmacy Australia, Fujiwa, Nhat
                  Huy Mobi, Orion New Tech...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
