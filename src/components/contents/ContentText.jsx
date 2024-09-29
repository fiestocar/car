import { useCallback, useEffect, useState } from "react";
import { useApp, useContent } from "../../data/state";
import ButtonNext from "../buttons/ButtonNext";
import ContainerText from "../containers/ContainerText";
import Typing from "../Typing";

function ContentText() {
  const content = useContent((s) => s.content);
  const contentActive = useApp((s) => s.contentActive);
  const [c, setC] = useState(content[contentActive]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setC(content[contentActive]);
  }, [contentActive]);

  const handleComplete = useCallback(() => {
    setComplete(true);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col">
          <ContainerText>
            <Typing className="text-light" text={c.text} afterComplete={handleComplete} />
          </ContainerText>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">{complete && <ButtonNext />}</div>
      </div>
    </>
  );
}

export default ContentText;
