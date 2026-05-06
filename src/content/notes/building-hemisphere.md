---
title: Building Hemisphere
date: 2026-05-06
type: decision-log
tags:
  - Hemisphere
  - Astro
  - GitHub
  - Archive
  - Design
excerpt: Hemisphere, Creative Engineering Labとして立ち上げ
draft: false
---

## Context

長く運用してきた既存Webサイトを、GitHubを中心とした構成へ刷新することにした。

AI、GitHub、静的サイト、アーカイブ、メディア管理、ワークフロー自動化を意識して実装する。
そのため、技術・制作・記録を扱うための個人的なEngineering Labとして再設計することにした。

## Decision

新サイトの主語を `Hemisphere` にした。

`Hemisphere` は、現在進行形のCreative Engineering Labとして扱う。

役割は以下のように分ける。

```text
Hemisphere:
  Creative Engineering Lab
  AI-assisted workflow
  Web systems
  Static publishing
  Automation
  Media systems
```

## Reasoning

旧サイトをそのまま現代的に作り直すだけでは、現在の自分の活動を正しく表現できない。
AIやコードを使って、制作物・記録・アーカイブ・運用を整理するための実験場である。

そのため、次の要素を前面に出すことにした。

- engineering
- automation
- media systems
- static publishing
- archive design
- AI-assisted workflow

## Implementation

初期MVPでは、Astro + React + Tailwind CSS を採用した。

サイトはGitHub Pagesで静的公開する。
GitHub Actionsにより、mainブランチへのpushを起点にビルド・デプロイできる構成にした。

トップページは、console / command palette / system dashboard に近いUIとして構成した。

主なセクションは以下。

- Hero
- Command Palette
- Current Builds
- System Stack
- Notes
- Archive

Archiveセクションには、旧サイトをアーカイブとして設置してある。

## Result

Hemisphereは、単なるポートフォリオではなく、現在進行形の作業場として見える形になった。

## Next

次に進めることは以下。

1. NotesをMarkdown管理にする
2. Projects / Systems / Archive の各ページを作る
3. ArchiveにROSSOLABELの導線を整理する
4. GitHub Pages上で継続的に更新できる運用を固める
5. 必要に応じて、旧サイトや独自ドメインとの関係を整理する

Hemisphereは完成物ではなく、継続的に更新される実験環境として育てていく。
