import { useState, useEffect } from 'react'
import medical_image1 from '../../images/medical_bear.jpg'
import medical_image2 from '../../images/medical_ope.jpg'
import medical_image3 from '../../images/medical_woman.jpg'

// 画像のアニメーション表示
export const ImageAnimation = () => {

    //表示している画像に合わせて青丸を表示するセット関数
    const [visibleCircle, setVisibleCircle] = useState(0)
    

        //3秒ごとにvisibleCircleの値を更新する
        useEffect(() => {
            const timer = setInterval(() => {
                setVisibleCircle((prev) => (prev + 1) % 3);
            }, 3000);
            
            return () => {
                clearInterval(timer);
            };
        }, []);

        //画像が表示されるたびに青丸の表示場所をcirclesに格納する
        const circleCount = 3;
        const circles = Array.from({length: circleCount}, (_, index) => (
            <div key={index} className={index === visibleCircle ? 'full-circle' :'empty-circle'}></div>    
        ))
        
  
    return(
        <div className='flex justify-center'>
            <div className='relative w-900 h-700 max-w-full '>
                <img src={medical_image1} alt='medical_image' className='img-auto-anime' />
                <img src={medical_image2} alt='medical_image' className='img-auto-anime' />
                <img src={medical_image3} alt='medical_image' className='img-auto-anime' />
            </div>
            <div className='flex items-end flex-col-reverse relative ml-6 mb-20 w-5 h-25'>
                <div>{circles}</div>
                
            </div>
        </div>
       
    )

}