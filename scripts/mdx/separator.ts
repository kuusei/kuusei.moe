export function addTextAfterSeparator(
  content: string,
  config: {
    path: string;
    getTip?: (path: string) => string;
  }
) {
  const { path, getTip } = config;
  const separatorIndex = content.indexOf("\n---");

  if (getTip && separatorIndex !== -1) {
    return `${content.slice(0, separatorIndex + 4)}\n\n> ${getTip(path)}\n\n---${content.slice(separatorIndex + 4)}`;
  }
  return content;
}
