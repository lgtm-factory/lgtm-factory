type GoogleFontUrl = `https://fonts.googleapis.com/css2${string}`;

const fetchFontCss = async (url: GoogleFontUrl): Promise<string> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch CSS: ${response.statusText}`);
  }
  return response.text();
};

const parseFontFileUrlFromCss = (cssText: string): string => {
  const urlMatch = cssText.match(/url\((.*?)\)/);
  if (!urlMatch) {
    throw new Error("Font file URL not found in CSS");
  }
  return urlMatch[1];
};

const fetchFontFileData = async (url: string): Promise<ArrayBuffer> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch font file data: ${response.statusText}`);
  }
  return response.arrayBuffer();
};

/**
 * Google Fontsからフォントデータを取得し処理します。
 *
 * この関数は、以下のステップを実行します：
 * 1. 指定されたフォントのCSSを取得
 * 2. CSSから実際のフォントファイルURLを抽出
 * 3. フォントファイルデータを取得
 *
 * @throws プロセスが失敗した場合、エラーをスローします。含まれるケース：
 *         - 無効またはアクセス不能なGoogle Fonts URL
 *         - CSSからフォントファイルURLの抽出の失敗
 *         - フォントファイルデータの取得の失敗
 */
export const getFontData = async (url: GoogleFontUrl): Promise<ArrayBuffer> => {
  try {
    const cssText = await fetchFontCss(url);
    const fontFileUrl = parseFontFileUrlFromCss(cssText);
    return await fetchFontFileData(fontFileUrl);
  } catch (error) {
    throw new Error(
      `Error fetching font data: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
};

export default getFontData;
