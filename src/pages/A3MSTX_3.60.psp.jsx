import React from "react";

import pspDirs from "../fixtures/A3MSTX_3.60.psp.json";
import { PubKeyProvider } from "../context/PubKeyContext";
import PspDir from "../PSP/PspDir";

const Page = () => {
  return (
    <>
      <div className="layout">
        <PubKeyProvider>
          <div>
            {pspDirs.map((d) => (
              <PspDir key={d.directory} dir={d} />
            ))}
          </div>
        </PubKeyProvider>
      </div>
      <style jsx>{`
        .layout {
          display: flex;
        }
      `}</style>
    </>
  );
};

export default Page;