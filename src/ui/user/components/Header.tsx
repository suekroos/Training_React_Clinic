import logo from '../../images/homepagelogo.png'
import right from '../../images/rightcircle.png'

export const Header = () => {
    return(
        <header>
            <div className='flex justify-between font-serif'>
                <div className='flex m-5 text-left'>
                    <img src={logo} alt="ホームページのロゴです" className='h-16 w-16'/>
                    <p className='ml-2'>
                        末盛<br/>
                        胃腸内視鏡・肛門<br/>
                        クリニック<br/>
                    </p>
                </div>
                <nav className='flex justify-between mt-5 flex-col'>
                    <ul className='flex'>
                        <li><a href=''>初診の方へ </a></li>
                        <li className='ml-5'><a href=''>よくあるご質問 </a></li>
                        <li className='ml-5'><a href=''>ご依頼の医療機関様 </a></li>
                        <li className='ml-5'><a href=''>アクセス</a></li>       
                    </ul>
                    <ul className='flex'>
                        <li><a href=''>クリニック紹介</a></li>
                        <li className='ml-5'><a href=''>当クリニックの特徴 </a></li>
                        <li className='ml-5'><a href=''>診療のご案内 </a></li>
                        <li className='ml-5'><a href=''>胃内視鏡検査・大腸内視鏡検査</a></li> 
                        <li className='ml-5'><a href=''>院長ノート</a></li>      
                    </ul>
                </nav>
                <div className='flex flex-col justify-center mr-5'>
                    <div className='flex bg-blue-400  p-2 rounded-xl'>
                        <a href='' className='text-white '>内視鏡WEB予約</a>
                        <img src={right} alt="ホームページのロゴです" className='h-5 w-5 ml-2 mt-1/2'/>
                    </div>
                    <p>00-0000-0000</p>
                </div>
            </div>
        </header>
    )
}
