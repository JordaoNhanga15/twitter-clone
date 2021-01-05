import '../../Style/components/Aside/Controls.css'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaCheckCircle,FaRegComment,FaHeart } from 'react-icons/fa';
import { FiShare,FiUsers } from 'react-icons/fi';
import {BsLightning,BsCardImage} from 'react-icons/bs'
import { GoGraph } from 'react-icons/go';
import { ImSmile } from 'react-icons/im';
import { IoLocationSharp,IoEyeSharp } from 'react-icons/io5';
import { AiOutlineCalendar,AiOutlineRetweet,AiFillFire,AiOutlineSetting } from 'react-icons/ai';
import img_people1 from '../../assets/fz.jpg'
import img_people2 from '../../assets/pg.jpg'
import img_cover from '../../assets/cover.jpg'
import img_gi from '../../assets/gif.gif'
import img_people3 from '../../assets/eleandro.jpg'
import Pro from '../../assets/profile.jpg'
import { useEffect, useState } from 'react';

function Controls(){
    const [mypub,setpub]=useState('')
    function handleDIS() {
        const htl={
            circle_progress:document.querySelector('.circle-progess'),
            circle:[...document.querySelector('.svg_circle').children],
            links:document.querySelectorAll('.left1'),
            btn:document.querySelector('.btn_pub')
        }
        const links_aparece=(e)=>{
            e.forEach(ele=>{
                ele.classList.add('r')
            })
        }
        const links_10aparece=(e)=>{
            e.forEach(ele=>{
                ele.classList.remove('r')
            })
        }
        function apa(){
            htl.circle_progress.style.display='flex'
            const Control=`${(  (40 * mypub.length ) / 100)}`
            htl.circle[1].style.strokeDashoffset=`${(440 - (76 * mypub.length ) / 100)}`;

            if(Control>99.0){
                htl.circle[1].style.stroke='rgb(224, 36, 94)'
                htl.circle[1].style.strokeDashoffset=`${(240 - (81 * mypub.length ) / 100)}`;
                links_10aparece(htl.links)
                htl.btn.style.opacity='.7'
            }
            else{
                htl.circle[1].style.stroke='rgb(29, 161, 242)'
                htl.btn.style.opacity='1'
                links_aparece(htl.links)
            }
        }
        function desa(){
            htl.circle_progress.style.display='none'
            links_10aparece(htl.links)
            htl.btn.style.opacity='.7'
        }
        function init() {
            mypub===""? desa() : apa()
        }

        return{
            init
        }
    }
    const asxa=(e)=>{
        if(e>246){
            let d=-529
            return d+=e
        }
        else{
            return e;
        }
    }
    
    useEffect(()=>{
        const rw=handleDIS()
        rw.init()
    },[mypub])
    
    return(
        <>
            <main className="tab-content">
                <div className="s" id="Home">
                   <div className="home-container">
                        <div className="home-1">
                            <main className="card-home-1">
                                <header className="card-header">
                                    <img src={Pro} alt="" width="80px" height="80px" />
                                    <textarea placeholder="whats going on?" onChange={(e)=>{
                                        setpub(e.target.value)
                                    }}></textarea>
                                </header>
                                <div className="body-card-home">
                                    <aside className="left-card">
                                        <div className="left1">
                                            <BsCardImage size={25} color="rgb(136, 153, 166)" />
                                        </div>
                                        <div className="left1">
                                            <GoGraph size={25} color="rgb(136, 153, 166)"/>
                                        </div>
                                        <div className="left1">
                                            <ImSmile size={25} color="rgb(136, 153, 166)"/>
                                        </div>
                                        <div className="left1">
                                            <AiOutlineCalendar size={25} color="rgb(136, 153, 166)"/>
                                        </div>
                                    </aside>
                                    <aside className="right-card">
                                        <div className="circle-progess">
                                                <svg className="svg_circle">
                                                    <circle cx="250" cy="70" r="30"></circle>
                                                    <circle cx="250" cy="70" r="30"></circle>
                                                </svg>
                                                <div className="number">
                                                    <h3>{
                                                        mypub===""? '0' : asxa(mypub.length)
                                                        }</h3>
                                                </div>
                                        </div>
                                        <div className="btn">
                                            <input type="button" value="tweet" className="btn_pub"/>
                                        </div>
                                    </aside>
                                </div>
                            </main>
                            
                            <article className="card-home-1container">
                                <main className="card-home-1">
                                <header className="car-header">
                                    <article className="box">
                                        <img src={Pro} alt="" width="60px" height="60px" />
                                        <div className="mar">
                                            <span>Jordão Nhanga de Oliveira</span>
                                            <small>@JordaoNhanga</small>
                                        </div>
                                    </article>
                                    <small>13 mins</small>
                                </header>
                                <div className="body-car">
                                    <div className="Para">
                                <p>Nao sou uma pessoa de ler livros, mas recentemente comprei um livro chamado "A philosofy of software desing" e veno gostado muito, expandiu muito a minha mente</p>
                                    </div>
                                <footer className="reacti">
                                    <div className="reac comment" aria-disabled="true" >
                                        <FaRegComment size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac retwe" aria-disabled="true">
                                        <AiOutlineRetweet size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac hear" aria-disabled="true">
                                        <FaHeart size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac share" aria-disabled="true">
                                        <FiShare size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                    </div>
                                </footer>
                                </div>
                                </main>
                            <main className="card-home-1">
                                <header className="car-header">
                                    <article className="box">
                                        <img src={Pro} alt="" width="60px" height="60px" />
                                        <div className="mar">
                                            <span>Jordão Nhanga de Oliveira</span>
                                            <small>@JordaoNhanga</small>
                                        </div>
                                    </article>
                                    <small>13 mins</small>
                                </header>
                                <div className="body-car">
                                    <div className='Para'>
                                <p>it's fire {<AiFillFire size={15} color="red"/>} </p>

                                <main className="card-home-1 sls">
                                <header className="car-header">
                                    <article className="box">
                                        <img src={Pro} alt="" width="60px" height="60px" />
                                        <div className="mar">
                                            <span>Jordão Nhanga de Oliveira</span>
                                            <small>@JordaoNhanga</small>
                                        </div>
                                    </article>
                                    <small>13 mins</small>
                                </header>
                                <div className="body-car">
                                    <div className="Para">
                                <p>Chegamos ao fim do ano 2020, foi um ano marcado de muitas tristezas
aproveito terminar o ano criando uma interface para o facebook, coloquei as pessoas que me marcaram o ano
essa interface foi inspirada em uma das obras do Eleandro Duzentos
<br></br>
<br></br>
Aproveito desejar a todos vocês, Feliz ano novo
<br></br>
<br></br>
o que acharam dessa interface? diga nos comentários
<br></br>
<br></br>
code:https://lnkd.in/geZiJ_4
<br></br>
#ReactJS #Css #javascript #hooks</p>

                                <img src={img_gi} alt="" className="img_para" />
                                    </div>

                                {/* <footer className="reacti">
                                    <div className="reac" aria-disabled="true">
                                        <FaRegComment size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span>19</span>
                                    </div>
                                    <div className="reac" aria-disabled="true">
                                        <AiOutlineRetweet size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span>19</span>
                                    </div>
                                    <div className="reac" aria-disabled="true">
                                        <FaHeart size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span>19</span>
                                    </div>
                                    <div className="reac" aria-disabled="true">
                                        <FiShare size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                    </div>
                                </footer> */}
                                </div>
                                </main>

                                    </div>
                                <footer className="reacti">
                                    <div className="reac comment" aria-disabled="true" >
                                        <FaRegComment size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac retwe" aria-disabled="true">
                                        <AiOutlineRetweet size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac hear" aria-disabled="true">
                                        <FaHeart size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac share" aria-disabled="true">
                                        <FiShare size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                    </div>
                                </footer>
                                </div>
                            </main>
                            </article>
                        </div>
                        <div className="home-2">
                            <div className="card-home-2">
                            <h1>Trends for you</h1>
                                <div className="card-home-info">
                                    <div className="box-card-container">
                                        <div className="box-card">
                                            <div className="box">
                                                
                                                <div className="mar">
                                                <span>#React.js</span>
                                                <small>7.7k tweets</small>
                                                </div>
                                            </div>
                                            <div className="btn-drop">
                                                <RiArrowDropDownLine size={40} color="rgb(136, 153, 166)" />
                                            </div>
                                        </div>
                                        <div className="box-card">
                                            <div className="box">
                                                
                                                <div className="mar">
                                                <span>#JavaScript</span>
                                                <small>7.7k tweets</small>
                                                </div>
                                            </div>
                                            <div className="btn-drop">
                                                <RiArrowDropDownLine size={40} color="rgb(136, 153, 166)" />
                                            </div>
                                        </div>
                                        <div className="box-card">
                                            <div className="box">
                                                
                                                <div className="mar">
                                                <span>#SQL</span>
                                                <small>9.6k tweets</small>
                                                </div>
                                            </div>
                                            <div className="btn-drop">
                                                <RiArrowDropDownLine size={40} color="rgb(136, 153, 166)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-home-2">
                                <h1>You should follow</h1>
                                <div className="card-home-info">
                                    <div className="box-card-container">
                                        <div className="box-card">
                                            <div className="box">
                                                <img src={img_people1} alt=""/>
                                                <div className="mar">
                                                <span>Francis Oliver  <FaCheckCircle size={15} color=":rgb(29, 161, 242)"/></span>
                                                <small>@Mr_oliver</small>
                                                </div>
                                            </div>
                                            <div className="btn">
                                                <input type="button" value="Follow"/>
                                            </div>
                                        </div>
                                        <div className="box-card">
                                            <div className="box">
                                                <img src={img_people2} alt=""/>
                                                <div className="mar">
                                                <span>Alberto Oliveira</span>
                                                <small>@Puro_gosto</small>
                                                </div>
                                            </div>
                                            <div className="btn">
                                                <input type="button" value="Follow"/>
                                            </div>
                                        </div>
                                        <div className="box-card">
                                            <div className="box">
                                                <img src={img_people3} alt=""/>
                                                <div className="mar">
                                                <span>Eleandro duzentos</span>
                                                <small>@iam_e200</small>
                                                </div>
                                            </div>
                                            <div className="btn">
                                                <input type="button" value="Follow"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                   </div>
                </div>
                <div className="s" id="Perfil">
                    <main className="Perfil_container">
                        <img className="img_bk" src={img_cover} alt=""/>
                        <article className="perfil_conteudo">
                                <aside className="perfil-a">
                                    <header className="perfil-a-header">
                                        <div className="lado-1a">
                                            <img src={Pro} alt="" className="perfil_pic" width="60px" height="60px"/>
                                            <div className="tex">
                                                <span>Jordao De Oliveira</span>
                                                <small>@JordaoNhanga</small>
                                            </div>
                                            <div className="locate">
                                                <IoLocationSharp size={20} color="white"/>
                                                <span>Luanda, Angola</span>
                                            </div>
                                        </div>
                                        <article className="perfil-a-tweet">
                                            <div className="twe">
                                                <small>Tweet</small>
                                                <span>336</span>
                                            </div>
                                            <div className="twe">
                                                <small>Followers</small>
                                                <span>191</span>
                                            </div>
                                            <div className="twe">
                                                <small>Following</small>
                                                <span>101</span>
                                            </div>
                                        </article>
                                    </header>
                                    <main className="perfil-a-body">
                                        <div className="lado-2a">
                                            <div className="lad">
                                                <IoEyeSharp size={30} color="white"/>
                                                <span>Activities</span>
                                            </div>
                                            <div className="lad">
                                                <BsLightning size={30} color="white"/>
                                                <span>Moments</span>
                                            </div>
                                            <div className="lad">
                                                <FiUsers size={30} color="white"/>
                                                <span>Friends</span>
                                            </div>
                                            <div className="lad">
                                                <AiOutlineSetting size={30} color="white"/>
                                                <span>Edit Profile</span>
                                            </div>
                                        </div>
                                    </main>
                                </aside>
                                <aside className="perfil-b">
                                        <article className="perfil-a-tweet">
                                            <div className="twe">
                                                <small>Tweet & Retweets</small>
                                            </div>
                                            <div className="twe">
                                                <small>Media</small>
                                            </div>
                                            <div className="twe">
                                                <small>Likes</small>
                                            </div>
                                        </article>
                                        <main className="tweets-container">
                                        <main className="card-home-1">
                                <header className="car-header">
                                    <article className="box">
                                        <img src={Pro} alt="" width="60px" height="60px" />
                                        <div className="mar">
                                            <span>Jordão Nhanga de Oliveira</span>
                                            <small>@JordaoNhanga</small>
                                        </div>
                                    </article>
                                    <small>13 mins</small>
                                </header>
                                <div className="body-car">
                                    <div className="Para">
                                <p>Nao sou uma pessoa de ler livros, mas recentemente comprei um livro chamado "A philosofy of software desing" e veno gostado muito, expandiu muito a minha mente</p>
                                    </div>
                                <footer className="reacti">
                                    <div className="reac comment" aria-disabled="true" >
                                        <FaRegComment size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac retwe" aria-disabled="true">
                                        <AiOutlineRetweet size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac hear" aria-disabled="true">
                                        <FaHeart size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac share" aria-disabled="true">
                                        <FiShare size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                    </div>
                                </footer>
                                </div>
                                </main>
                            <main className="card-home-1">
                                <header className="car-header">
                                    <article className="box">
                                        <img src={Pro} alt="" width="60px" height="60px" />
                                        <div className="mar">
                                            <span>Jordão Nhanga de Oliveira</span>
                                            <small>@JordaoNhanga</small>
                                        </div>
                                    </article>
                                    <small>13 mins</small>
                                </header>
                                <div className="body-car">
                                    <div className='Para'>
                                <p>it's fire {<AiFillFire size={15} color="red"/>} </p>

                                <main className="card-home-1 sls">
                                <header className="car-header">
                                    <article className="box">
                                        <img src={Pro} alt="" width="60px" height="60px" />
                                        <div className="mar">
                                            <span>Jordão Nhanga de Oliveira</span>
                                            <small>@JordaoNhanga</small>
                                        </div>
                                    </article>
                                    <small>13 mins</small>
                                </header>
                                <div className="body-car">
                                    <div className="Para">
                                <p>Chegamos ao fim do ano 2020, foi um ano marcado de muitas tristezas
aproveito terminar o ano criando uma interface para o facebook, coloquei as pessoas que me marcaram o ano
essa interface foi inspirada em uma das obras do Eleandro Duzentos
<br></br>
<br></br>
Aproveito desejar a todos vocês, Feliz ano novo
<br></br>
<br></br>
o que acharam dessa interface? diga nos comentários
<br></br>
<br></br>
code:https://lnkd.in/geZiJ_4
<br></br>
#ReactJS #Css #javascript #hooks</p>

                                <img src={img_gi} alt="" className="img_para" />
                                    </div>

                                {/* <footer className="reacti">
                                    <div className="reac" aria-disabled="true">
                                        <FaRegComment size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span>19</span>
                                    </div>
                                    <div className="reac" aria-disabled="true">
                                        <AiOutlineRetweet size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span>19</span>
                                    </div>
                                    <div className="reac" aria-disabled="true">
                                        <FaHeart size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span>19</span>
                                    </div>
                                    <div className="reac" aria-disabled="true">
                                        <FiShare size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                    </div>
                                </footer> */}
                                </div>
                                </main>

                                    </div>
                                <footer className="reacti">
                                    <div className="reac comment" aria-disabled="true" >
                                        <FaRegComment size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac retwe" aria-disabled="true">
                                        <AiOutlineRetweet size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac hear" aria-disabled="true">
                                        <FaHeart size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                        <span aria-disabled="true">19</span>
                                    </div>
                                    <div className="reac share" aria-disabled="true">
                                        <FiShare size={25} color="rgb(136, 153, 166)" aria-disabled="true"/>
                                    </div>
                                </footer>
                                </div>
                            </main>
                            
                                        </main>
                                </aside>
                        </article>
                    </main>
                </div>
                <div className="s" id="Explore">
                    Coldplay
                </div>
            </main>
        </>
    )
}
export default Controls;