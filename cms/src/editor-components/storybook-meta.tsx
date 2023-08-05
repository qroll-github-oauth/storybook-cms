import { EditorComponentOptions } from "netlify-cms-core";
import { Meta } from "../preview";
import { parseProps } from "../utils";

export const StorybookMeta: EditorComponentOptions = {
  id: "storybook-meta",
  label: "Meta",
  collapsed: true,
  fields: [
    {
      name: "metaJsx",
      label: "Meta",
      widget: "code",
    },
  ],
  pattern: /^<Meta\s*(.*?)\s*\/>$/ms,
  fromBlock: function (match: RegExpMatchArray) {
    const [jsx, rawProps] = match;
    const props = parseProps(rawProps);
    return {
      metaJsx: { code: jsx },
      metaTitle: props.title,
    };
  },
  toBlock: function (data) {
    return data?.metaJsx?.["code"] ?? `<Meta />`;
  },
  toPreview: function (data) {
    return (<Meta title={data.metaTitle} />) as unknown as string;
  },
};
