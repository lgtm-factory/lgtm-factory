# LGTM Factory にデザインテーマを追加するガイド

LGTM Factory には、下記を実現するために、様々なデザインテーマが用意されています 🎨

- GitHub 上のテキストコミュニケーションを、楽しくするため
- 開発チームの独自のカルチャーを育み、一体感を養うため

同時に、**LGTM Factory は、オープンソースのプロジェクトでもあるので、**<br>
様々な貢献を、歓迎しています：）

- 新たなデザインテーマを提案する
- 提案されたデザインテーマを、コーディングする
- デザインとコーディングの両方を行う

LGTM Factory への貢献（コントリビューション）を始めるには、下記のガイドを参照してください！<br>
安全第一で、取り組んで参ります 🫡⛑️

<br>

## 目次

- [`lgtm-data`ディレクトリについて](#lgtm-dataディレクトリについて)
- [画像生成の仕組みについて](#画像生成の仕組みについて)
- [デザインテーマ作成前の注意事項](#デザインテーマ作成前の注意事項)
- [どのように LGTM Factory にデザインテーマを追加すればいいの？](#どのように-lgtm-factory-にデザインテーマを追加すればいいの)
  - [1.新たなデザインテーマの企画](#1新たなデザインテーマの企画)
  - [2.開発環境を整える](#2開発環境を整える)
  - [3.新たなファイルを作成する](#3新たなファイルを作成する)
  - [4.作成したファイルに、テンプレートを貼り付ける](#4作成したファイルにテンプレートを貼り付ける)
  - [5.変更を加え独自のデザインデータを作成する](#5変更を加え独自のデザインデータを作成する)
    - [5-1 デザイン情報について](#5-1デザイン情報について)
    - [5.2 オプションについて](#5-2オプションについて)
    - [5.3 JSX エレメントと動的な値について](#5-3jsx-エレメントと動的な値について)
  - [6.変更を commit & push して pull request を作成する🎉](#6変更を-commit--pushそして-pull-request-を作成する-)

<br>

このドキュメントは、以下の目的で作成されました：

- LGTM 画像のデザインデータを、１箇所で適切に管理するため
- 全てのコントリビューターが、迷わずにデザインを追加・編集できるようにするため

<br>

## 画像生成の仕組みについて

（もし興味がなければ、このセクションは飛ばしてください😎）

**LGTM Factory は、単純な HTML と CSS のコードから、画像を生成しています**！

もし、あなたが Web 開発者であれば、<br>
Web サイト・UI コンポーネントを作成するように、LGTM ステッカーを作成できます。

具体的な仕組みについては、`@vercel/og`の`ImageResponse`という機能で、画像生成を行っています。

`ImageResponse`の特徴としては、:

- 動的な値を受け取り、画像を生成することができます
- 画像素材を使用することもできます
- Tailwind CSS で、スタイリングを行うこともできます

もし、この技術をさらに詳しく知りたい方は、以下のリソースを参照してください！

- [公式ドキュメント](https://nextjs.org/docs/app/api-reference/functions/image-response)
- [@vercel/og で動的な画像を生成するガイド【Next.js】](https://zenn.dev/kazzyfrog/articles/next-image-response-guide)

<br>

## デザインテーマ作成前の注意事項

> LGTM Factory は、[行動規範](/.github/CODE_OF_CONDUCT.md)に従い、全ての開発者・デザイナーの貢献を歓迎します 💚

デザインを追加する前に、**以下の注意事項をご確認ください**：

- 全てのコントリビューターが追加したデザインやコードには、LGTM Factory が定めるオープンソースライセンスが適用されます
- あなたが有している著作物、もしくは使用が許可されているリソース以外を、追加することはできません

そして、何か不明点・懸念点がある場合は、<br>
いつでもメンテナーからのサポートを受けられることを、忘れないでください 🙌

<br>

## どのように LGTM Factory にデザインテーマを追加すればいいの？

> テンプレートを使用して、作業のほとんどの時間を、メインのデザイン & コーディングに集中する 🚀

では、実際に、<br>
デザインテーマを追加する手順を紹介していきます。

**次の通り、簡単な 6 ステップです**:)

1. [新たなデザインテーマの企画](#1新たなデザインテーマの企画)
1. [開発環境を整える](#2開発環境を整える)
1. [新たなファイルを作成する](#3新たなファイルを作成する)
1. [作成したファイルに、テンプレートを貼り付ける](#4作成したファイルにテンプレートを貼り付ける)
1. [変更を加え、独自のデザインデータを作成する](#5変更を加え独自のデザインデータを作成する)
1. [変更を commit & push、そして Pull Request を作成する 🎉](#6変更を-commit--pushそして-pull-request-を作成する-)

もし助けが必要な場合、<br>
このプロジェクトに関する改善点を見つけた場合は、[Issues](https://github.com/lgtm-factory/lgtm-factory/issues) から報告してください！

どんな些細なことでも、大歓迎です 🫠🫠

---

### 1.新たなデザインテーマの企画

LGTM Factory に、デザインテーマを追加する方法は、２通りあります：

1. 新たなデザインテーマを提案し、他のコントリビューターがコーディングを行う
1. デザインとコーディングの両方を行う

上記のどちらの場合であっても、<br>
**デザインの作成・提案の時点で、メンテナーからのフィードバックを受けることができます**！

- その場合は、Issue を作成してください（[デザイン提案用 Issue テンプレート](https://github.com/lgtm-factory/lgtm-factory/issues/new?assignees=&labels=Type%3A+design+LGTM+💡&projects=&template=new_lgtm_design.md&title=)を使用できます！）
- Issue を作成することで、コーディング作業を、別のコントリビューターに割り当てる事が、可能になります
- なので、[Issues](https://github.com/lgtm-factory/lgtm-factory/issues) に、`Type: coding LGTM ⛏️`のラベルがついた Issue があれば、コーディング作業のみを行う事もできます！

> 1. 新たなデザインテーマを提案し、他のコントリビューターがコーディングを行う

**上記の場合は、デザイン提案のイシューを作成することで、作業は完了です**🥳<br>
コーディング作業を行う場合は、以降のステップへ進みます！！

---

### 2.開発環境を整える

初めて LGTM Factory にコントリビュートする方向けに、<br>
簡潔に、環境構築の手順を記載していきます。

1. GitHub 上から、このリポジトリをフォークする
1. フォークしたリポジトリを、ローカルマシンにクローンする
1. リポジトリのディレクトリ内に移動したら、次のコマンドで、このプロジェクトに必要なパッケージをインストールします：
   ```
   npm install
   ```
1. そして、作業用ブランチを作成する
   - 🚨注意：`<new-file>`は、あなたが追加するファイル名に置き換えてください
   ```zsh
     git switch -c add-design-theme-<new-file>
   ```

ここまでで、開発環境の準備は完了です 🛠️

---

### 3.新たなファイルを作成する

次に、**`lgtm-data`ディレクトリ**に、追加するデザインの内容を記載するファイルを作成します！

以下のようなファイルを、新たに作成するだけです 👍<br>
例：`colorful-circle-emoji.tsx`

**その際、注意して欲しいポイントが、3 つあります**：

1. 作成するファイルの拡張子は、`.tsx` にしてください。
1. ファイル名は、あなたのデザインを表す、意味のある名前をつけてください。
   - 例 1: 「design-001」は、中身のデザインが分かりにくいので、不適切だと言えます。
   - 例 2:「colorful-circle-emoji」は、デザインの中身がある程度想像できるため、適切だと言えます。
   - とは言え、そこまで厳密ではないですよ 😈
1. ファイル名は、既存のファイルと重複する名前では作成できません。
   - ファイル名は、そのままデザインを識別する`slug`として使用されるので、固有の名前をつける必要があります。

ここまでで、ファイルを作成しました！<br>
そして、デザインを識別する名前も決まりました！！☕️

---

### 4.作成したファイルに、テンプレートを貼り付ける

前のステップで作成したファイルに、これからデザインのコードを追加していきます！

**その際、CSS の記述方法に応じて、下記のテンプレートを使用できます**:

<details>
  <summary><strong>💡 テンプレート1: インラインスタイル</strong></summary>

```tsx
import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";
import { ImageResponseOptions } from "next/server";

async function getLgtmData(inputData: InputData): Promise<GetLgtmDataResult> {
  const designInfo = {
    author: "username",
    description: "デザインの簡潔な紹介文",
    editableFields: ["emoji"],
  };

  const options: ImageResponseOptions = {
    width: 1200,
    height: 630,
    emoji: "twemoji",
  };

  const element = (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <p
        style={{
          fontSize: 192,
        }}
      >
        {inputData.emoji}
      </p>
      <div
        style={{
          marginTop: 0,
          fontSize: 56,
        }}
      >
        Looks Good To Me
      </div>
    </div>
  );

  return {
    designInfo,
    element,
    options,
  };
}

export default getLgtmData;
```

</details>

<details>
  <summary><strong>💡 テンプレート2: Tailwind CSSによるスタイリング</strong></summary>

```tsx
import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";
import { ImageResponseOptions } from "next/server";

async function getLgtmData(inputData: InputData): Promise<GetLgtmDataResult> {
  const designInfo = {
    author: "username",
    description: "デザインの簡潔な紹介文",
    editableFields: ["emoji"],
  };

  const options: ImageResponseOptions = {
    width: 1200,
    height: 630,
    emoji: "twemoji",
  };

  const element = (
    <div tw="flex h-full w-full flex-col items-center justify-center bg-white">
      <p tw="text-[192px]">{inputData.emoji}</p>
      <div tw="m-0 text-5xl">Looks Good To Me</div>
    </div>
  );

  return {
    designInfo,
    element,
    options,
  };
}

export default getLgtmData;
```

</details>

テンプレートを使用したことにより、既にローカル環境で、追加したファイルの内容を確認することができます！<br>
あとは、コードの中身を、独自のデザインに変更していくだけですね 🥂

---

### 5.変更を加え、独自のデザインデータを作成する

前のステップで貼り付けた、<br>
テンプレートのコードの部分は、簡略化すると以下のようになります：

```tsx
function getLgtmData() {
  // Webサイト上に表示する、デザインの情報を記述します。
  const designInfo = {
    ~~
  };
  // LGTM 画像を生成する際のオプションを記述します。
  const options = {
    ~~
  };

  // 作成する LGTM 画像をコーディングします。
  const jsx = {
    ~~
  };

  return { designInfo, element, options };
}
```

なので、**実際に変更を加えるのは、以下の3つです**：

1. **designInfo**: Webサイト上に表示するデザイン情報
1. **options**: オプション
1. **element**: JSX エレメント

#### 5-1.デザイン情報について

Webサイト上に掲載するため、必要なデザイン情報は、以下の通りです：

- author: デザインの作者のGitHubアカウント
- description: デザインの簡潔な紹介文
- editableFields: ユーザーが編集可能なフィールド（複数可）
  - 具体的には、`{inputData.emoji}`のように、記載することで、動的な値を受け取れます。
  - 編集可能な値の種類に関しては、コード上に表示されます 💻

#### 5-2.オプションについて

画像を生成する際に必要な、オプションを記述します！

- 使用可能なオプションは、以下の通りです
  - **画像のサイズ**：横幅`width`と、高さ`height`
  - **絵文字フォントの種類**：`emoji`
  - **テキストのフォントの種類**: `fonts`
- 実際のコードでは、以下のようにオプションを記述できます
  ```jsx
  options: {
   width?: number = 1200
   height?: number = 630
   emoji?: 'twemoji' | 'blobmoji' | 'noto' | 'openmoji' = 'twemoji',
   fonts?: {
     name: string,
     data: ArrayBuffer,
     weight: number,
     style: 'normal' | 'italic'
  }
  ```

**テキストのフォントの種類について**:

- テキストのフォントの種類は、現在`Google Fonts` のみをサポートしています。
- 下記が、フォントを指定する実際のコード例です：
  ```jsx
  import getFontData from "@/utils/google-font";
  ~~
  const options: ImageResponseOptions = {
    width: 1200,
    height: 630,
    emoji: "twemoji",
    fonts: [
      {
        name: "Inter",
        data: await getFontData("https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,700"),
      },
    ],
  };
  ~~
  ```
- `Google Fonts` のURLを取得する手順は、次の通りです：

1. [Google Fonts](https://fonts.google.com)のサイト上から、お好きなフォントを選び、太さ（weight）を選択する
2. 「**Get embed code**」ボタンをクリック
3. `https://fonts.googleapis.com/css2`から始まる、フォントのURLをコピー
   - **`Italic`や`Weight`は、Google Fonts のサイト上で指定してください**
   - 例：`https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,700`
4. ファイル内でインポートした、`getFontData()`の引数に渡す
   - 🚨注意：`import getFontData from "@/utils/google-font";`で、フォント取得用の関数をインポートしてください。

> [!IMPORTANT]
> このテキストのフォントのカスタマイズについては、検証中の機能です。<br>
> 問題点やフィードバックがあれば、ぜひ[Issues](https://github.com/lgtm-factory/lgtm-factory/issues) から報告してください🤝

#### 5-3.JSX エレメントと、動的な値について

デザインが決まったら、 HTML, CSS のコードを書いていきます！

その際、以下のことに注意してください：

- TailwindCSS を使用する場合、以下のように、本来なら`className`と書く箇所を、`tw`に変更する必要があります。
  ```jsx
  <p tw="text-lg">LGTM</p>
  ```
- 動的な値は、`{inputData.emoji}`のように記載することで、使用可能です。
- 使用可能な動的な値の種類に関しては、コード上に表示されます。（テンプレ内の`InputData`型を参照）

また、**コーディング中は、実際にWeb上で画像の表示を確認しながら、作業することをお勧めします。**

- その際、以下のコマンドを使用して、ローカル環境でサーバーを立ち上げることができます:
  ```zsh
  npm run dev
  ```
- もしくは、
  ```zsh
  npm run preview
  ```

---

### 6.変更を commit & push、そして Pull Request を作成する 🎉

作業が完了しましたか？

そしたら、最後に下記３点を確認してください：

- getLgtmData 関数を、デフォルトエクスポートしていること
- getLgtmData 関数の戻り値が、３つあること（デザイン情報、オプション、JSXエレメント）
- ローカル環境でサーバーを立ち上げ、問題なく画像が表示されていること

もちろん、**作業途中であっても、Pull Request を作成することで、メンテナーからのアドバイスを受けることができます！**

問題なければ、:

1. 変更をコミットする。
   ```
   git add .
   git commit -m "theme: 📦 add <new-file>"
   ```
1. 変更をリポートリポジトリに、プッシュする
   ```
   git push origin HEAD
   ```
1. プルリクエストを作成する

---

お疲れ様です 🫡⛑️<br>
そして、LGTM Factory に貢献（コントリビューション）していただき、ありがとうございます 🎉🎉
