import React, { useState } from 'react';
import './recoveryPassword.css';
import './myfriends.css';
import './nicepage.css';
import Header2 from '../../components/header/index'


import { FaHome, FaRocketchat, FaEarlybirds, FaUserFriends, FaUniversity, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosNotifications, IoIosSchool } from "react-icons/io";
import { MdOutlineGroups } from "react-icons/md";


function MyFriends() {



    return (

        <div className="App">
            <Header2 />
            <div className="feedPost">
                <div className="feedPostSingle">

                    <section class="u-align-center u-clearfix u-grey-10 u-section-2" id="sec-bd5e">

                        <div class="">
                            <div class="u-repeater u-repeater-1 tela1400">

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/static/media/minios.8f62a453.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Aluno </p>
                                        <p class="u-text u-text-7"><b>Tecnico de Edificação</b> </p>
                                        <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                  
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="https://pbs.twimg.com/media/EKkDakiXsAECxgW.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Aluno </p>
                                        <p class="u-text u-text-7"><b>Tecnico de Edificação</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <div alt="" class=" u-image u-image-circle u-image-3 shadow-interpolacao" data-image-width="598" data-image-height="598"></div>
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Professor </p>
                                        <p class="u-text u-text-7"><b>Matematica</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Professor </p>
                                        <p class="u-text u-text-7"><b>Programação para Web</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Aluno </p>
                                        <p class="u-text u-text-7"><b>Tecnico de Edificação</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Aluno </p>
                                        <p class="u-text u-text-7"><b>Tecnico de Edificação</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Professor </p>
                                        <p class="u-text u-text-7"><b>Matematica</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Professor </p>
                                        <p class="u-text u-text-7"><b>Programação para Web</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>


                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Aluno </p>
                                        <p class="u-text u-text-7"><b>Tecnico de Edificação</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Aluno </p>
                                        <p class="u-text u-text-7"><b>Tecnico de Edificação</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Professor </p>
                                        <p class="u-text u-text-7"><b>Matematica</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
                                </div>

                                <div class="box shadow-interpolacao u-align-center u-container-style u-list-item u-repeater-item u-white u-list-item-3">
                                    <div class="u-container-layout u-similar-container u-container-layout-3">
                                        <img class=" u-image u-image-circle u-image-3 shadow-interpolacao" src="/assets/sem-foto-homem.jpg" />
                                        <h4 class="u-text u-text-default u-text-6">Roberto Carlos</h4>
                                        <p class="u-text u-text-7">Professor </p>
                                        <p class="u-text u-text-7"><b>Programação para Web</b> </p>
                                    <a href="" class="botao shadow-interpolacao ">Conectar</a>
                                    </div>
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