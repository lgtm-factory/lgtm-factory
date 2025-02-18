import { GetLgtmDataResult, InputData } from "@/types/lgtm-data";
import getFontData from "@/utils/google-font";
import { ImageResponseOptions } from "next/server";

async function getLgtmData(inputData: InputData): Promise<GetLgtmDataResult> {
  const designInfo = {
    author: "risu",
    description: "りすさんのイラストです。",
    editableFields: ["color"],
  };

  const options: ImageResponseOptions = {
    width: 269,
    height: 308,
    emoji: "noto",
    fonts: [
      {
        name: "Caveat",
        data: await getFontData(
          "https://fonts.googleapis.com/css2?family=Caveat:wght@700",
        ),
        weight: 700,
      },
      {
        name: "Yusei Magic",
        data: await getFontData(
          "https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap",
        ),
        weight: 400,
      },
    ],
  };

  const element = (
    <div tw="flex h-full w-full flex-col items-center justify-center rounded-2xl">
      <div
        tw="absolute flex p-4 rounded-2xl"
        style={{ backgroundColor: inputData.color }}
      >
        <svg
          width="217"
          height="190"
          viewBox="0 0 217 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="217" height="190" />
          <ellipse cx="35" cy="30.3191" rx="35" ry="30.3191" fill="#EABE93" />
          <ellipse
            cx="185.5"
            cy="30.8245"
            rx="31.5"
            ry="27.7926"
            fill="#EABE93"
          />
          <ellipse cx="31" cy="36" rx="18" ry="19" fill="#F6E8DA" />
          <ellipse cx="186" cy="36" rx="18" ry="19" fill="#F6E8DA" />
          <ellipse cx="112.5" cy="103" rx="99.5" ry="86" fill="#EABE93" />
          <mask
            id="mask0_0_1"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="12"
            y="18"
            width="199"
            height="172"
          >
            <ellipse
              cx="111.5"
              cy="104.096"
              rx="99.5"
              ry="85.9043"
              fill="#EABE93"
            />
          </mask>
          <g mask="url(#mask0_0_1)">
            <ellipse
              cx="112.5"
              cy="201.117"
              rx="73.5"
              ry="76.8085"
              fill="#F6E8DA"
            />
            <path
              d="M118.377 71.6395C115.183 75.5821 109.173 75.594 105.964 71.6641L66.3911 23.2019C62.1294 17.9829 65.8341 10.1552 72.5722 10.1419L151.529 9.98537C158.267 9.97201 162.002 17.7849 157.761 23.0208L118.377 71.6395Z"
              fill="#D99C7C"
            />
          </g>
          <ellipse cx="86" cy="104.5" rx="7" ry="9.5" fill="#61442E" />
          <ellipse cx="139" cy="104.5" rx="7" ry="9.5" fill="#61442E" />
          <ellipse cx="111" cy="125" rx="8" ry="6" fill="#61442E" />
          <path
            d="M135.586 133.656C131.518 150.022 116.272 137.405 109.158 129.05"
            stroke="#61442E"
            stroke-width="4"
          />
          <path
            d="M87.0237 133.146C91.092 149.512 106.338 136.895 113.452 128.54"
            stroke="#61442E"
            stroke-width="4"
          />
          <ellipse cx="61" cy="125" rx="18" ry="16" fill="#F1A38E" />
          <ellipse cx="163" cy="125" rx="18" ry="16" fill="#F1A38E" />
        </svg>
      </div>
      <div tw="w-[217px] h-[230px] flex overflow-hidden items-end text-center justify-center">
        <p
          tw="text-[36px]"
          style={{
            transform: "rotate(-6.5deg)",
            wordBreak: "break-all",
          }}
        >
          looks good to me
        </p>
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
