import logo from "../../images/homepagelogo.png";
import right from "../../images/rightcircle.png";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between font-serif text-lg">
        <div className="m-5 flex text-left">
          <img src={logo} alt="ホームページのロゴです" className="h-16 w-16" />
          <p className="ml-2">
            末盛
            <br />
            胃腸内視鏡・肛門
            <br />
            クリニック
            <br />
          </p>
        </div>
        <nav className="mt-5 flex flex-col justify-between">
          <ul className="flex">
            <li>
              <a href="">初診の方へ </a>
            </li>
            <li className="ml-5">
              <a href="">問診表・同意書 </a>
            </li>
            <li className="ml-5">
              <a href="">よくあるご質問 </a>
            </li>
            <li className="ml-5">
              <a href="">アクセス</a>
            </li>
          </ul>
          <ul className="flex">
            <li>
              <a href="">クリニック紹介</a>
            </li>
            <li className="ml-5">
              <a href="">当クリニックの特徴 </a>
            </li>
            <li className="ml-5">
              <a href="">診療のご案内 </a>
            </li>
            <li className="ml-5">
              <a href="">胃内視鏡検査・大腸内視鏡検査</a>
            </li>
            <li className="ml-5">
              <a href="">院長ノート</a>
            </li>
          </ul>
        </nav>
        <div className="mr-5 flex flex-col justify-center">
          <div className="flex rounded-xl  bg-blue-400 p-2">
            <a href="" className="text-white ">
              WEB予約
            </a>
            <img
              src={right}
              alt="ホームページのロゴです"
              className="mt-1/2 ml-2 h-5 w-5"
            />
          </div>
          <p>00-0000-0000</p>
        </div>
      </div>
    </header>
  );
};
