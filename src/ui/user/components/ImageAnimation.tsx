import medical_image1 from '../../images/medical_bear.jpg'
import medical_image2 from '../../images/medical_ope.jpg'
import medical_image3 from '../../images/medical_woman.jpg'

// 画像のアニメーション表示
export const ImageAnimation = () => {
    return(
        <div className='flex justify-center '>
            <div className='relative w-900 h-700 max-w-full '>
                <img src={medical_image1} alt='medical_image' className='img-auto-anime' />
                <img src={medical_image2} alt='medical_image' className='img-auto-anime' />
                <img src={medical_image3} alt='medical_image' className='img-auto-anime' />
            </div>
            <div className='flex items-end flex-col-reverse ml-6 mb-20 w-5 h-25'>
                <div className='rounded-full bg-sky-400 w-5 h-5 mb-2'></div>
                <div className='rounded-full bg-sky-400 w-5 h-5 mb-2'></div>
                <div className='border-solid rounded-full border-2 border-sky-400 bg-transparent w-5 h-5 mb-2'></div>
            </div>
            
            {/* <div className="bg-medical_image1">
            </div> */}
        </div>
       
    )

}