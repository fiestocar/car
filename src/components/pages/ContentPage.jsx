import { useApp } from "../../data/state";
import FilterContent from "../FilterContent";
import EndPage from "./EndPage";

function ContentPage() {
  const isContentEnd = useApp((s) => s.isContentEnd);

  return (
    <>
      {!isContentEnd && <FilterContent />}
      {isContentEnd && <EndPage />}
    </>
  );
}

export default ContentPage;
