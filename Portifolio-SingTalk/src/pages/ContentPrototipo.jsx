import React, { useState } from 'react';
import pc from '../assets/computador.png';
import cllr from '../assets/cllr.png';
import tv from '../assets/tv.png';
import style from './css/ContentStyle.module.css'
import Alunos from '../components/AlunosComp';
const Content = () => {
    
    return (
        <div className={style.top} >
            <br/>
            <br/>

            <h2>Telas Disponiveis</h2>
            <div className={style.container}>

            <div className={style.resp}>
                <img className={style.img}src={pc}/>
                <p className={style.p}>Notebook</p>
            </div>
            <div>
                <img className={style.img} src={cllr}/>
                <p className={style.p}>Celular</p>
            </div>
            </div>
            <Alunos/>
        </div>
    );
};

export default Content;
