import checkup from "../../images/checkup.jpg";
import stomach from "../../images/stomach.png";
import intestine from "../../images/intestine.png";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

export const Endoscopy = () => {
  return (
    <div className="mt-20 block">
      <div className="flex">
        <div className="basis-1/2">
          <img
            src={checkup}
            alt="checkup_image"
            className="div -10 rounded-md"
          ></img>
        </div>
        <div className="max-w-full basis-1/2 justify-items-center text-center">
          <div className=" inline-block w-96">
            <h1 className="font-mono text-xl font-bold">
              胃内視鏡検査・大腸内視鏡検査
            </h1>
            <div className="font-serif mt-5 text-left text-lg leading-6">
              当クリニックでは、麻酔や炭酸ガスを用いた苦痛の少ない方法で、
              からだにやさしい内視鏡検査を心がけています。
            </div>
            <div className="mt-10">
              <ul className="flex justify-center">
                <li>
                  <a href="">
                    <div className="medicalTreatment-block">
                      <div className="medicalTreatment-imageblock">
                        <img
                          src={stomach}
                          alt="胃内視鏡検査"
                          className="medicalTreatment-image"
                        ></img>
                      </div>
                    </div>
                    <div className="medicalTreatment-text">胃内視鏡検査</div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <div className="medicalTreatment-block">
                      <div className="medicalTreatment-imageblock">
                        <img
                          src={intestine}
                          alt="大腸内視鏡検査"
                          className="medicalTreatment-image"
                        ></img>
                      </div>
                    </div>
                    <div className="medicalTreatment-text">大腸内視鏡検査</div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="btn-detail">
                <a href="" className="block">
                  当クリニックの内視鏡検査の特徴
                  <PlayArrowOutlinedIcon className="absolute right-3 mt-1" />
                </a>
              </div>
              <div className="btn-detail">
                <a href="" className="block">
                  当院の内視鏡検査の実績
                  <PlayArrowOutlinedIcon className="absolute right-3 mt-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
