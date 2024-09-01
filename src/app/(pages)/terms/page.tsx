import { siteMetadata } from "@/lib/constants";

export default function Terms() {
  return (
    <>
      <div className="my-12 flex w-full">
        <div className="w-full rounded-sm bg-white bg-opacity-50 p-16 leading-relaxed lg:w-3/4">
          <h1 className="text-5xl font-semibold">ご利用について</h1>
          <h2 className="mt-8 text-2xl font-semibold">はじめに</h2>
          <p className="mt-4">
            LGTM
            Factory（以下「本サービス」）のご利用にあたっては、以下の規定をご確認ください👋
          </p>
          <p className="mt-4">要点：</p>
          <ul className="mt-4 list-inside list-disc">
            <li>
              個人または商業的なプロジェクトで、無料で画像を使用できます。
            </li>
            <li>リンクまたはクレジット（引用元）の表記は任意です。</li>
            <li>
              画像自体をコンテンツや商品として複製・再配布・販売したりしないでください。
            </li>
          </ul>
          <p className="mt-4 rounded-lg border border-gray-400 p-4">
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
          </p>

          <h2 className="mt-8 text-2xl font-semibold">
            1. 本サービスの利用目的
          </h2>
          <p className="mt-4">
            本サービスは、HTMLとCSS、そしてフリー素材から生成された LGTM（Looks
            Good To Me）画像を提供するオープンソースのプロジェクトです。
            <br />
            本サービスの第一の目的は、ユーザーがコードレビューやコミュニケーションを楽しく効果的に行えるようにすることです。
          </p>

          <h2 className="mt-8 text-2xl font-semibold">2. 画像の利用規定</h2>
          <ol className="mt-4 list-inside list-decimal">
            <li>
              ユーザーは、規約の範囲内であれば、本サービスで提供される画像を、個人、法人、商用、非商用問わず無料で使用することができます。
            </li>
            <li>
              画像使用時のリンクまたはクレジット（引用元）表記は任意です。表記する場合は、本サービスのリンクまたは「LGTM
              Factory」としてください。
            </li>
            <li>著作権はLGTM Factoryに帰属し、放棄していません。</li>
          </ol>

          <h3 className="mt-4 font-semibold">画像の使用が禁止される場合：</h3>
          <ul className="mt-4 list-inside list-disc">
            <li>画像自体をコンテンツ・商品として再配布・販売</li>
            <li>画像自体をメインのコンテンツとした使用</li>
            <li>公序良俗に反する目的での利用</li>
            <li>
              本サービスまたは第三者に対する攻撃的・差別的・性的・過激な利用
            </li>
            <li>反社会的勢力や違法行為に関わる使用</li>
            <li>その他運営者が不適切と判断した場合</li>
          </ul>

          <h2 className="mt-8 text-2xl font-semibold">3. その他の禁止事項</h2>
          <ol className="mt-4 list-inside list-decimal">
            <li>
              過剰なリクエスト：サーバーに過度の負荷をかけるような大量のリクエストの送信
            </li>
            <li>
              迷惑行為：本サービスの運営を妨げる行為や、他のユーザーに迷惑をかける行為
            </li>
          </ol>
          <p className="mt-4">
            上記を確認した場合、特定のユーザーに対して予告なくアクセスを禁止・制限することがあります。
          </p>

          <h2 className="mt-8 text-2xl font-semibold">4. 免責事項</h2>

          <ol className="mt-4 list-inside list-decimal">
            <li>
              本サービスの使用及び閲覧は、ユーザーの責任において行うものとします。特定の目的への適合性や、エラーやバグがないことを保証するものではありません
            </li>
            <li>
              本サービスの利用により生じた損害について、運営者は一切の責任を負いません。
            </li>
          </ol>

          <h2 className="mt-8 text-2xl font-semibold">5. その他</h2>
          <ol className="mt-4 list-inside list-decimal">
            <li>
              運営者は、事前の通知なく本サービスの内容を変更したり、サービスを一時的または永続的に停止したりする権利を有します。
            </li>
            <li>
              運営者は、必要に応じて本規約を変更することがあり、変更後の規約は、本サービス上で公開された時点で効力を生じるものとします。
            </li>
            <li>
              ユーザーは定期的に本規約を確認する責任があります。本サービスを利用し続けることで、変更後の規約にも同意したものとみなされます。
            </li>
          </ol>
        </div>

        {/* TODO: 画像を配置 */}
        {/* <div className="sticky top-0 hidden h-screen w-1/4 flex-col items-center justify-center px-4 lg:flex"></div> */}
      </div>
    </>
  );
}
