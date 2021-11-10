import { lazy, Suspense } from "react";

const Microfrontend = lazy(async () => {
  const { App } = await import("microfrontend");
  return { default: App };
});

export const App = () => (
  <>
    <div>Shell</div>
    <Suspense fallback={<div>Loading...</div>}>
      <Microfrontend />
    </Suspense>
  </>
);
