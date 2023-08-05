import { EditorComponentOptions } from "netlify-cms-core";
import { PropsTable } from "src/preview/props-table";

export const StorybookPropsTable: EditorComponentOptions = {
  id: "storybook-props-table",
  label: "Props Table",
  collapsed: true,
  fields: [],
  pattern: /^<PropsTable \/>$/ms,
  fromBlock: function (match: RegExpMatchArray) {
    return {};
  },
  toBlock: function (data) {
    return "<PropsTable />";
  },
  toPreview: function (data) {
    return (<PropsTable />) as unknown as string;
  },
};
