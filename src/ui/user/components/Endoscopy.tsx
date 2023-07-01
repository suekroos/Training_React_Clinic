import checkup from "../../images/checkup.jpg";
import stomach from "../../images/stomach.png";
import intestine from "../../images/intestine.png";

export const Endoscopy = () => {
  return (
    <div>
      <div className="flex p-10">
        <div className="basis-1/2">
          <img
            src={checkup}
            alt="checkup_image"
            className="rounded-md p-10"
          ></img>
        </div>
        <div className="max-w-full basis-1/2 justify-items-center text-center">
          <div className=" inline-block w-96">
            <h1 className="font-mono text-xl font-bold">
              胃内視鏡検査・大腸内視鏡検査
            </h1>
            <p className="mt-5 text-left font-serif text-lg leading-6">
              当クリニックでは、麻酔や炭酸ガスを用いた苦痛の少ない方法で、
              からだにやさしい内視鏡検査を心がけています。
            </p>
            <div className="mt-10">
              <ul className="flex justify-center">
                <li>
                  <a href="" className="medicalTreatment-block">
                    <div className="medicalTreatment-imageblock">
                      <img
                        src={stomach}
                        alt="胃内視鏡検査"
                        className="medicalTreatment-image"
                      ></img>
                    </div>
                    <p>胃内視鏡検査</p>
                  </a>
                </li>
                <li>
                  <a href="" className="medicalTreatment-block">
                    <div className="medicalTreatment-imageblock">
                      <img
                        src={intestine}
                        alt="大腸内視鏡検査"
                        className="medicalTreatment-image"
                      ></img>
                    </div>
                    <p>大腸内視鏡検査</p>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="btn-detail">
                <a href="">当クリニックの内視鏡検査の特徴</a>
              </div>
              <div className="btn-detail">
                <a href="">当院の内視鏡検査の実績</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
