import sprite from "../images/logo.svg";

export const CartLogo: React.FC = () => {
  return (
    <svg className="icon" width={"20px"} height={"20px"}>
      <use href={sprite + "#icon-cart"}></use>
    </svg>
  );
};
