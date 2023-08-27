interface PostFrontmatter {
  title: string; // 标题
  date: string; // 创建日期
  updatedOn?: string; // 最后更新日期
  tags?: string[]; // 标签
  toc?: boolean; // 侧边导航是否可见，默认为 true
  heroImage?: string; // 顶部图片地址
  heroImageAspectRatio?: string; // 图片长宽比，默认 16 / 9
  draft?: boolean; // 为 true 则不会展示该文章，默认为 false
  [key: string]: any;
}
