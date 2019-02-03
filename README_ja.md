# 概要

* SonarQubeをDockerComposeで動作させます。
* SonarScannerで Angular プロジェクトの静的解析・テスト結果を公開します。

# 実行環境

* Docker
* Docker Compose 
* Java - Oracle JRE 8
* Node.js - 10.x
* Yarn - 1.12.x

# 使用ライブラリ

* TypeScript - 3.2.x
* Angular - 7.2.x
* TSLint - 5.11.x
* sonar-scanner - 3.1.x

# 動作確認

## 1. サンプルのダウンロード

```
git clone git@github.com:yasu-s/sonarqube-docker-sample.git
```

## 2. パッケージインストール  

```
cd sonarqube-docker-sample
yarn
```

## 3. SonarQubeの起動  

```
docker-compose up -d
```

## 4. TSLintの実行

```
yarn lint:output
```

## 5. ユニットテストの実行

```
yarn test:output
```

## 6. SonarQube Scanner の実行

```
yarn sonarqube-scanner
```

## 7. 実行結果

![sonarqube](https://user-images.githubusercontent.com/2668146/52160820-58cf3000-26ff-11e9-8903-958e7f502f58.png)
