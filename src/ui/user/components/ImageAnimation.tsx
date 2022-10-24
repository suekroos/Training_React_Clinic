import medical_image1 from '../../images/medical_bear.jpg'
import medical_image2 from '../../images/medical_ope.jpg'
import medical_image3 from '../../images/medical_woman.jpg'

export const ImageAnimation = () => {
    return(
        <div className='flex justify-center '>
            <div className=''>
                <img src={medical_image1} alt='medical_image' className='animate-popup img_auto' width='600' />
                <img src={medical_image2} alt='medical_image' className='animate-popup img_auto' width='600' />
                <img src={medical_image3} alt='medical_image' className='animate-popup img_auto' width='600' />
            </div>
        </div>
       
    )

}