## ブランチ戦略について

- LGTM Factory では、シンプルかつ柔軟なワークフローで、チーム開発の効率化を実現するため、[GitHub Flow](https://docs.github.com/ja/get-started/using-github/github-flow) を採用します。
- main ブランチから各自ブランチを作成し、作業を開始してください。
- ブランチ作成時のコマンド:
  - `git branch -c ブランチ名`

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

