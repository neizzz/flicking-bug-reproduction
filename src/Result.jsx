import React, { useEffect } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import { dataState, tabListState } from "./store/atom";

import useData from "./useData";

const Result = () => {
  const originData = useData();
  const setTabList = useSetRecoilState(tabListState);
  const collections = useRecoilValue(dataState);

  useEffect(() => {
    setTabList(["all", ...collections.map((collection) => collection.type)]);
  }, [collections, setTabList]);

  return (
    <main className={"doc-main"}>
      <article className={"content-article"}>
        {JSON.stringify(originData)}
      </article>
    </main>
  );
};

export default Result;
