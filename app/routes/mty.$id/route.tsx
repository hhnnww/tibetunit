import { useColorScheme } from "@mui/material";
import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { action } from "./action";
import { loader } from "./loader";
import { Model顶部菜单 } from "./model-1-顶部菜单";
import { Model面包屑 } from "./model-2-面包屑";
import { Model问题模块 } from "./model-3-问题模块";
export { action, loader };

export default function Component() {
  const { mode, setMode } = useColorScheme();
  if (mode === "dark") {
    setMode("light");
  }
  const { ask_obj } = useLoaderData<typeof loader>();
  return (
    <>
      <Model顶部菜单 />

      {ask_obj && (
        <>
          <Model面包屑 title={ask_obj.title} />
          <Model问题模块 title={ask_obj.title} content={ask_obj.content} />
        </>
      )}
    </>
  );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: `${data?.ask_obj && data.ask_obj.title} - tripadvisor` }];
};
