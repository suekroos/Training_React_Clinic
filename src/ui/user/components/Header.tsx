import logo from '../../images/homepagelogo.png'

export const Header = () => {
    return(
        <div className='flex justify-between font-serif'>
            <div className='flex m-4 text-left'>
                <img src={logo} alt="ホームページのロゴです" className='h-16 w-16'/>
                <p className='ml-2'>
                    末盛<br/>
                    胃腸内視鏡・肛門<br/>
                    クリニック<br/>
                </p>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    )
}
