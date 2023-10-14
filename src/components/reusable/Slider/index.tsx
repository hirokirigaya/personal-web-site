import { useState } from "react";
import { SliderProjectProps } from "../../../pages/Projects/dataSlider";
import * as Styled from "./styles";

interface SliderProps {
  data: SliderProjectProps[];
  cores?: string[];
}
const Slider = ({ data, cores }: SliderProps): JSX.Element => {
  const [current, setCurrent] = useState(0);

  const length = data.length - 1;

  const changeSlide = () => {
    if (current === length) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  setTimeout(changeSlide, 5000);

  return (
    <>
      <Styled.Container dropShadow={cores ? cores[current] : "#fbd21b"}>
        {data.map((item, index) => (
          <img
            src={item.image}
            alt=""
            className={index === current ? "slider active" : "slider"}
            key={item.id}
            title="Slider de projetos já desenvolvidos"
            draggable={false}
          />
        ))}
      </Styled.Container>
    </>
  );
};

export { Slider };
