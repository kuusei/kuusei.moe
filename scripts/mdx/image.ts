export function replaceImageUrls(
  content: string,
  config: {
    githubImagePrefix?: string;
  }
) {
  if (config?.githubImagePrefix) {
    return content.replace(
      /!\[.*?\]\((\/images\/.*?\.(?:png|jpg|jpeg|gif|bmp))\)/g,
      `![Image](${config?.githubImagePrefix}$1)`
    );
  }
  return content;
}
