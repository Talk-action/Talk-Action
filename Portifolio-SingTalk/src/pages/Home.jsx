import style from '../pages/css/HomeStyle.module.css'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import TypingEffect from '../components/TypingEffect '


const Home = () => {

    return(
        <div className={style.container}>
            <div>
                <img src={photo1}></img>
            </div>
            <div>
                <h1 className={style.h1}>
                 <TypingEffect text='Sing-Talk' speed='260' pause='2200'/>
                </h1>
                <h2 className={style.h2}>
                <TypingEffect text='Libras nunca ficou tao fácil' speed='120' pause='1700'/>
                </h2>
            </div>
        </div>
    )
}

export default Home