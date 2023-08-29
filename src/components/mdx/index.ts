import tagRenderer from "@/utils/tag-tenderer";

import LinkCard from "./LinkCard";

export const MdxComponents = {
  h1: tagRenderer("h1"),
  h2: tagRenderer("h2"),
  h3: tagRenderer("h3"),
  h4: tagRenderer("h4"),
  h5: tagRenderer("h5"),
  h6: tagRenderer("h6"),
  p: tagRenderer("p"),
  blockquote: tagRenderer("blockquote"),
  table: tagRenderer("table"),
  thead: tagRenderer("thead"),
  tbody: tagRenderer("tbody"),
  tr: tagRenderer("tr"),
  th: tagRenderer("th"),
  td: tagRenderer("td"),
  img: tagRenderer("img"),
  em: tagRenderer("em"),
  strong: tagRenderer("strong"),
  del: tagRenderer("del"),
  LinkCard,
};
