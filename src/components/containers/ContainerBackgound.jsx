import { useEffect, useState } from "react";
import { getDataUrl } from "../../../utils/url";
import { useApp, useConfig, useContent } from "../../data/state";

function ContainerBackgound({ children }) {
  const config = useConfig((s) => s.basepath);
  const content = useContent((s) => s.content);
  const contentActive = useApp((s) => s.contentActive);
  const [c, setC] = useState(content[contentActive]);

  useEffect(() => {
    setC(content[contentActive]);
  }, [contentActive]);

  return (
    <div
      key={c.bg}
      className="container-backgound"
      style={{
        backgroundImage: `url(${getDataUrl(
          [config.background, c.bg].join("")
        )})`,
      }}
    >
      {children}
    </div>
  );
}

export default ContainerBackgound;
