import { useEffect } from "react";
import { useAppStore } from "../stote/app";

export default function TestPage() {
  if (typeof window === undefined) return <></>;
  //(state) => state.data;
  const appStore = useAppStore();
  //const setData = useAppStore((state) => state.setData);
  useEffect(() => {
    console.log(appStore.data);
  });
  return (
    <>
      <div></div>
    </>
  );
}
