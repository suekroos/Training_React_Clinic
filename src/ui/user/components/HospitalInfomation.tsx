import logo from "../../images/homepagelogo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const createData = (
  consultation_time: string,
  mon: string,
  tue: string,
  wed: string,
  thu: string,
  fri: string,
  sat: string,
  sun: string
) => {
  return { consultation_time, mon, tue, wed, thu, fri, sat, sun };
};

const day_rows = [
  createData("8:30-9:30 早朝胃内視鏡", "○", "✕", "○", "○", "○", "○", "✕"),
  createData("9:30-12:30 午前診", "○", "✕", "○", "○", "○", "○", "✕"),
  createData(
    "13:00-16:00 検査・治療・専門外来",
    "○",
    "✕",
    "○",
    "○",
    "○",
    "○",
    "✕"
  ),
  createData("16:30-18:30 午後診", "○", "✕", "○", "○", "○", "✕", "✕"),
];

export const HospitalInfomation = () => {
  return (
    <div className="mt-5 block">
      <div className="m-auto flex max-w-6xl justify-between">
        <div className="w-[600px]">
          <div className="flex justify-between">
            <div className="m-5 flex justify-start text-left">
              <img
                src={logo}
                alt="ホームページのロゴです"
                className="h-16 w-16"
              />
              <p className="ml-2">
                末盛
                <br />
                胃腸内視鏡・肛門
                <br />
                クリニック
                <br />
              </p>
            </div>
            <div>
              <p>
                〒000-0000
                <br />
                兵庫県兵庫市兵庫町1-1
              </p>
              <p className="text-lg font-bold">
                <PhoneIcon className="text-blue-400" />
                00-0000-0000
              </p>
              <div className="flex">
                <p className="text-sm opacity-80">電話受付:</p>
                <p className="text-sm opacity-80">
                  平日8:30~12:30, 15:30~18:30
                  <br />
                  土曜8:00~12:30
                </p>
              </div>
            </div>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label="consultation table">
              <TableHead>
                <TableRow className="bg-blue-400 text-white">
                  <TableCell>診療時間</TableCell>
                  <TableCell align="right">月</TableCell>
                  <TableCell align="right">火</TableCell>
                  <TableCell align="right">水</TableCell>
                  <TableCell align="right">木</TableCell>
                  <TableCell align="right">金</TableCell>
                  <TableCell align="right">土</TableCell>
                  <TableCell align="right">日</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {day_rows.map((row) => (
                  <TableRow
                    key={row.consultation_time}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="bg-blue-400"
                    >
                      {row.consultation_time}
                    </TableCell>
                    <TableCell align="right" className="">
                      {row.mon}
                    </TableCell>
                    <TableCell align="right">{row.tue}</TableCell>
                    <TableCell align="right">{row.wed}</TableCell>
                    <TableCell align="right">{row.thu}</TableCell>
                    <TableCell align="right">{row.fri}</TableCell>
                    <TableCell align="right">{row.sat}</TableCell>
                    <TableCell align="right">{row.sun}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="btn-detail-full m-auto mt-5 h-10 w-[600px] text-center">
            <a href="" className="block">
              診察・内視鏡・ワクチンWEB予約
            </a>
          </div>
          <div className="mt-5 text-sm leading-7 opacity-80">
            <p>
              当院は予約制で診療を行います。
              <br />
              <b>WEB予約</b>
              ＜ご新規の方＞ 当日予約はお電話で、明日以降はWEB予約が可能です。
              <br />
              ＜受診歴のある方＞ 当日も含めWEB予約が可能です。
              <br />
              <b>電話予約</b>
              ・お電話がつながる時間
              <br />
              平日 8:15～12:30、15:30~18:20 土曜 8:15～12:30
              <br />
              ・お電話は繋がりにくい場合があります。WEB予約をご活用ください。
              <br />
              <b>発熱外来</b>
              ・●●が指定した「外来対応医療機関」です。
              <br />
              ・完全予約制です。（電話予約のみ）
              <br />
              ※予約には受診歴の有無など条件があります。
              <br />
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26194.27738441654!2d135.48102194313552!3d34.849073737126595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f98c6d0ac613%3A0x4cd7b8ae9c8328a0!2z566V6Z2i5aSn5rud!5e0!3m2!1sja!2sjp!4v1688907604935!5m2!1sja!2sjp"
            width="600"
            height="450"
            className="border-0"
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
