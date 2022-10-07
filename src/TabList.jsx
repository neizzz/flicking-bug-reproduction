import React from "react";

import { useRecoilValue } from "recoil";

import SwiperLayout from "./SwiperLayout";
import { tabListState, dataState } from "./store/atom";

const TabList = () => {
  const data = useRecoilValue(dataState);
  const tabList = useRecoilValue(tabListState);

  return (
    <SwiperLayout innerContainerTag={"ul"}>
      {tabList.map((collectionType) => (
        <li key={collectionType}>
          {collectionType === "all"
            ? "전체"
            : data.find((collection) => collection.type === collectionType)
                ?.collectionTitle}
        </li>
      ))}
    </SwiperLayout>
  );
};

export default TabList;
