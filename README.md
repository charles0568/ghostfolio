<div align="center">

[<img src="https://avatars.githubusercontent.com/u/82473144?s=200" width="100" alt="Ghostfolio logo">](https://ghostfol.io)

# Ghostfolio

**開放原始碼財富管理軟體**

[**Ghostfol.io 官方網站**](https://ghostfol.io) | [**線上展示**](https://ghostfol.io/en/demo) | [**Ghostfolio Premium**](https://ghostfol.io/en/pricing) | [**常見問題**](https://ghostfol.io/en/faq) |
[**部落格**](https://ghostfol.io/en/blog) | [**LinkedIn**](https://www.linkedin.com/company/ghostfolio) | [**Slack**](https://join.slack.com/t/ghostfolio/shared_invite/zt-vsaan64h-F_I0fEo5M0P88lP9ibCxFg) | [**X**](https://x.com/ghostfolio_)

[![Shield: Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-Support-yellow?logo=buymeacoffee)](https://www.buymeacoffee.com/ghostfolio)
[![Shield: Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-limegreen.svg)](#貢獻) [![Shield: Docker Pulls](https://img.shields.io/docker/pulls/ghostfolio/ghostfolio?label=Docker%20Pulls)](https://hub.docker.com/r/ghostfolio/ghostfolio)
[![Shield: License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-orange.svg)](https://www.gnu.org/licenses/agpl-3.0)

</div>

**Ghostfolio** 是一款以網頁技術打造的開源財富管理軟體。它讓忙碌的使用者能掌握股票、ETF 或加密貨幣的部位，並以資料驅動的方式做出穩健的投資決策。本軟體專為個人長期持續使用而設計。

<div align="center">

[<img src="./apps/client/src/assets/images/video-preview.jpg" width="600" alt="Ghostfolio 影片預覽">](https://www.youtube.com/watch?v=yY6ObSQVJZk)

</div>

## Ghostfolio Premium

官方的 **[Ghostfolio Premium](https://ghostfol.io/en/pricing)** 雲端服務是最快上手的方式。對多數使用者而言，能省下大量設定時間，是最划算的選擇。其營收用於支付託管基礎設施、專業資料供應商的費用，並資助持續開發。

如果你偏好自行架設於私人基礎設施上，請參考下方的 [自架部署](#自架部署) 章節。

## 為什麼選擇 Ghostfolio？

如果你是以下這類使用者，Ghostfolio 就是為你而生：

- 💼 在多個平台交易股票、ETF 或加密貨幣
- 🏦 採行買進並長期持有（Buy & Hold）策略
- 🎯 想深入了解自己投資組合的配置
- 👻 重視隱私與資料自主權
- 🧘 喜歡極簡風格
- 🧺 關心如何分散財務資源
- 🆓 嚮往財務自由
- 🙅 不想再使用試算表管理投資
- 😎 還在看這份清單

## 功能特色

- ✅ 新增、更新與刪除交易紀錄
- ✅ 多帳戶管理
- ✅ 投資組合績效：以「平均投入報酬率（ROAI）」呈現 `今日`、`週至今（WTD）`、`月至今（MTD）`、`年至今（YTD）`、`1 年`、`5 年`、`歷史最大`
- ✅ 多種圖表
- ✅ 靜態分析，協助識別投資組合潛在風險
- ✅ 交易紀錄匯入與匯出
- ✅ 深色模式
- ✅ 禪定模式（Zen Mode）
- ✅ 行動裝置優先的漸進式網頁應用程式（PWA）

<div align="center">

<img src="./apps/client/src/assets/images/screenshot.png" width="300" alt="顯示 Ghostfolio 應用程式的手機畫面">

</div>

## 技術堆疊

Ghostfolio 採用 [TypeScript](https://www.typescriptlang.org) 撰寫，並以 [Nx](https://nx.dev) workspace 組織程式碼。

### 後端

後端以 [NestJS](https://nestjs.com) 為基礎，使用 [PostgreSQL](https://www.postgresql.org) 作為資料庫，搭配 [Prisma](https://www.prisma.io) 進行資料存取，並以 [Redis](https://redis.io) 進行快取。

### 前端

前端使用 [Angular](https://angular.dev) 框架，搭配 [Angular Material](https://material.angular.io) 元件庫，並輔以 [Bootstrap](https://getbootstrap.com) 的工具類別。

## 自架部署

我們提供託管於 [Docker Hub](https://hub.docker.com/r/ghostfolio/ghostfolio) 的官方容器映像檔，支援 `linux/amd64`、`linux/arm/v7` 與 `linux/arm64` 架構。

<div align="center">

[<img src="./apps/client/src/assets/images/button-buy-me-a-coffee.png" width="150" alt="Buy me a coffee 按鈕"/>](https://www.buymeacoffee.com/ghostfolio)

</div>

### 支援的環境變數

| 名稱                        | 型別                   | 預設值                   | 說明                                                                                                                                                                                       |
| --------------------------- | --------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ACCESS_TOKEN_SALT`         | `string`              |                       | 用於存取權杖（access token）雜湊的隨機鹽值                                                                                                                                                |
| `API_KEY_COINGECKO_DEMO`    | `string`（選用）       |                       | _CoinGecko_ Demo API 金鑰                                                                                                                                                                  |
| `API_KEY_COINGECKO_PRO`     | `string`（選用）       |                       | _CoinGecko_ Pro API 金鑰                                                                                                                                                                   |
| `DATABASE_URL`              | `string`              |                       | 資料庫連線 URL。若使用連線池（connection pooler），請在此填入池化連線 URL，例如：`postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}`                          |
| `DIRECT_URL`                | `string`（選用）       |                       | _Prisma CLI_ 使用的直接連線 URL（例如執行資料表結構遷移、seed），會繞過任何連線池（未設定時自動退回 `DATABASE_URL`）                                                                       |
| `ENABLE_FEATURE_AUTH_TOKEN` | `boolean`（選用）      | `true`                | 啟用以安全權杖進行驗證                                                                                                                                                                     |
| `HOST`                      | `string`（選用）       | `0.0.0.0`             | Ghostfolio 應用程式執行的主機位址                                                                                                                                                          |
| `JWT_SECRET_KEY`            | `string`              |                       | 用於產生 _JSON Web Tokens_（JWT）的隨機字串                                                                                                                                                |
| `LOG_LEVELS`                | `string[]`（選用）     |                       | Ghostfolio 應用程式的記錄等級，例如：`["debug","error","log","warn"]`                                                                                                                       |
| `PORT`                      | `number`（選用）       | `3333`                | Ghostfolio 應用程式監聽的連接埠                                                                                                                                                            |
| `POSTGRES_DB`               | `string`              |                       | _PostgreSQL_ 資料庫名稱                                                                                                                                                                    |
| `POSTGRES_PASSWORD`         | `string`              |                       | _PostgreSQL_ 資料庫密碼                                                                                                                                                                    |
| `POSTGRES_USER`             | `string`              |                       | _PostgreSQL_ 資料庫使用者                                                                                                                                                                  |
| `REDIS_DB`                  | `number`（選用）       | `0`                   | _Redis_ 的資料庫索引                                                                                                                                                                       |
| `REDIS_HOST`                | `string`              |                       | _Redis_ 執行的主機位址                                                                                                                                                                     |
| `REDIS_PASSWORD`            | `string`              |                       | _Redis_ 的密碼                                                                                                                                                                             |
| `REDIS_PORT`                | `number`              |                       | _Redis_ 監聽的連接埠                                                                                                                                                                       |
| `REQUEST_TIMEOUT`           | `number`（選用）       | `2000`                | 對資料供應商發出網路請求的逾時時間（毫秒）                                                                                                                                                 |
| `ROOT_URL`                  | `string`（選用）       | `http://0.0.0.0:3333` | Ghostfolio 應用程式的根 URL，用於產生回呼網址與對外連結                                                                                                                                    |

#### OpenID Connect OIDC（實驗性）

| 名稱                       | 型別                   | 預設值                                | 說明                                                                                                  |
| -------------------------- | --------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `ENABLE_FEATURE_AUTH_OIDC` | `boolean`（選用）      | `false`                              | 啟用 _OpenID Connect_ 驗證                                                                            |
| `OIDC_AUTHORIZATION_URL`   | `string`（選用）       |                                      | 手動覆寫 OIDC 授權端點（未設定時從 issuer 自動探索）                                                  |
| `OIDC_CALLBACK_URL`        | `string`（選用）       | `${ROOT_URL}/api/auth/oidc/callback` | OIDC 回呼網址                                                                                         |
| `OIDC_CLIENT_ID`           | `string`              |                                      | OIDC 用戶端 ID                                                                                        |
| `OIDC_CLIENT_SECRET`       | `string`              |                                      | OIDC 用戶端密鑰                                                                                       |
| `OIDC_ISSUER`              | `string`              |                                      | OIDC issuer URL，用來透過 `/.well-known/openid-configuration` 自動探索 OIDC 設定                       |
| `OIDC_SCOPE`               | `string[]`（選用）     | `["openid"]`                         | 要求的 OIDC scope，例如：`["email","openid","profile"]`                                                |
| `OIDC_TOKEN_URL`           | `string`（選用）       |                                      | 手動覆寫 OIDC token 端點（未設定時從 issuer 自動探索）                                                |
| `OIDC_USER_INFO_URL`       | `string`（選用）       |                                      | 手動覆寫 OIDC 使用者資訊端點（未設定時從 issuer 自動探索）                                            |

### 以 Docker Compose 執行

#### 前置需求

- 具備基本 Docker 知識
- 已安裝 [Docker](https://www.docker.com/products/docker-desktop)
- 已 clone 本 Git 倉庫到本機
- 複製 `.env.example` 為 `.env`，並填入你的資料（`cp .env.example .env`）

#### a. 執行環境

執行下列指令，從 [Docker Hub](https://hub.docker.com/r/ghostfolio/ghostfolio) 啟動 Docker 映像檔：

```bash
docker compose -f docker/docker-compose.yml up -d
```

#### b. 自行建置並執行

執行下列指令以建置並啟動 Docker 映像檔：

```bash
docker compose -f docker/docker-compose.build.yml build
docker compose -f docker/docker-compose.build.yml up -d
```

#### 初始設定

1. 於瀏覽器開啟 http://localhost:3333
1. 透過 _Get Started_ 建立新使用者（第一位註冊的使用者會自動成為 `ADMIN` 管理員）

#### 升級版本

1. 更新 _Ghostfolio_ Docker 映像檔
   - 修改 `docker/docker-compose.yml` 中 `ghostfolio/ghostfolio` 映像檔的版本號
   - 若使用 `ghostfolio:latest`，請執行下列指令：
     ```bash
     docker compose -f docker/docker-compose.yml pull
     ```

1. 執行下列指令以套用新的 Docker 映像檔：
   ```bash
   docker compose -f docker/docker-compose.yml up -d
   ```
   容器啟動時會自動套用必要的資料庫結構遷移。

### 家用伺服器系統（社群提供）

Ghostfolio 已在多種家用伺服器系統上提供，包含 [CasaOS](https://github.com/bigbeartechworld/big-bear-casaos)、[Home Assistant](https://github.com/lildude/ha-addon-ghostfolio)、[Runtipi](https://www.runtipi.io/docs/apps-available)、[TrueCharts](https://truecharts.org/charts/stable/ghostfolio)、[Umbrel](https://apps.umbrel.com/app/ghostfolio) 與 [Unraid](https://unraid.net/community/apps?q=ghostfolio)。

## 開發指南

關於開發環境設定與開發流程的詳細說明，請參考 [DEVELOPMENT.md](./DEVELOPMENT.md)。

## 公開 API

### 驗證：Bearer Token

請在每一筆請求的標頭加入：

```
"Authorization": "Bearer eyJh..."
```

你可以透過 `POST http://localhost:3333/api/v1/auth/anonymous`（Body：`{ "accessToken": "<INSERT_SECURITY_TOKEN_OF_ACCOUNT>" }`）取得 _Bearer Token_。

已棄用：`GET http://localhost:3333/api/v1/auth/anonymous/<INSERT_SECURITY_TOKEN_OF_ACCOUNT>` 或 `curl -s http://localhost:3333/api/v1/auth/anonymous/<INSERT_SECURITY_TOKEN_OF_ACCOUNT>`。

### 健康檢查（實驗性）

#### 請求

`GET http://localhost:3333/api/v1/health`

**說明：** 健康檢查不需要 Bearer Token

#### 回應

##### 成功

`200 OK`

```
{
  "status": "OK"
}
```

### 匯入交易紀錄

#### 前置需求

需先取得 [Bearer Token](#驗證bearer-token) 進行授權

#### 請求

`POST http://localhost:3333/api/v1/import`

#### Body

```
{
  "activities": [
    {
      "currency": "USD",
      "dataSource": "YAHOO",
      "date": "2021-09-15T00:00:00.000Z",
      "fee": 19,
      "quantity": 5,
      "symbol": "MSFT",
      "type": "BUY",
      "unitPrice": 298.58
    }
  ]
}
```

| 欄位         | 型別                 | 說明                                                                |
| ------------ | ------------------- | ------------------------------------------------------------------- |
| `accountId`  | `string`（選用）     | 帳戶 ID                                                              |
| `comment`    | `string`（選用）     | 交易註解                                                             |
| `currency`   | `string`            | `CHF` \| `EUR` \| `USD` 等                                          |
| `dataSource` | `string`            | `COINGECKO` \| `GHOSTFOLIO` [^1] \| `MANUAL` \| `YAHOO`             |
| `date`       | `string`            | `ISO-8601` 格式的日期                                                |
| `fee`        | `number`            | 交易手續費                                                           |
| `quantity`   | `number`            | 交易數量                                                             |
| `symbol`     | `string`            | 交易代碼（須與 `dataSource` 對應）                                    |
| `type`       | `string`            | `BUY` \| `DIVIDEND` \| `FEE` \| `INTEREST` \| `LIABILITY` \| `SELL` |
| `unitPrice`  | `number`            | 單位價格                                                             |

#### 回應

##### 成功

`201 Created`

##### 失敗

`400 Bad Request`

```
{
  "error": "Bad Request",
  "message": [
    "activities.1 is a duplicate activity"
  ]
}
```

### 投資組合（實驗性）

#### 前置需求

於 _我的 Ghostfolio_ 中的 _存取_ 分頁建立類型為 _Public_ 的存取權限。

#### 請求

`GET http://localhost:3333/api/v1/public/<INSERT_ACCESS_ID>/portfolio`

**說明：** 此端點不需要 Bearer Token

#### 回應

##### 成功

```
{
  "performance": {
    "1d": {
      "relativeChange": 0 // 已正規化於 -1 至 1 之間
    };
    "ytd": {
      "relativeChange": 0 // 已正規化於 -1 至 1 之間
    },
    "max": {
      "relativeChange": 0 // 已正規化於 -1 至 1 之間
    }
  }
}
```

## 社群專案

探索更多基於 Ghostfolio 的社群專案：https://github.com/topics/ghostfolio

正在開發自己的 Ghostfolio 相關專案嗎？將 `ghostfolio` topic 加入你的 _GitHub_ 倉庫，就能被列入。[了解更多 →](https://docs.github.com/en/articles/classifying-your-repository-with-topics)

## 貢獻

Ghostfolio 是 **100% 免費** 且 **開放原始碼** 的專案。我們鼓勵並支持一個活躍且健康的社群，歡迎所有貢獻，包括你！

不知道從何下手？我們有一些 [可以參與的議題](https://github.com/ghostfolio/ghostfolio/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22%20no%3Aassignee)，也有適合 [新手入門](https://github.com/ghostfolio/ghostfolio/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22%20no%3Aassignee) 的議題。歡迎加入 Ghostfolio 的 [Slack](https://join.slack.com/t/ghostfolio/shared_invite/zt-vsaan64h-F_I0fEo5M0P88lP9ibCxFg) 頻道，或在 _X_ 上 @ [@ghostfolio\_](https://x.com/ghostfolio_)。我們很樂意收到你的回饋。

## 贊助

若你願意支持本專案，可以購買 [**Ghostfolio Premium**](https://ghostfol.io/en/pricing)、成為 [**贊助者**](https://github.com/sponsors/ghostfolio)，或請我們 [**喝杯咖啡**](https://www.buymeacoffee.com/ghostfolio)。

<br />

<div align="center">
  <a href="https://www.testmuai.com?utm_medium=sponsor&utm_source=ghostfolio" target="_blank" title="TestMu AI - AI Powered Testing Tool">
    <img alt="TestMu AI Logo" height="45" src="https://assets.testmuai.com/resources/images/logos/logo.svg" />
  </a>
</div>

## 專案分析

![Alt](https://repobeats.axiom.co/api/embed/281a80b2d0c4af1162866c24c803f1f18e5ed60e.svg 'Repobeats analytics image')

## 授權條款

© 2021 - 2026 [Ghostfolio](https://ghostfol.io)

依據 [AGPLv3 授權條款](https://www.gnu.org/licenses/agpl-3.0.html) 授權。

[^1]: 需訂閱 [**Ghostfolio Premium**](https://ghostfol.io/en/pricing) 才能使用。
