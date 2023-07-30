import sprite from "../images/logo.svg";

export const CartLogo: React.FC = () => {
  return (
    <svg className="icon">
      <use href={sprite + "#icon-cart"}></use>
    </svg>
  );
};
