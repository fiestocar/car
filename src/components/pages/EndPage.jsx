import { useState } from "react";
import { useApp } from "../../data/state";
import Explosion from "../effects/Explosion";

function EndPage() {
  const contentReset = useApp((s) => s.contentReset);
  const [explosion, setExplosion] = useState(false);

  return (
    <div>
      {explosion && (
        <div className="content-fixed-center">
          <Explosion onComplete={() => contentReset()} />
        </div>
      )}
      {!explosion && (
        <div className="text-center">
          <button
            onClick={() => setExplosion(true)}
            className="btn btn-lg btn-dark"
          >
            ULANGI
          </button>
        </div>
      )}
    </div>
  );
}

export default EndPage;
