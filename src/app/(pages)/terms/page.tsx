import { siteMetadata } from "@/lib/constants";

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="pt-4 text-2xl font-semibold">{children}</h2>
);

const Alert = ({ children }: { children: React.ReactNode }) => (
  <p className="rounded-lg border border-gray-400 p-4">{children}</p>
);

const List = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: "ul" | "ol";
}) =>
  type === "ul" ? (
    <ul className="list-inside list-disc">{children}</ul>
  ) : (
    <ol className="list-inside list-decimal">{children}</ol>
  );

export default function Terms() {
  return (
    <>
      <div className="my-12 flex w-full">
        <div className="w-full space-y-4 rounded-sm bg-white/50 p-16 leading-relaxed lg:w-3/4">
          <h1 className="text-5xl font-semibold">ご利用について</h1>
          <Heading>はじめに</Heading>
          <p>
            LGTM
            Factory（以下「本サービス」）のご利用にあたっては、以下の規定をご確認ください👋
          </p>
          <p>要点：</p>
          <List type="ul">
            <li>
              個人または商業的なプロジェクトで、無料で画像を使用できます。
            </li>
            <li>リンクまたはクレジット（引用元）の表記は任意です。</li>
            <li>
              画像自体をコンテンツや商品として複製・再配布・販売したりしないでください。
            </li>
          </List>
          <Alert>
            また、利用規約の変更履歴は
            <a
              className="underline"
              href={siteMetadata.GITHUB_URL}
              target="_blank"
            >
              GitHub
            </a>
            で確認できます。
            <br />
            本サービスに関する提案・不明点については、GitHub上の
            <a
              className="underline"
              href={`${siteMetadata.GITHUB_URL}/issues`}
              target="_blank"
            >
              Issues
            </a>
            にてお問い合わせ下さい。
          </Alert>

          <Heading>1. 本サービスの利用目的</Heading>
          <p>
            本サービスは、HTMLとCSS、そしてフリー素材から生成された LGTM（Looks
            Good To Me）画像を提供するオープンソースのプロジェクトです。
            <br />
            本サービスの第一の目的は、ユーザーがコードレビューやコミュニケーションを楽しく効果的に行えるようにすることです。
          </p>

          <Heading>2. 画像の利用規定</Heading>
          <List type="ol">
            <li>
              ユーザーは、規約の範囲内であれば、本サービスで提供される画像を、個人、法人、商用、非商用問わず無料で使用することができます。
            </li>
            <li>
              画像使用時のリンクまたはクレジット（引用元）表記は任意です。表記する場合は、本サービスのリンクまたは「LGTM
              Factory」としてください。
            </li>
            <li>著作権はLGTM Factoryに帰属し、放棄していません。</li>
          </List>
          <h3 className="font-semibold">画像の使用が禁止される場合：</h3>
          <List type="ul">
            <li>画像自体をコンテンツ・商品として再配布・販売</li>
            <li>画像自体をメインのコンテンツとした使用</li>
            <li>公序良俗に反する目的での利用</li>
            <li>
              本サービスまたは第三者に対する攻撃的・差別的・性的・過激な利用
            </li>
            <li>反社会的勢力や違法行為に関わる使用</li>
            <li>その他運営者が不適切と判断した場合</li>
          </List>

          <Heading>3. その他の禁止事項</Heading>
          <List type="ol">
            <li>
              過剰なリクエスト：サーバーに過度の負荷をかけるような大量のリクエストの送信
            </li>
            <li>
              迷惑行為：本サービスの運営を妨げる行為や、他のユーザーに迷惑をかける行為
            </li>
          </List>
          <p>
            上記を確認した場合、特定のユーザーに対して予告なくアクセスを禁止・制限することがあります。
          </p>

          <Heading>4. 免責事項</Heading>
          <List type="ol">
            <li>
              本サービスの使用及び閲覧は、ユーザーの責任において行うものとします。特定の目的への適合性や、エラーやバグがないことを保証するものではありません
            </li>
            <li>
              本サービスの利用により生じた損害について、運営者は一切の責任を負いません。
            </li>
          </List>

          <Heading>5. その他</Heading>
          <List type="ol">
            <li>
              運営者は、事前の通知なく本サービスの内容を変更したり、サービスを一時的または永続的に停止したりする権利を有します。
            </li>
            <li>
              運営者は、必要に応じて本規約を変更することがあり、変更後の規約は、本サービス上で公開された時点で効力を生じるものとします。
            </li>
            <li>
              ユーザーは定期的に本規約を確認する責任があります。本サービスを利用し続けることで、変更後の規約にも同意したものとみなされます。
            </li>
          </List>
        </div>

        {/* TODO: 画像を配置 */}
        {/* <div className="sticky top-0 hidden h-screen w-1/4 flex-col items-center justify-center px-4 lg:flex"></div> */}
      </div>
    </>
  );
}
