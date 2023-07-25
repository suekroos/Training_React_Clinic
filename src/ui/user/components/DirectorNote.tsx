import MenuBookIcon from "@mui/icons-material/MenuBook";
import stomach from "../../images/stomach.png";
import brain from "../../images/brain.png";
import medicaldevice from "../../images/medicaldevice.jpg";
import exam from "../../images/exam.png";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

export const DirectorNote = () => {
  return (
    <div className="mt-10 block">
      <div className="m-auto flex w-72 justify-center text-center ">
        <div>
          <p className="text-blue-400">
            疾患などさらに詳しく知りたい方はこちら
          </p>
          <p className="border-t-2 border-b-2 border-blue-400 text-lg">
            院長
            <MenuBookIcon className="" />
            ノート
          </p>
        </div>
      </div>
      <div className="mt-5">
        <ul className="flex justify-center">
          <li>
            <div>
              <a href="" className="note-block">
                <div className="note-imageblock">
                  <img
                    src={stomach}
                    alt="大腸・胃内視鏡検査"
                    className="note-image"
                  ></img>
                </div>
              </a>
            </div>
            <div className="m-auto ml-10 h-20 w-56 text-center">
              <a href="" className="exam-link">
                内視鏡検査
              </a>
              <a href="" className="exam-link">
                大腸内視鏡検査
              </a>
              <a href="" className="exam-link">
                胃内視鏡検査
              </a>
            </div>
            <div className="note-text">
              <a href="">当クリニックの内視鏡検査実績</a>
            </div>
          </li>
          <li>
            <a href="" className="note-block">
              <div className="note-imageblock">
                <img
                  src={brain}
                  alt="大腸・胃内視鏡検査"
                  className="note-image"
                ></img>
              </div>
            </a>
            <div className="m-auto ml-10 h-20 w-56 text-center">
              <a href="" className="exam-link">
                内視鏡検査
              </a>
              <a href="" className="exam-link">
                大腸内視鏡検査
              </a>
              <a href="" className="exam-link">
                胃内視鏡検査
              </a>
            </div>
            <div className="note-text">
              <a href="">質と高い診断を支える高精度内視鏡と画質</a>
            </div>
          </li>
          <li>
            <a href="" className="note-block">
              <div className="note-imageblock">
                <img
                  src={medicaldevice}
                  alt="大腸・胃内視鏡検査"
                  className="note-image mix-blend-multiply"
                ></img>
              </div>
            </a>
            <div className="m-auto ml-10 h-20 w-56 text-center">
              <a href="" className="exam-link">
                内視鏡検査
              </a>
              <a href="" className="exam-link">
                大腸内視鏡検査
              </a>
              <a href="" className="exam-link">
                胃内視鏡検査
              </a>
            </div>
            <div className="note-text">
              <a href="">
                高精度の内視鏡検査について
                <br />
                (誰に検査を任せる？)
              </a>
            </div>
          </li>
          <li>
            <a href="" className="note-block">
              <div className="note-imageblock">
                <img src={exam} alt="内視鏡検査" className="note-image"></img>
              </div>
            </a>
            <div className="m-auto ml-10 h-20 w-56 text-center">
              <a href="" className="exam-link">
                内視鏡検査
              </a>
            </div>
            <div className="note-text">
              <a href="">
                高精度な内視鏡けんさについて
                <br />
                (特殊な光)
              </a>
            </div>
          </li>
        </ul>
        <div className="btn-detail m-auto mt-5 h-10 w-40 text-center">
          <a href="" className="block">
            一覧を見る
            <PlayArrowOutlinedIcon className="absolute right-3 mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
