import { registerMicroApps, start, setDefaultMountApp } from "qiankun";
import apps from "./apps";
import lifecycle from "./lifecycle";

const init = () => {
  registerMicroApps(apps, lifecycle);
  setDefaultMountApp("/app1");
  start();
};

export default init;
