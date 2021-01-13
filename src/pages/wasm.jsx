import React, { useEffect, useState } from "react";
// import gogo from "../go/main.go";
import dynamic from "next/dynamic";
const gogo = dynamic(() => import("../go/main.go"));

const Page = () => {
  const [v, setV] = useState(0);
  useEffect(() => {
    const { add } = gogo();
    add(1, 2).then((x) => setV(x));
  });
  return <div>{v}</div>;
};

export default Page;
