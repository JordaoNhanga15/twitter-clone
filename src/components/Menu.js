import {IoLogoTwitter,IoMdNotificationsOutline} from 'react-icons/io'
import { IoEllipsisVerticalSharp,IoPersonOutline } from "react-icons/io5";
import { FiCompass } from "react-icons/fi";
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai'

import { Link } from 'react-router-dom'
import '../Style/components/Menu.css'
import { useEffect } from 'react';

function Menu() {
    useEffect(()=>{
        const u=HandleAncora();
        u.Init()
      },[])

      function HandleAncora(){
        // const sum=(p1,p2)=>{
        //   let p3=0;
        //   parseInt(p1)
        //   parseInt(p2)
        //   return p3=p1+p2;
        // }
        const html={
          ancora:document.querySelectorAll('.a'),
          links:[...document.querySelector('.tab-links').children],
          content:[...document.querySelector('.tab-content').children],
          open:document.querySelector('[data-open]'),
          emoji:document.querySelectorAll('.reacti')
        }
        function addClass(e){
          e.target.classList.add('active')
        }
        function hideAllTabcontent(){
          html.content.forEach(section=>{
            section.style.display='none'
          })
        }
        function ShowCurrentTab(id){
          const tabContent=document.querySelector('#'+id)
          tabContent.style.display='block'
        }
        function  selectTab(event) {
          hideAllTabcontent()
          const target=event.currentTarget
          ShowCurrentTab(target.dataset.id)
        }
        function  ListeForCHanges() {
          html.links.forEach(tab=>{
            tab.addEventListener('click',selectTab)
          })
        }
        function click(){
          html.ancora.forEach(ele=>{
            ele.addEventListener('click',(e)=>{
              deleteAllClasses()
              addClass(e)
            })
          })
        }
        function deleteAllClasses(){
          html.ancora.forEach(ele=>{
            ele.classList.replace('active','l')
          })
        }
        const rmcs=(k,e)=>{
          e.classList.remove(k)
          e.children[1].innerHTML--
        }
        const adcs=(k,e)=>{
          e.classList.add(k)
          e.children[1].innerHTML++
        }
        function ad(e){
          if(e.classList.contains('comment')===true){
            let kr='r'
            e.classList.contains('r') ? rmcs(kr,e):adcs(kr,e)
          }
          else if(e.classList.contains('retwe')===true){
            let re='et'
            e.classList.contains('et') ?rmcs(re,e):adcs(re,e)
          }
          else if(e.classList.contains('hear')===true){
            let he='he'
            e.classList.contains('he') ? rmcs(he,e):adcs(he,e)
          }
          else if(e.classList.contains('share')===true){
            e.classList.contains('r') ? e.classList.remove('r'):e.classList.add('r')
          }
        }
        function Init(){
          click()
          hideAllTabcontent()
          ListeForCHanges()
          html.open.click()
          html.emoji.forEach(ele=>{
            const es=[...ele.children]
            es.forEach(el=>{
              el.addEventListener('click',()=>{
                  ad(el)
              })
            })
          })
        } 
        return{Init};
      }
    return(
        <>
            <nav className="menu">
                <div className="icone-logo">
                    <IoLogoTwitter size={50} color="rgb(136, 153, 166)"/>
                </div>
                <ul className="tab-links">
                    <li data-id="Home" data-open>
                        <Link to="" aria-disabled="true" className="a active" ><span> <AiOutlineHome size={30} color="rgb(136, 153, 166)" aria-disabled="true"/></span>Home</Link>
                    </li>
                    <li data-id="Explore">
                        <Link to="" aria-disabled="true" className="a"><span> <FiCompass size={25} color="rgb(136, 153, 166)" aria-disabled="true"/></span>Explore</Link> 
                    </li>
                    <li data-id="Notifications">
                        <Link to="" aria-disabled="true" className="a"><span> <IoMdNotificationsOutline size={25} color="rgb(136, 153, 166)" aria-disabled="true"/></span> Notifications</Link>
                    </li>
                    <li data-id="Messages">
                        <Link to="" aria-disabled="true" className="a"><span> <AiOutlineMail size={25} color="rgb(136, 153, 166)" aria-disabled="true"/></span> Messages</Link>
                    </li>
                    <li data-id="Bookmarks">
                        <Link to="" aria-disabled="true" className="a"><span> <AiOutlineHome size={25} color="rgb(136, 153, 166)" aria-disabled="true"/> </span>Bookmarks</Link>
                    </li>
                    <li data-id="Perfil" >
                        <Link to="" aria-disabled="true"  className="a"  ><span> <IoPersonOutline size={25} color="rgb(136, 153, 166)" aria-disabled="true"/> </span>Profile</Link>
                    </li>
                    <li data-id="More">
                        <Link to="" aria-disabled="true" className="a"><span> <IoEllipsisVerticalSharp size={25} color="rgb(136, 153, 166)" aria-disabled="true"/></span> More</Link>
                    </li>
                </ul>
                <div className="button">
                    <input type="button" value="tweet"/>
                </div>
            </nav>
        </>
    )   
}

export default Menu;