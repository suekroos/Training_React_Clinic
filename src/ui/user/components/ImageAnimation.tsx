import { useState } from 'react'
import medical_image1 from '../../images/medical_bear.jpg'
import medical_image2 from '../../images/medical_ope.jpg'
import medical_image3 from '../../images/medical_woman.jpg'

// 画像のアニメーション表示
export const ImageAnimation = () => {

    //表示している画像に合わせて青丸を表示するセット関数
    const [circleFlag1, setCircleFlag1] = useState(false)
    const [circleFlag2, setCircleFlag2] = useState(false)
    const [circleFlag3, setCircleFlag3] = useState(true)
    // const [circleArray, setcircleArray] = useState([circleFlag1, circleFlag2, circleFlag3])
    const circleArray= [circleFlag1, circleFlag2, circleFlag3]

    //画像に対応させて青丸を表示

        let circleElements = document.querySelectorAll('#circle > div');

        let i = 0;
        const circleClick = () => {
        while(i===0){
            if(circleArray[i+1] === false && circleArray[i+2] === true){
                setCircleFlag3(() => false)
                setCircleFlag2(() => true)
                console.log('circle1クリック')
                break
            }
            else if(circleArray[i] === false && circleArray[i+1] === true){
                setCircleFlag2(() => false)
                setCircleFlag1(() => true)
                break
            }
            else if(circleArray[i+2] === false && circleArray[i] === true){
                setCircleFlag1(() => false)
                setCircleFlag3(() => true)
                break
            }
            else
                break
            }
        }
       
  
  
    return(
        <div className='flex justify-center'>
            <div className='relative w-900 h-700 max-w-full '>
                <img src={medical_image1} alt='medical_image' className='img-auto-anime' />
                <img src={medical_image2} alt='medical_image' className='img-auto-anime' />
                <img src={medical_image3} alt='medical_image' className='img-auto-anime' />
            </div>
            <div id='circle' className='flex items-end flex-col-reverse relative ml-6 mb-20 w-5 h-25'>
                <div className={circleFlag1 ? 'full-circle' :'empty-circle'}></div>
                <div className={circleFlag2 ? 'full-circle' :'empty-circle'}></div>
                <div className={circleFlag3 ? 'full-circle' :'empty-circle'}></div>
            </div>
            <button onClick={circleClick}>Click</button>
            
            {/* <div className="bg-medical_image1">
            </div> */}
        </div>
       
    )

}