# ブランチについて

## ブランチ戦略について

- LGTM Factory では、シンプルかつ柔軟なワークフローで、チーム開発の効率化を実現するため、[GitHub Flow](https://docs.github.com/ja/get-started/using-github/github-flow) を採用します。
- main ブランチから各自ブランチを作成し、作業を開始してください。

## ブランチに関するコマンド

- ブランチ作成時のコマンド:
  - `git branch ブランチ名`
- ブランチを移動するコマンド:
  - `git switch ブランチ名`
- ブランチ作成とブランチ移動を同時に行うコマンド:
  - `git switch -c ブランチ名`

## ブランチ名のフォーマット

- `<Title>-<Issue Number>`
- イシュー番号 123 にて、ログイン機能を追加する例: `add-login-function-123`
- Title はイシューのタイトルを端的に要約し、英語で記述してください。

### 注意点

- 特殊文字を含まないブランチ名を作成してください。
- ブランチ名は文字で始める必要があります。
- 安全に使用できる文字セットは以下の通りです。
  - 英語のアルファベット (a から z、A から Z)
  - 数字 (0 から 9)
  - 限定された句読点文字のセット:
    - ピリオド (.)
    - ハイフン (-)
    - アンダースコア (\_)
    - スラッシュ (/)
- 参考: [ブランチとタグの名前付け -GitHub Docs](https://docs.github.com/ja/get-started/using-git/dealing-with-special-characters-in-branch-and-tag-names#naming-branches-and-tags)

# コミットメッセージについて

## フォーマット  
[Semantic Commit Massage](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)を採用します

- フォーマット: `<Type>: <Emoji> #<Issue Number> <Title>`
- 例: `feat: ✨ #123 ログイン機能の実装をする`
- TypeとTitleは必須
- Issue Numberは強く推奨
- Emojiは任意
- Description（スリーライン）は任意  

### Type, Emoji

- どんなコミットなのかシュッと分かるようにPrefixとしてコミットの種別を書きます  
- Semantic Commit Messageと同様の種別を使います  
  
- Emojiは必須ではありません

- chore 🧹  
  - タスクファイルなどプロダクションに影響のない修正
- docs 📚  
  - ドキュメントの更新
- feat ✨  
  - ユーザー向けの機能の追加や変更
- fix 🛠️  
  - ユーザー向けの不具合の修正
- refactor 🔄  
  - リファクタリングを目的とした修正
- style 🎨   
  - フォーマットなどのスタイルに関する修正
- test 🧪  
  - テストコードの追加や修正

### Issue Number

- そのコミットに紐づくIssue番号を書きます  
  - リンクになって、トラッキングがしやすいため

- Issueを作っていないケースやhotfixの場合は省略可とします
  - ただし、Issueがあると修正意図が理解しやすいのでIssueを作成することを強く推奨します

- なお、デフォルトの設定だと#がコメント扱いになるのでこの位置に置いています

###  Subject

- いわゆる、変更内容を書きます
#### Title
- 現在形で（「◯◯した」ではなく「◯◯する」）書くこととします
  - fyi: https://minus9d.hatenablog.com/entry/2014/02/11/125222
- 文字数は特に制限しませんが、20〜30文字以内が適切だと思います
  - fyi: https://twitter.com/_mono/status/1240075582164983809

#### Description

- Descriptionは必須ではありません

- スリーライン方式で書くと分かりやすくなります
  - スリーラインは任意です

1.  何が行われたのか: 変更の内容を簡潔に説明します。
2.  なぜそれが行われたのか: 変更の理由や背景を説明します。
3.  次にどうするか: 次のステップや関連する事項について言及します。

例  
```
何が行われたのか: ログインボタンがクリックされても反応しないバグを修正。

なぜそれが行われたのか: ユーザーがログインできない問題が報告されたため。

次にどうするか: テストケースを追加し、ログイン機能が正しく動作することを確認する。
```

- Title,Description共に日本語で統一します
