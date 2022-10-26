import medical_image1 from '../../images/medical_bear.jpg'
import medical_image2 from '../../images/medical_ope.jpg'
import medical_image3 from '../../images/medical_woman.jpg'

export const ImageAnimation = () => {
    return(
        <div className='flex justify-center '>
            <div className='relative w-900 h-700 max-w-full '>
                <img src={medical_image1} alt='medical_image' className='img-auto-anime' />
                <img src={medical_image2} alt='medical_image' className='img-auto-anime' />
                <img src={medical_image3} alt='medical_image' className='img-auto-anime' />
            </div>
            {/* <div className="bg-medical_image1">
            </div> */}
        </div>
       
    )

}