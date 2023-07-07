import stomach from "../../images/stomach.png";
import internalMedical from "../../images/stethoscope.png";
import intestine from "../../images/intestine.png";
import anus from "../../images/anus.png";
import inspections from "../../images/test.png";
import examination from "../../images/examination.png";

export const MedicalInfo = () => {
  return (
    <div>
      <div className="font-serif mb-10 text-center text-2xl">
        <h1>診療のご案内</h1>
      </div>
      <ul className="flex justify-center">
        <li>
          <a href="">
            <div className="medicalTreatment-block">
              <div className="medicalTreatment-imageblock">
                <img
                  src={stomach}
                  alt="胃腸内科"
                  className="medicalTreatment-image"
                ></img>
              </div>
            </div>
            <div className="medicalTreatment-text">胃腸内科・消化器内科</div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="medicalTreatment-block">
              <div className="medicalTreatment-imageblock">
                <img
                  src={internalMedical}
                  alt="内科"
                  className="medicalTreatment-image"
                ></img>
              </div>
            </div>
            <div className="medicalTreatment-text">内科</div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="medicalTreatment-block">
              <div className="medicalTreatment-imageblock">
                <img
                  src={intestine}
                  alt="炎症性腸疾患内科"
                  className="medicalTreatment-image"
                ></img>
              </div>
            </div>
            <div className="medicalTreatment-text">炎症性腸疾患内科</div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="medicalTreatment-block">
              <div className="medicalTreatment-imageblock">
                <img
                  src={anus}
                  alt="肛門内科"
                  className="medicalTreatment-image"
                ></img>
              </div>
            </div>
            <div className="medicalTreatment-text">肛門内科</div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="medicalTreatment-block">
              <div className="medicalTreatment-imageblock">
                <img
                  src={inspections}
                  alt="各種検査"
                  className="medicalTreatment-image"
                ></img>
              </div>
            </div>
            <div className="medicalTreatment-text">各種検査</div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="medicalTreatment-block">
              <div className="medicalTreatment-imageblock">
                <img
                  src={examination}
                  alt="各種検診・メタボ検診・人間ドック"
                  className="medicalTreatment-image"
                ></img>
              </div>
            </div>
            <div className="medicalTreatment-text">
              各種検診・メタボ検診・ 人間ドック
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};
