import { SiReact, SiSpringboot, SiNodedotjs } from "react-icons/si";

const StackToggle = ({stack, setStack}) => {

  return (
    <div className="flex justify-center mb-10 px-4">
      <div className="relative flex flex-col sm:flex-row w-full max-w-md bg-gray-300 dark:bg-gray-600 rounded-2xl sm:rounded-full p-1">        

        <div
          className={`hidden sm:block absolute inset-y-1 left-1 w-[calc(50%-0.25rem)]
          rounded-full bg-white shadow-md transition-transform duration-300
          ${stack === "node" ? "translate-x-full" : ""}`}
        />

        {/* React + Spring Boot */}
        <button
          onClick={() => setStack("spring")}
          className={`relative z-10 flex items-center justify-center gap-2 h-10 
                    sm:w-1/2 rounded-xl sm:rounded-full text-sm font-medium transition
                    ${
                      stack === "spring"
                        ? "bg-white sm:bg-transparent shadow sm:shadow-none"
                        : ""
                    }`}>
          <SiReact className="text-sky-500 text-xl" />
          <SiSpringboot className="text-green-600 text-xl" />
          <span className="whitespace-nowrap dark:text-black">React + Spring Boot</span>
        </button>

        {/* React + Node.js */}
        <button
          onClick={() => setStack("node")}
          className={`relative z-10 flex items-center justify-center gap-2 h-10 
                    sm:w-1/2 rounded-xl sm:rounded-full text-sm font-medium transition
                    ${
                      stack === "node"
                        ? "bg-white sm:bg-transparent shadow sm:shadow-none"
                        : ""
                    }`}>
          <SiReact className="text-sky-500 text-xl" />
          <SiNodedotjs className="text-green-500 text-xl" />
          <span className="whitespace-nowrap dark:text-black">React + Node.js</span>
        </button>
      </div>
    </div>
  );
};

export default StackToggle;
