import React, { useState } from 'react';

import Header2 from '../../components/header/index'

function MyFriends() {
    return (
        <div className="App">
            <Header2 />
            <div className="feedPost">
                <div className="feedPostSingle">


                    <div class="">
                        <div class="div-perfil-imagem" >
                            <img class="perfi-imagem shadow-interpolacao" src="https://pbs.twimg.com/media/EKkDakiXsAECxgW.jpg" />
                        </div>
                        <div class="div-perfil-dados">
                            <h2>Carmem Miranda</h2>
                            <h4 class="u-text u-text-default u-text-6">Aluna </h4>
                            <h4 class="u-text u-text-default u-text-6">Tecnico Em mecanica </h4>
                            <h4 class="u-text u-text-default u-text-6">26 amigo(a)s </h4>
                            <h4 class="u-text u-text-default u-text-6">Conectada desde 2018 </h4>
                            <a href="" class="botao_azul shadow-interpolacao ">Conectar</a>
                        </div>
                    </div>
                </div>
            </div>



            
            <div className="feedPost">
                <div className="feedPostSingle">
                    <h3>Turmas:</h3>
                    <section class="u-align-center u-clearfix u-grey-10 u-section-2" id="sec-bd5e">
                        <div class="u-repeater u-repeater-1 tela1400">


                            <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                <div class="u-container-layout u-similar-container u-container-layout-3">
                                    <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/maskarad.jpg" />
                                    <h4 class="u-text u-text-default u-text-6">Tecnico em Mecanica 2020.2</h4>
                                    <p class="u-text u-text-7">6 membros </p>
                                    <p class="u-text u-text-7"><b>Professor(a) Nilson</b> </p>
                                    <a href="" class="botao_azul shadow-interpolacao ">Conectar</a>
                                </div>
                            </div>
                            <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                <div class="u-container-layout u-similar-container u-container-layout-3">
                                    <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/engenharia-quimica.jpg" />
                                    <h4 class="u-text u-text-default u-text-6">Radiologia 2021.1</h4>
                                    <p class="u-text u-text-7">1 membros </p>
                                    <p class="u-text u-text-7"><b>Professor(a) Mikaela Moura</b> </p>
                                    <a href="" class="botao_azul shadow-interpolacao ">Conectar</a>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>






    )
}

export default MyFriends;