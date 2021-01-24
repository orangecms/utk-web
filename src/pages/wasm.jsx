import React, { useEffect, useState } from "react";
import gogo from "../go/main.go";
//import dynamic from "next/dynamic";
//const gogo = dynamic(() => import("../go/main.go"));

const Page = () => {
  const [v, setV] = useState(0);
  console.info({ gogo });
  useEffect(() => {
    try {
      const { add } = gogo;
      add(1, 2).then((x) => setV(x));
    } catch (e) {
      console.error(e);
    }
  });
  return <div>{v}</div>;
};

export default Page;
