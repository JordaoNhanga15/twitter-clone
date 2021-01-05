import '../../Style/components/Aside/Header.css'
import Pro from '../../assets/profile.jpg'
import {RiSearchLine} from 'react-icons/ri'
import { IoIosSunny } from 'react-icons/io';
import { BsMoon } from 'react-icons/bs';
import { useEffect } from 'react';

function Header(){
    const sun=
    <IoIosSunny size={40} color="rgb(136, 153, 166)" className="first"/>
    
    // const [initial,setInitial]=useState('')
    const moon=
    <BsMoon size={40} color="rgb(136, 153, 166)" className="second"/>
    
    function HandleTogle() {
        const ht={
            html:document.querySelector('html'),
            checkbox:document.querySelector('input[name=theme]'),
            la:[...document.querySelector('.la').children],
            la1:document.querySelector('.la'),
            fisrt:document.querySelector('.first'),
            second:document.querySelector('.second')
        }
        const getStyle=(element,style)=>
            window.getComputedStyle(element).getPropertyValue(style)
        const InitialColors={
            background:getStyle(ht.html,"--background"),
            colorSmall:getStyle(ht.html,"--color-small"),
            colorSvg:getStyle(ht.html,"--color-svg"),
            backgroundTabconten:getStyle(ht.html,"--background-tabconten"),
            backgroundTabcontensub:getStyle(ht.html,"--background-tabcontensub"),
            backgroundTabContensubmenu:getStyle(ht.html,"--background-tabcontensubmenu"),
            backgroundI:getStyle(ht.html,"--background-i")
        }
        const whiteMode={
            background:"#e5e5e5",
            backgroundTabconten:"#fff",
            backgroundTabcontensub:"#fff",
            backgroundTabcontensubmenu:"#fff",
            colorSmall:"#111",
            colorSvg:"#111",
            backgroundI:"#fff"
        }
        const transformKey = key =>
        "--" + key.replace(/([A-Z])/,"-$1").toLowerCase()

        function changeColors(colors){
            Object.keys(colors).map(key=>
                ht.html.style.setProperty(transformKey(key),colors[key])
            )
        }
        
        function init() {
            ht.la.forEach(ele=>{
                ele.addEventListener('click',()=>{
                    if(ht.la1.classList.contains('mode')){
                        changeColors(InitialColors)
                        ht.fisrt.style.display="none"
                        ht.second.style.display="flex"
                        ht.la1.classList.remove('mode')
                    }else{
                        changeColors(whiteMode)
                        ht.fisrt.style.display="flex"
                        ht.second.style.display="none"
                        ht.la1.classList.add('mode')
                    }
                })
            })
        }
        return{
            init
        }
    }
   
    useEffect(()=>{
        const da=HandleTogle()
        da.init()
    },[])
    return(
        <>
        <header className='header-container'>
            <div className="header-d">
                <div className="input-container">
                    <RiSearchLine size={30} color="rgb(136, 153, 166)"/>
                    <input type="text" placeholder="Search on Twitter"/>
                </div>
            </div>
            <div className="header-lado">
                <div className="header-lado-a">
                    <span>@JordaoNhanga</span>
                    <img src={Pro} alt="" width="60px" height="60px"/>
                </div>
                <div className="header-lado-b" aria-disabled="true">
                    <div className="ls toggle">
                       <div className="la">
                           {
                               moon
                            }
                            {
                                sun
                            }
                       </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
export default Header;