export const Greeting = () => {
    return(
        <div className='bg-doctor bg-cover bg-right-top '>
            <div className="text-center text-2xl font-serif mb-10">
                <h1>院長ノート</h1>
            </div>
            <div className="h-96 w-96">
                <p className='text-xl ml-10 bg-sky-100 rounded-t-md'>ごあいさつ<br/><br/></p>
                <p className=' ml-10 bg-sky-100 rounded-b-md'>
                    当クリニックでは地元のみなさまのかかりつけ医として日々の健康に寄り添い、
                    皆様の健康長寿にかかわれるように誠実で心のこもった医療をご提供して参ります。<br/><br/>
                    末盛胃腸内視鏡・肛門クリニックをどうぞよろしくお願い致します。
                </p>
            </div>
        </div>
    )
}