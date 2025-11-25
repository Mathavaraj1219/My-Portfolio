import { FaCloud } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";

export default function RestApiIcon() {
  return (
    <div className="relative flex items-center justify-center">
      <FaCloud className="text-2xl text-sky-600" />
      <VscJson className="absolute pt-1 text-md text-white" />
    </div>
  );
}
