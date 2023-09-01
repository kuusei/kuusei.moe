const customTagRegex = /<YouTube videoId="(.*?)" \/>/g;

export function replaceYoutubeTag(content: string) {
  return content.replace(customTagRegex, (_, videoId) => {
    return `[Watch Video](https://www.youtube.com/watch?v=${videoId})`;
  });
}
