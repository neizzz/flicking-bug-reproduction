import React from "react";

import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";

import App from "./App";

createRoot(document.getElementById("__root__")).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
