import style from './css/AboutStyle.module.css'
import photo2 from '../assets/photo2.png'
<style>
@import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap');
</style>
const About = () => {

    return(
        <div className={style.container}>
            <div >
                <h1 className={style.h1}>Quem Somos</h1>
                <p className={style.p}><strong>Sing-Talk</strong>  é um aplicativo inovador projetado para tornar o aprendizado da Língua Brasileira de Sinais (Libras) acessível e envolvente para todos. Com uma interface intuitiva e recursos interativos, nosso aplicativo oferece uma abordagem prática e eficiente para aprender sinais básicos, frases úteis e a cultura surda.</p>

                <div>

                <p className={style.title} >Recursos Principais</p>
                <ul className={style.ul}>
                    <li><strong>Práticas e Testes:</strong> Teste seus conhecimentos com exercícios práticos e quizzes.</li>
                    <li><strong>Recursos Visuais:</strong> Utilize imagens e vídeos para entender e memorizar sinais.</li>
                    <li><strong>Comunidade:</strong> Conecte-se com outros aprendizes e profissionais para compartilhar experiências e esclarecer dúvidas.</li>
                </ul>
            </div>

            
        </div>
            <div>
                    <img src={photo2}/>
            </div>
        </div>

    )
}

export default About