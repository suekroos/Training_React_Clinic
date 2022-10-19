import hospital from '../../images/hospital.png'

export const HomePage = () => {


    return(
       <div>
            <div className="bg-slate-500 text-center h-36">
                ヘッダー部分です
            </div>
            <div className="bg-red-400 text-center h-auto">
                画像アニメーション部分です
                <img src={hospital} alt="医療画像です"/>
                <img src={hospital} alt="医療画像です"/>
                <img src={hospital} alt="医療画像です"/>

             </div>
             <div className='bg-yellow-200 text-center'>
                診療のご案内
                <img src={hospital} alt="医療画像です"/>
             </div>
             <div className='bg-green-200 text-center'>
                胃内視鏡検査・大腸内視鏡検査
                <img src={hospital} alt="医療画像です"/>
             </div>
             <div className='bg-blue-200-200 text-center'>
                ご挨拶
                <img src={hospital} alt="医療画像です"/>
             </div>
             <div className='bg-amber-600 text-center'>
                院長ノート
                <img src={hospital} alt="医療画像です"/>
             </div>
             <div className='bg-indigo-500 text-center'>
                病院情報
                <img src={hospital} alt="医療画像です"/>
             </div>
             <div className='bg-green-200 text-center h-36'>
                フッター部分です
             </div>
        </div>

    )
}