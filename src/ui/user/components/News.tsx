import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const News = () => {
  return (
    <div className="block">
      <div className="m-auto flex max-w-5xl justify-center">
        <div className="flex justify-center">
          <div className="w-60">
            <div className="text-2xl font-bold">お知らせ</div>
            <div className="btn-detail mb-5">
              <a href="" className="block text-center">
                お知らせ一覧
                <PlayArrowOutlinedIcon className="absolute right-3 mt-1" />
              </a>
            </div>
            {/* 管理者側で日付・タイトルを追加できるように実装する */}
            <TextField
              id="outlined-required"
              type="date"
              defaultValue=""
              margin="normal"
            />
            <TextField
              id="outlined-required"
              label="Newsタイトル"
              defaultValue=""
              margin="normal"
            />
            <Button variant="contained">追加</Button>
            {/* ここまで管理者側で実装 */}
          </div>
          <div className="ml-10 flex-1">
            <div className="flex justify-center">
              <span className="w-36 border-b-2 border-slate-200 text-xl">
                2023.06.01
              </span>
              <span className="ml-3 flex-1 border-b-2 border-slate-200 text-xl text-blue-400">
                <a href="">6月から診察もWEB予約できるようになりました</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
