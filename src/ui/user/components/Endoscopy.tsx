import checkup from "../../images/checkup.jpg";

export const Endoscopy = () => {
  return (
    <div>
      <div className="flex p-20">
        <div>
          <img src={checkup} alt='checkup_image' className="p-10 rounded-md"></img>
        </div>
        <div className="p-2 justify-items-center text-center flex-auto">
          <h1 className="text-lg font-serif font-bold ">胃内視鏡検査・大腸内視鏡検査</h1>
        </div>
      </div>
    </div>
  );
};
