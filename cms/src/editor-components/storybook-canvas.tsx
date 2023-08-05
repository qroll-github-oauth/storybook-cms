import { EditorComponentOptions } from "netlify-cms-core";
import { Canvas } from "../preview";
import { parseProps } from "../utils";

export const StorybookCanvas: EditorComponentOptions = {
  id: "storybook-canvas",
  label: "Story",
  collapsed: true,
  fields: [
    {
      name: "canvasJsx",
      label: "Canvas",
      widget: "code",
    },
  ],
  pattern: /^<Canvas\s*(.*?)\s*\/>$/ms,
  fromBlock: function (match: RegExpMatchArray) {
    const [jsx, rawProps] = match;
    const props = parseProps(rawProps);
    return {
      canvasJsx: { code: jsx },
      canvasOf: props.of,
    };
  },
  toBlock: function (data) {
    return data?.canvasJsx?.code ?? `<Canvas />`;
  },
  toPreview: function (data) {
    return (<Canvas canvasOf={data.canvasOf} />) as unknown as string;
  },
};
