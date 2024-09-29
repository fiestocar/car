import { useApp } from "../../data/state";

function ButtonNext({ text = "Klik untuk lanjut" }) {
  const contentNext = useApp((s) => s.contentNext);

  return (
    <button onClick={contentNext} className="btn btn-dark btn-lg float-end">
      {text}
    </button>
  );
}

export default ButtonNext;
