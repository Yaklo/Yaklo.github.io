---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解更多 Fuwari 中的 Markdown 功能'
image: ''
tags: [演示, 示例, Markdown, Fuwari]
category: '示例'
draft: true
---

## GitHub 仓库卡片
您可以添加动态卡片链接到 GitHub 仓库，页面加载时会从 GitHub API 获取仓库信息。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<所有者>/<仓库>"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

## 提示框

支持以下类型的提示框：`note`(注意) `tip`(技巧) `important`(重要) `warning`(警告) `caution`(谨慎)

:::note
高亮显示用户应当注意的信息，即使只是快速浏览时也不应忽略。
:::

:::tip
提供帮助用户更高效完成任务的额外建议和技巧。
:::

:::important
包含用户必须了解的关键信息，对成功完成任务至关重要。
:::

:::warning
需要用户立即关注的重要警示内容，可能存在潜在风险。
:::

:::caution
提醒用户某些操作可能带来的负面后果或不良影响。
:::

### 基础语法

```markdown
:::note
需要用户特别注意的信息，即使快速浏览时也不应忽略。
:::

:::tip
帮助用户更高效完成任务的实用建议。
:::
```

### 自定义标题

提示框的标题可以自定义设置。

:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的提示框。
:::
```

### GitHub 语法支持

> [!TIP]
> [GitHub 风格的语法](https://github.com/orgs/community/discussions/16925) 同样受支持。

```markdown
> [!NOTE]  
> 支持 GitHub 风格的语法

> [!TIP]  
> 支持 GitHub 风格的语法
```