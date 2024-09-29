import { useEffect } from "react";
import { Howl } from "howler";
import { useConfig } from "../../data/state";
import { getDataUrl } from "../../../utils/url";

function Music() {
  const config = useConfig((s) => s.basepath);

  useEffect(() => {
    const m = new Howl({
      src: getDataUrl([config.musics, "default.ogg"].join("")),
      autoplay: true,
      loop: true,
      // volume: 0.8,
    });
  }, []);

  return null;
}

export default Music;
