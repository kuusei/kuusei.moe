const linkCardTagRegex = /<LinkCard\s+url="(.*?)"\s+symbol="(.*?)"\s+title="(.*?)"\s+description="(.*?)"\s*\/>/g;

export function replaceLinkCardTag(content: string) {
  return content.replace(linkCardTagRegex, (_, url, symbol, title) => {
    return `[${symbol}${title}](${url})`;
  });
}
