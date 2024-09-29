import TypeIt from "typeit-react";
import { useConfig, useConfigApp } from "../data/state";

function Typing({ className, text = [], endBreak = true, afterComplete }) {
  const config = useConfig((s) => s.text);
  const typingSizeVal = useConfigApp((s) => s.typingSizeVal);

  return (
    <p className={`${className} ${typingSizeVal}`}>
      <TypeIt
        key={text}
        options={{
          speed: config.speed,
          afterComplete: (i) => {
            afterComplete && afterComplete();
          },
        }}
        getBeforeInit={(instance) => {
          text.forEach((t, i) => {
            if (t == "") {
              instance.break();
              return;
            }
            instance.type(t);
            if (i != text.length - 1) {
              instance.break();
            }
            if (i == text.length - 1 && endBreak) {
              instance.break();
            }
          });

          return instance;
        }}
      />
    </p>
  );
}

export default Typing;
