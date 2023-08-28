const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const matter = require("gray-matter");

const postDir = path.resolve(process.cwd(), "./posts");

const checkFileExistence = (categories: string, filename: string) => {
  const categoriesDir = path.resolve(postDir, categories);

  if (fs.existsSync(categoriesDir)) {
    const files = fs.readdirSync(categoriesDir);
    if (files.includes(filename)) {
      return true;
    }
    return false;
  }
  fs.mkdirSync(categoriesDir);
  return false;
};

// npm run new:post filename title [tag1] [tag2] ...
const createPost = async () => {
  const [, , categories, filename, title, ...tags] = process.argv;

  if (!categories || !filename || !title) {
    console.error("请传入类型, 文件名和标题");
  }

  if (tags.length === 0) {
    console.log("未传入标签，默认为未分类");
  }

  const postPath = `${filename}.mdx`;

  if (checkFileExistence(categories, postPath)) {
    console.error("文件已存在");
    return;
  }

  const newFrontmatter = {
    title,
    date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    tags: tags,
    toc: true,
    heroImage: "",
    heroImageAspectRatio: "",
    draft: true,
    updatedOn: dayjs().format("YYYY-MM-DD HH:mm"),
  };

  await fs.promises.writeFile(path.resolve(postDir, categories, postPath), matter.stringify("", newFrontmatter));
};

createPost();
