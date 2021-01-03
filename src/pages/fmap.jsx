import React, { useEffect } from "react";
import "../wasm/go-wasm";

const loadWasm = async (go, file) => {
  const byteStream = fetch(file);
  const { importObject } = go;
  return WebAssembly.instantiateStreaming(byteStream, importObject);
};

const loadFmap = async () => {
  try {
    const go = new Go();
    let { module, instance } = await loadWasm(go, "static/wasm/fmap.wasm");
    // TODO: Define a global syscall/js callback in Go code and
    // call it from the browser to pass the bytes down to the Go
    // runtime. fs syscalls do not work. :)
    // https://stackoverflow.com/questions/54281585/how-to-read-file-from-disk-and-pass-it-to-webassembly-using-go
    const fmap = await go.run(instance, "jusage");
    console.info({ fmap });
    console.info({ e: instance.exports });
    // reset instance
    instance = await WebAssembly.instantiate(module, go.importObject);
  } catch (e) {
    console.error({ e });
  }
};

const Page = () => {
  useEffect(() => {
    loadFmap();
  });
  return <div>fmap</div>;
};

export default Page;
