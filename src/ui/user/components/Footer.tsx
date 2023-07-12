import MenuBookIcon from "@mui/icons-material/MenuBook";

export const Footer = () => {
  return (
    <div className="my-10 block border-t-4 border-blue-200">
      <div className="flex justify-center">
        <div className="footer-block">
          <div className="footer-maintext">
            <a href="">クリニック紹介</a>
          </div>
          <ul className="footer-subtext">
            <li>
              <a href="">院長・スタッフ紹介</a>
            </li>
            <li>
              <a href="">クリニックの基本情報</a>
            </li>
            <li>
              <a href="">内視鏡検査をご依頼の医療機関さま</a>
            </li>
          </ul>
          <div className="footer-maintext">
            <a href="">当クリニックの特徴</a>
          </div>
        </div>
        <div className="footer-block">
          <div className="footer-maintext">
            <a href="">診療のご案内</a>
          </div>
          <ul className="footer-subtext">
            <li>
              <a href="">胃腸内科・消化器内科</a>
            </li>
            <li>
              <a href="">内科</a>
            </li>
            <li>
              <a href="">炎症性腸疾患内科</a>
            </li>
            <li>
              <a href="">肛門内科</a>
            </li>
            <li>
              <a href="">各種検査</a>
            </li>
            <li>
              <a href="">各種検診・メタボ検診・人間ドック</a>
            </li>
          </ul>
        </div>
        <div className="footer-block">
          <div className="footer-maintext">
            <a href="">胃内視鏡検査・大腸内視鏡検査</a>
          </div>
          <ul className="footer-subtext">
            <li>
              <a href="">胃内視鏡検査</a>
            </li>
            <li>
              <a href="">大腸内視鏡検査</a>
            </li>
            <li>
              <a href="">当クリニックの内視鏡検査の特徴</a>
            </li>
          </ul>
        </div>
        <div className="footer-block">
          <ul className="footer-infotext">
            <li>
              <a href="">初診の方へ</a>
            </li>
            <li>
              <a href="">問診表・同意書</a>
            </li>
            <li>
              <a href="">よくあるご質問</a>
            </li>
            <li>
              <a href="">アクセス</a>
            </li>
            <li>
              <a href="">マイナンバーカードの健康保険証利用について</a>
            </li>
            <li>
              <a href="">内視鏡検査をご依頼の医療機関さま</a>
            </li>
            <li>
              <a href="">採用案内</a>
            </li>
            <li>
              <a href="">MR等、関係者の方へ</a>
            </li>
            <li>
              <a href="">プライバシーポリシー</a>
            </li>
          </ul>
          <div className="ml-5 rounded-lg border-4 border-blue-400 p-10 text-center text-2xl">
            <a href="">
              院長
              <MenuBookIcon className="" />
              ノート
            </a>
          </div>
        </div>
      </div>
      <small className="mt-5 flex justify-center text-center">
        Copyright SUEMORI CLINIC ALL RIGHT RESEREVED
      </small>
    </div>
  );
};
