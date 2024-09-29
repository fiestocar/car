import { useEffect, useState } from "react";
import { useApp, useContent } from "../data/state";
import ContentGift from "./contents/ContentGift";
import ContentText from "./contents/ContentText";

function FilterContent() {
  const content = useContent((s) => s.content);
  const contentActive = useApp((s) => s.contentActive);
  const [c, setC] = useState(content[contentActive]);

  useEffect(() => {
    setC(content[contentActive]);
  }, [contentActive]);

  return (
    <div>
      {c.type === "text" && <ContentText />}
      {c.type === "gift" && <ContentGift />}
    </div>
  );
}

export default FilterContent;
