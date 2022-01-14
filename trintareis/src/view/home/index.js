import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Header from '../../components/header/index'
import FeedForm from '../../components/feed-form/index';
import FeedPost from '../../components/feed-post/FeedPost';

function Home() {
    return (
        <div className="App">
        <Header />
        <FeedForm />
        <FeedPost nome="Trinta Reis" horario="20:00 h" conteudo="Conheça os benéficios da maior rede social vocacional" />
            <FeedPost nome="IFPE" horario="10:00 h" conteudo="Incrições para os cursos de pós-graduação estão ABERTAS!!!" />
            <FeedPost nome="Marcos" horario="13:30 h" conteudo="Galera criando criei um grupo de estudo sobre tecnologias frontend." />
            </div>
    )
}

export default Home;