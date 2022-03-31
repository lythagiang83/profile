import { ListTag } from "../../atoms/listTag";

export const Home = ({ className = "", style }) => {
  return (
    <div className="p-home">
      <div className={`p-home ${className}`}>
        <ListTag />
      </div>
    </div>
  );
};
