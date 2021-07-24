import { FrameworkLifeCycles, LifeCycleFn, ObjectType } from "qiankun";

const hooks: FrameworkLifeCycles<LifeCycleFn<ObjectType>> = {
  beforeLoad() {
    console.log("beforeLoad");
    return Promise.resolve();
  },
  beforeMount() {
    console.log("beforeMount");
    return Promise.resolve();
  },
  afterMount() {
    console.log("afterMount");
    return Promise.resolve();
  },
  beforeUnmount() {
    console.log("beforeUnmount");
    return Promise.resolve();
  },
  afterUnmount() {
    console.log("afterUnmount");
    return Promise.resolve();
  },
};

export default hooks;
