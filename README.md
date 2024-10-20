# next.js-prisma-tailwind について

Next.js の [with-mysql](https://github.com/vercel/next.js/tree/main/examples/with-mysql) を基にTypeScriptへ調整、Biomeを追加して最低限使いやすくしたスタート用プロジェクトです。
また、パッケージマネージャーはyarnを使用しています。

## Next.jsの書き方について

[こちら](https://zenn.dev/rgbkids/articles/d7691b6c852b42)の記事を参考にさせていただいています。

## 技術スタック

* Node.js ^20.12.2
* Next.js ^14.2.15
* React.js ^18.3.1
* Prisma ^5.21.1（MySQL8.0.40）
* Tailwind CSS ^3.4.14
* Biome ^1.9.4

## スタートアップ

```
docker-compose up -d mysql
yarn
yarn prisma:local migrate dev
yarn dev
```

## ビルド関連

* 開発環境の実行

```
yarn dev
```

* Lintチェック

```
yarn lint
```

## Prisma

* Prismaクライアント生成

```
// ローカル
yarn prisma:local generate
// 他環境
yarn prisma:${ENV} generate
```

* Prismaマイグレーション

```
// ローカル
yarn prisma:local migrate dev
// 他環境
yarn prisma:${ENV} migrate deploy
```

## Docker

```
docker-compose up -d mysql
```