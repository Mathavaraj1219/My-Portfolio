import { SiReact, SiSpringboot, SiNodedotjs } from "react-icons/si";

const StackToggle = ({stack, setStack}) => {

  return (
    <div className="flex justify-center mb-10 px-4">
      <div className="relative flex w-full max-w-md rounded-full bg-gray-300 dark:bg-gray-500 p-1 dark:text-black">
        
        {/* Sliding indicator (ONLY for desktop/tablet) */}
        <div
          className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)]
            rounded-full bg-white shadow-md transition-transform duration-300
            ${stack === "node" ? "translate-x-full" : ""}`}
        />

        {/* React + Spring Boot */}
        <button
          onClick={() => setStack("spring")}
          className="relative z-10 flex w-1/2 items-center justify-center gap-2 h-10 rounded-full text-sm font-medium"
        >
          <SiReact className="text-sky-500 text-xl" />
          <SiSpringboot className="text-green-600 text-xl" />
          <span className="whitespace-nowrap">React + Spring Boot</span>
        </button>

        {/* React + Node.js */}
        <button
          onClick={() => setStack("node")}
          className="relative z-10 flex w-1/2 items-center justify-center gap-2 h-10 rounded-full text-sm font-medium"
        >
          <SiReact className="text-sky-500 text-xl" />
          <SiNodedotjs className="text-green-500 text-xl" />
          <span className="whitespace-nowrap">React + Node.js</span>
        </button>
      </div>
    </div>
  );
};

export default StackToggle;
