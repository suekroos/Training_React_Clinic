import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import thank from "../../images/Thankyou.png";

export const Greeting = () => {
  return (
    <div className="m-auto mt-20 block h-96 max-w-screen-lg bg-doctor bg-cover">
      <div className="absolute right-40 ">
        <div className="rounded-lg border-2 border-blue-400 pt-10 pr-5 pb-10 pl-5 text-blue-400 [writing-mode:vertical-rl]">
          はじめまして。
          <br />
          院長の末盛です。
        </div>
      </div>
      <div className="relative box-border flex h-96 w-96 flex-col justify-center bg-cover">
        <div>
          <img
            src={thank}
            alt="thank-image"
            className="absolute -left-14 top-5 block opacity-20"
          ></img>
        </div>
        <div>
          <p className="-mb-5 rounded-t-md text-xl font-bold">
            ごあいさつ
            <br />
            <br />
          </p>
          <p className="rounded-b-md">
            当クリニックでは地元のみなさまのかかりつけ医として日々の健康に寄り添い、
            皆様の健康長寿にかかわれるように誠実で心のこもった医療をご提供して参ります。
            <br />
            <br />
            末盛胃腸内視鏡・肛門クリニックをどうぞよろしくお願い致します。
          </p>
        </div>
        <div className="btn-detail text-center">
          <a href="" className="block">
            クリニック紹介
            <PlayArrowOutlinedIcon className="absolute right-3 mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
