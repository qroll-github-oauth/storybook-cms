import {
  StorybookCanvas,
  StorybookMeta,
  StorybookPropsTable,
} from "./editor-components";

// Now the registry is available via the CMS object.
CMS.registerPreviewStyle("preview.css");
CMS.registerPreviewStyle("cms.css");

CMS.registerEditorComponent(StorybookCanvas);
CMS.registerEditorComponent(StorybookMeta);
CMS.registerEditorComponent(StorybookPropsTable);
