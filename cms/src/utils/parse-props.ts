export const parseProps = (rawProps: string) => {
  const props: Record<string, unknown> = {};

  if (rawProps) {
    const regex = /([\w.:-]+)(\s*=\s*)(?:\{(.+?)\}|(".*?")(?<!\\")|(\w+))/gs;
    let results = rawProps.matchAll(regex);
    for (const result of results) {
      props[result[1]] = [result[3], result[4], result[5]]
        .filter((r) => !!r)
        .join("");
    }
  }

  return props;
};
