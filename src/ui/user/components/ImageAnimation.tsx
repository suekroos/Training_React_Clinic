import medical_image1 from '../../images/medical_bear.jpg'
import medical_image2 from '../../images/medical_ope.jpg'
import medical_image3 from '../../images/medical_women.jpg'

export const ImageAnimation = () => {
    return(
        <div className='flex justify-center '>
            <div className='w-full h-full'>
                <img src={medical_image1} alt='medical_image' className='animate-popup w- h-full' />
            </div>
        </div>
       
    )

}