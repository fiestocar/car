import { Snowfall } from "react-snowfall";
import { getDataUrl } from "../../../utils/url";

const heart = document.createElement("img");
heart.src = getDataUrl("icons/heart.png");

const images = [heart];

function Snow() {
  return (
    <>
      <Snowfall
        key="snow-effect"
        snowflakeCount={80}
        radius={[10.0, 16.0]}
        images={images}
      />
    </>
  );
}

export default Snow;
