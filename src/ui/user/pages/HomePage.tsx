import hospital from '../../images/hospital.png'
import { Header } from '../components/Header'
import { ImageAnimation } from '../components/ImageAnimation'
import { MedicalInfo } from '../components/MedicalInfo'
import { Endoscopy } from '../components/Endoscopy'
import { Greeting } from '../components/Greeting'

export const HomePage = () => {


   return (
      <div>
         <div className="text-center bg-sky-100">
            <Header />
         </div>
         <div className="">
            <ImageAnimation />

         </div>
         <div className="">
            <MedicalInfo />
         </div>
         <div className=''>
            <Endoscopy />
         </div>
         <div className="">
            <Greeting />
         </div>
         <div className='bg-amber-600 text-center'>
            院長ノート
            <img src={hospital} alt="医療画像です" />
         </div>
         <div className='bg-indigo-500 text-center'>
            病院情報
            <img src={hospital} alt="医療画像です" />
         </div>
         <div className='bg-green-200 text-center h-36'>
            フッター部分です
         </div>
      </div>

   )
}