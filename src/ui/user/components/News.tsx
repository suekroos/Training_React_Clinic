import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

export const News = () => {
  return (
    <div className="block">
      <div className="flex max-w-5xl justify-center">
        <div className="flex justify-center">
          <div className="w-60">
            <div className="text-2xl font-bold">お知らせ</div>
            <div className="btn-detail">
              <a href="" className="block text-center">
                お知らせ一覧
                <PlayArrowOutlinedIcon className="absolute right-3 mt-1" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-center">
              <span className="w-36 border-b-2 border-slate-300">
                2023.06.01
              </span>
              <span className="ml-3 flex-1 border-b-2 border-slate-300 text-blue-400">
                <a href="">6月から診察もWEB予約できるようになりました</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
