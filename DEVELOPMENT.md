# Ghostfolio 開發指南

## 開發環境

### 前置需求

- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/en/download)（版本 `>=22.18.0`）
- 在本機建立此 Git 倉庫的副本（clone）
- 將 `.env.dev` 複製為 `.env` 並填入你的資料（`cp .env.dev .env`）

### 初始設定

1. 執行 `npm install`
1. 執行 `docker compose -f docker/docker-compose.dev.yml up -d` 啟動 [PostgreSQL](https://www.postgresql.org) 與 [Redis](https://redis.io)
1. 執行 `npm run database:setup` 初始化資料庫結構
1. 啟動 [伺服器](#啟動伺服器) 與 [前端](#啟動前端)
1. 於瀏覽器開啟 https://localhost:4200/zh-TW
1. 透過 _Get Started_ 建立新使用者（第一位註冊的使用者會自動成為 `ADMIN` 管理員）

### 啟動伺服器

#### 偵錯模式

執行 `npm run watch:server`，然後於 [Visual Studio Code](https://code.visualstudio.com) 中點選 _Debug API_

#### 啟動服務

執行 `npm run start:server`

### 啟動前端

#### 繁體中文（預設）

執行 `npm run start:client`，並於瀏覽器開啟 https://localhost:4200/zh-TW。

#### 其他語言

若要以其他語言啟動前端（例如英文 `en`），請修改 `package.json` 中的 `start:client` 腳本，將 `--configuration=development-zh-TW` 改為 `--configuration=development-en`，然後執行 `npm run start:client` 並開啟 https://localhost:4200/en。

### 啟動 _Storybook_

執行 `npm run start:storybook`

### 資料庫結構遷移

使用下列指令可同步資料庫結構：

```bash
npm run database:push
```

## 測試

執行 `npm test`

## 實驗性功能

新功能可透過使用者設定中的功能旗標切換啟用。

### 後端

使用 `UserService` 中的 `without()` 移除權限

### 前端

於 HTML 樣板中使用 `@if (user?.settings?.isExperimentalFeatures) {}`

## 元件庫（_Storybook_）

https://ghostfol.io/development/storybook

## Git

### Rebase

`git rebase -i --autosquash main`

## 相依套件

### Angular

#### 升級（minor 版本）

1. 執行 `npx npm-check-updates --upgrade --target "minor" --filter "/@angular.*/"`

### Nx

#### 升級

1. 執行 `npx nx migrate latest`
1. 確認 `package.json` 的變更合理後，執行 `npm install`
1. 執行 `npx nx migrate --run-migrations`

### Prisma

#### 透過 GUI 存取資料庫

執行 `npm run database:gui`

https://www.prisma.io/studio

#### 為原型開發同步結構至資料庫

執行 `npm run database:push`

https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push

#### 建立結構遷移

執行 `npm run prisma migrate dev --name added_job_title`

https://www.prisma.io/docs/concepts/components/prisma-migrate#getting-started-with-prisma-migrate

## SSL

產生 `localhost.cert` 與 `localhost.pem` 檔案：

```
openssl req -x509 -newkey rsa:2048 -nodes -keyout apps/client/localhost.pem -out apps/client/localhost.cert -days 365 \
  -subj "/C=CH/ST=State/L=City/O=Organization/OU=Unit/CN=localhost"
```
