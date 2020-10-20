import React from "react";

import pspDirs from "../fixtures/A3MSTX_3.60.psp.json";
import usage from "../fixtures/A3MSTX_3.60.fmap_usage.json";
import { MarkedEntriesProvider } from "../context/MarkedEntriesContext";
import FlashUsage from "../components/FlashUsage";
import Layout from "../components/Layout";
import PSPImage from "../PSP/PspImage";

const Page = () => {
  return (
    <MarkedEntriesProvider>
      <Layout sidepane={<FlashUsage usage={usage} />}>
        <PSPImage directories={pspDirs} />
      </Layout>
    </MarkedEntriesProvider>
  );
};

export default Page;
