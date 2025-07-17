---
title: Fuwari 使用简明指南
published: 2024-04-01
description: "如何使用此博客模板"
image: "./cover.jpeg"
tags: ["Fuwari", "Blogging", "Customization"]
category: Guides
draft: true
---

> 封面图片来源: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

本博客模板基于 [Astro](https://astro.build/) 构建。若本指南未提及的内容，您可以在 [Astro 文档](https://docs.astro.build/) 中找到答案。

## 文章 Front-matter 配置

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| 属性          | 说明                                                                                                                                                                                                 |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 文章标题                                                                                                                                                                                           |
| `published`   | 发布日期                                                                                                                                                                                           |
| `description` | 简短描述，会显示在索引页                                                                                                                                                                           |
| `image`       | 封面图片路径<br/>1. 以 `http://` 或 `https://` 开头: 使用网络图片<br/>2. 以 `/` 开头: 使用 `public` 目录下的图片<br/>3. 无前缀: 相对于 markdown 文件的路径                                          |
| `tags`        | 文章标签                                                                                                                                                                                           |
| `category`    | 文章分类                                                                                                                                                                                           |
| `draft`       | 是否为草稿模式(草稿不会显示)                                                                                                                                                                       |

## 文章存放位置

请将文章文件放置在 `src/content/posts/` 目录下。您可以创建子目录来更好地组织文章和资源文件。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
