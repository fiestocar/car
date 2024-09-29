import { useEffect, useState } from "react";
import { useApp, useConfig, useContent } from "../../data/state";
import Typing from "../Typing";
import { getDataUrl } from "../../../utils/url";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function ContentGift() {
  const content = useContent((s) => s.content);
  const contentActive = useApp((s) => s.contentActive);
  const [c, setC] = useState(content[contentActive]);

  useEffect(() => {
    setC(content[contentActive]);
  }, [contentActive]);

  return (
    <>
      <div className="row">
        <div className="col">
          <Typing
            className="text-center text-light"
            text={c.text}
            endBreak={false}
          />
        </div>
      </div>
      <div className="row mt-3">
        {c.gift.map((g, i) => (
          <GiftItem key={i} content={g} />
        ))}
      </div>
    </>
  );
}

function GiftItem({ content }) {
  const contentNext = useApp((s) => s.contentNext);
  const config = useConfig((s) => s.icon);

  const option = {
    title: content.title,
    text: content.text,
  };

  if (content.images) {
    option.imageUrl = getDataUrl(content.images);
    option.imageAlt = content.images;
  }

  const showAlert = () => {
    withReactContent(Swal)
      .fire({
        ...option,
        confirmButtonText: "Lanjut",
        showCancelButton: true,
        cancelButtonText: "Liat hadiah lain",
      })
      .then((res) => {
        if (res.isConfirmed) {
          contentNext();
        }
      });
  };

  return (
    <div className="col-6 my-5 text-center">
      <img
        width="100"
        src={getDataUrl(config.default)}
        alt={config.default}
        className="gift-images"
        onClick={showAlert}
      />
    </div>
  );
}

export default ContentGift;
