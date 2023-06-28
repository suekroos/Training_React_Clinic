import checkup from "../../images/checkup.jpg";

export const Endoscopy = () => {
  return (
    <div>
      <div className="flex p-20">
        <div>
          <img
            src={checkup}
            alt="checkup_image"
            className="rounded-md p-10"
          ></img>
        </div>
        <div className="flex-auto justify-items-center text-center">
          <h1 className="font-serif text-lg font-bold">
            胃内視鏡検査・大腸内視鏡検査
          </h1>
        </div>
      </div>
    </div>
  );
};
