import hospital from "../../images/hospital.png";
import { Header } from "../components/Header";
import { ImageAnimation } from "../components/ImageAnimation";
import { MedicalInfo } from "../components/MedicalInfo";
import { Endoscopy } from "../components/Endoscopy";
import { Greeting } from "../components/Greeting";
import { News } from "../components/News";
import { DirectorNote } from "../components/DirectorNote";
import { HospitalInfomation } from "../components/HospitalInfomation";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div>
      <div className="bg-sky-100 text-center">
        <Header />
      </div>
      <div className="">
        <ImageAnimation />
      </div>
      <div className="">
        <News />
      </div>
      <div className="">
        <MedicalInfo />
      </div>
      <div className="">
        <Endoscopy />
      </div>
      <div className="">
        <Greeting />
      </div>
      <div className="">
        <DirectorNote />
      </div>
      <div className="">
        <HospitalInfomation />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};
