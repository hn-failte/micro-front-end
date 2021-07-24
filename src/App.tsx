import React from "react";
import "./App.css";
import apps from "./apps";
import { RegistrableApp, LifeCycleFn, ObjectType } from "qiankun";

function App() {
  const pushTo = (app: RegistrableApp<LifeCycleFn<ObjectType>>) => {
    window.history.pushState(app.name, app.name, String(app.activeRule));
  };
  return (
    <div className="App">
      {apps.map((app) => (
        <div key={app.name} onClick={() => pushTo(app)}>
          {app.name}
        </div>
      ))}
    </div>
  );
}

export default App;
