import { useRecoilState } from "recoil";

import { dataState } from "./store/atom";

const MOCK_DATA = [
  {
    type: "apple",
    collectionTitle: "사과",
  },
  {
    type: "orange",
    collectionTitle: "오랜지",
  },
];

export default function useData() {
  const [data, setData] = useRecoilState(dataState);

  new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    });
  }).then((data) => setData(data));

  return data;
}
