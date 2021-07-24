import { RegistrableApp, LifeCycleFn, ObjectType } from "qiankun";

const app: RegistrableApp<LifeCycleFn<ObjectType>> = {
  name: "app1",
  entry: "http://10.0.0.5:8080",
  container: "#app1",
  activeRule: "/app1",
  loader(loading) {
    console.log("app1", "loading", loading);
  },
  props: void 0,
};

export default app;
