import style from '../pages/css/HomeStyle.module.css'
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import TypingEffect from '../components/TypingEffect '
import About from './About'
import Content from './ContentPrototipo'


const Home = () => {

    return(
        <div className={style.total} >
            <section className={style.container}>
                <div className={style.containerimg}>
                    <img src={photo1} className={style.img}/>
                </div>
                <div>
                    <h1 className={style.h1}>
                    <TypingEffect text='Talk Action' speed='260' pause='2200'/>
                    </h1>
                    <h2 className={style.h2}>
                    <TypingEffect text='Libras nunca ficou tão fácil' speed='120' pause='1700'/>
                    </h2>
                </div>
            </section>

            <section className={style.containerDesc}>
                <About/>
            </section>

            <section className={style.containerFotos}>
                <Content/>
            </section>

            <section>
                
            </section>
        
        </div>
    )
}

export default Home
