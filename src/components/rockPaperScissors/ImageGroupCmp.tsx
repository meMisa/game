// node modules
import * as React from "react";

interface Props {
  src: any[];
  wrapperClassName: string;
  btnClassName: string[];
  alt: string[];
  handleOnClick: any;
}
const ImageGroupCmp = ({
  src,
  wrapperClassName,
  btnClassName,
  alt,
  handleOnClick,
}: Props) => (
  <div className={wrapperClassName}>
    {src.map((item, index) => (
      <button
        key={index}
        name={alt[index]}
        className={`button-common ${btnClassName[index]}`}
        onClick={handleOnClick}
      >
        <img className="image-common" src={item} alt={alt[index]} />
      </button>
    ))}
  </div>
);
export default ImageGroupCmp;
