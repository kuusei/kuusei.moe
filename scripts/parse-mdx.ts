import * as fs from "fs";
import path from "path";

import { replaceImageUrls } from "./mdx/image";
import { replaceLinkCardTag } from "./mdx/link-card";
import { addTextAfterSeparator } from "./mdx/separator";
import { replaceYoutubeTag } from "./mdx/youtube";

function readMarkdownFiles(directory: string) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      readMarkdownFiles(filePath);
    } else if (stats.isFile() && file.endsWith(".mdx")) {
      const markdownContent = fs.readFileSync(filePath, "utf-8");
      const processedContent = processMarkdownFile(markdownContent, {
        path: filePath,
      });
      fs.mkdirSync(directory.replace(`${rootDirectory}/`, `${markdownDirectory}/`), {
        recursive: true,
      });
      fs.writeFileSync(
        filePath.replace(".mdx", ".md").replace(`${rootDirectory}/`, `${markdownDirectory}/`),
        processedContent
      );
    }
  });
}

function processMarkdownFile(
  content: string,
  config: {
    path: string;
  }
) {
  return plugins.reduce((content, plugin) => {
    const props = pluginProps[plugin.name];
    return plugin(content, {
      ...config,
      ...props,
    });
  }, content);
}

const rootDirectory = "posts";
const markdownDirectory = "markdown";
const plugins = [replaceYoutubeTag, replaceLinkCardTag, addTextAfterSeparator, replaceImageUrls];
const pluginProps = {
  [addTextAfterSeparator.name]: {
    getTip: (path: string) =>
      `本文首发于 [kuusei.moe](http://kuusei.moe/${path.replace(
        ".mdx",
        ""
      )}), 仍在建设中(文章内容支持 markdown react, 界面样式更丰富, 欢迎访问), 同步于 xLog`,
  },
  [replaceImageUrls.name]: {
    githubImagePrefix: "https://raw.githubusercontent.com/kuusei/kuusei.moe/main/public",
  },
};

readMarkdownFiles(rootDirectory);
