import nomes from '../static/nomes.json'
import style from './css/AlunosStyle.module.css'
const Alunos = () =>{

    return(
        <div >
            <h2>Desenvolvedores</h2>
            <div className={style.principal}>
            {nomes.map((person)=>(
                <div className={style.container}>
                    <div>
                        <img className={style.img} src={person.img}/>
                    </div>
                    <div className={style.nome}>
                        {person.nome}
                    </div>
                </div>
                
            ))}
            </div>
           



        </div>
    )
}

export default Alunos