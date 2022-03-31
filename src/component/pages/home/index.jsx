import { ListTag } from "../../atoms/listTag";
import { Resume } from "../../atoms/molecules/resume";

export const Home = ({ className = "", style }) => {
  return (
    <div className="p-home">
      <div className={`p-home ${className}`}>
        {/* <ListTag/> */}
        <Resume />
      </div>
    </div>
  );
};
