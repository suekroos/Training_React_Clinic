import { useEffect, useState } from "react";
import medical_image1 from "../../images/medical_bear.jpg";
import medical_image2 from "../../images/medical_ope.jpg";
import medical_image3 from "../../images/medical_woman.jpg";

// 画像のアニメーション表示
export const ImageAnimation = () => {
  //表示している画像に合わせて青丸を表示するセット関数
  const [visibleCircle, setVisibleCircle] = useState(0);

  const circleCount = 3;

  //3秒ごとにvisibleCircleの値を更新する
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCircle((prev) => (prev + 1) % circleCount);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //画像が表示されるたびに青丸の表示場所をcirclesに格納する
  const circles = Array.from({ length: circleCount }, (_, index) => (
    <div
      key={index}
      className={index === visibleCircle ? "full-circle" : "empty-circle"}
    ></div>
  ));

  return (
    <div className="flex justify-center">
      <div className="relative h-700 w-900 max-w-full ">
        <img
          src={medical_image1}
          alt="medical_image"
          className="img-auto-anime"
        />
        <img
          src={medical_image2}
          alt="medical_image"
          className="img-auto-anime"
        />
        <img
          src={medical_image3}
          alt="medical_image"
          className="img-auto-anime"
        />
      </div>
      <div className="h-25 relative ml-6 mb-20 flex w-5 flex-col-reverse items-end">
        <div>{circles}</div>
      </div>
    </div>
  );
};
