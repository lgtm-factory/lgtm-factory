# フォーマット  
[Semantic Commit Massage](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)を採用します

- フォーマット: `<Type>: <Emoji> #<Issue Number> <Title>`
- 例: `feat: ✨ #123 ログイン機能の実装をする`
- TypeとTitleは必須
- Issue Numberは強く推奨
- Emojiは任意
- Description（スリーライン）は任意  

## Type  

- どんなコミットなのかシュッと分かるようにPrefixとしてコミットの種別を書きます  
- Semantic Commit Messageと同様の種別を使います  

- chore  
  - タスクファイルなどプロダクションに影響のない修正
- docs  
  - ドキュメントの更新
- feat  
  - ユーザー向けの機能の追加や変更
- fix  
  - ユーザー向けの不具合の修正
- refactor  
  - リファクタリングを目的とした修正
- style  
  - フォーマットなどのスタイルに関する修正
- test  
  - テストコードの追加や修正

##  Emoji
- Typeをより"カラフル"にするためにEmojiを書きます
  - 何でも構いませんが[gitmoji](https://gitmoji.dev/)から選ぶのが便利だと思います

- ただし、Emojiを覚えるコストがあるので必須ではありません 

## Issue Number

- そのコミットに紐づくIssue番号を書きます  
  - リンクになって、トラッキングがしやすいため

- Issueを作っていないケースやhotfixの場合は省略可とします
  - ただし、Issueがあると修正意図が理解しやすいのでIssueを作成することを強く推奨します

- なお、デフォルトの設定だと#がコメント扱いになるのでこの位置に置いています

##  Subject


- いわゆる、変更内容を書きます

- 現在形で（「◯◯した」ではなく「◯◯する」）書くこととします
  - fyi: https://minus9d.hatenablog.com/entry/2014/02/11/125222
- 文字数は特に制限しませんが、20〜30文字以内が適切だと思います
  - fyi: https://twitter.com/_mono/status/1240075582164983809
- Descriptionは必須ではありません
- Subject,Description共に日本語で統一します
