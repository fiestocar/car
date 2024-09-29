import { useConfigApp } from "../../data/state";

function ConfigText() {
  const typingSizeInc = useConfigApp((s) => s.typingSizeInc);
  const typingSizeDec = useConfigApp((s) => s.typingSizeDec);

  return (
    <div className="config-container config-text">
      <span>Ukuran Text</span>
      <button
        onClick={typingSizeInc}
        type="button"
        className="btn btn-sm btn-primary"
      >
        +
      </button>
      <button
        onClick={typingSizeDec}
        type="button"
        className="btn btn-sm btn-primary"
      >
        -
      </button>
    </div>
  );
}

export default ConfigText;
