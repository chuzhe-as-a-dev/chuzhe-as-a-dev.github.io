# 项目约定

本站基于 al-folio v1.2，主题运行时由 Gemfile 中固定版本的 gems 提供；本地只保留必要的模板覆盖和自定义资源。本站有意精简了功能。上游文档仅供主题参考；仓库中保留的博客、书籍、项目、仓库列表、个人资料、教学和简历示例页面已在 `_config.yml` 中排除，除非明确要求，否则不要启用或维护它们。

## 仓库初始化与子模块

- 项目包括 Git 子模块。未初始化时运行 `git submodule update --init --recursive`。

## 内容入口

- 首页简介在 `_pages/about.md`；荣誉与奖励、学术服务、教学和指导经历直接写在 `_layouts/about.liquid` 中。
- 新闻放在 `_news/`，front matter 使用 `layout: post`、`date: YYYY-MM-DD`、`inline: true` 和 `related_posts: false`。
- 实际文献源为 Git 子模块中的 `_my_bib/all.bib`；`_bibliography/papers.bib` 是未使用的上游示例。

## 验证

- 本地主题覆盖变更后运行 `bundle exec al-folio upgrade overrides audit`；确认与上游差异后，用 `bundle exec al-folio upgrade overrides accept <文件>` 更新 `.al-folio-overrides.yml`。

- Markdown、YAML、Liquid、JavaScript 或样式修改：运行 `npx prettier . --check`；缺少依赖时先运行 `npm ci`。
- 影响站点的修改：运行 `bundle exec jekyll build`。
- 仅在提交前运行 `git diff --check`。
