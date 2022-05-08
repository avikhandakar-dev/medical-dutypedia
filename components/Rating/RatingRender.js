import { FaStar } from "react-icons/fa";
import HalfStar from "./HalfStar";

const cls = (input) =>
  input
    .replace(/\s+/gm, " ")
    .split(" ")
    .filter((cond) => typeof cond === "string")
    .join(" ")
    .trim();

const RatingRender = ({
  rating,
  color = "text-yellow-500",
  size = "text-xl",
}) => {
  rating = rating ? (rating > 5 ? 5 : rating) : 0;
  const decimal = rating % 1;
  const whole = Math.floor(rating);
  const remainder = 5 - Math.ceil(whole + decimal);
  const stars = [];

  for (let i = 0; i < whole; i++) {
    stars.push({
      type: "full",
      icon: <FaStar className={cls(`${size} ${color}`)} />,
    });
  }
  if (decimal > 0) {
    stars.push({
      type: "half",
      icon: <HalfStar color={color} value={decimal} size={size} />,
    });
  }
  for (let i = 0; i < remainder; i++) {
    stars.push({
      type: "empty",
      icon: <FaStar className={cls(`${size} text-gray-300`)} />,
    });
  }

  return (
    <div
      onClick={() => alert(`${whole}, ${decimal}, ${remainder}`)}
      className="flex space-x-1 items-center"
    >
      {stars.map((star, index) => (
        <span>{star.icon}</span>
      ))}
    </div>
  );
};

export default RatingRender;
