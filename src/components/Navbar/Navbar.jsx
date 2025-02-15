import React from "react";
import { styled } from "styled-components";
import Logo from "../Logo/Logo";
import LOGO_BG from "../../assets/img/navbar/LOGO_BG.png";
import WhatsAppBtn from "../Btns/WhatsAppBtn";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { motion } from "framer-motion";

function Navbar() { 
  return (
    <div className="navbar container mb-8 pt-8 px-[100px]">
      <Banner className="relative isolate flex justify-between items-center">
    <div className=" mb-8 pt-8 ">
      <Banner className="container relative isolate flex justify-between items-center ">
        <Logo />
        <div className="flex flex-col gap-7">
          <div className="flex text-xl gap-8 ">
            <p className="font-Montserrat500">МО, Люберцы, Весенняя, 16</p>
            <p className="font-Montserrat500">с 8:00 до 22:00</p>
            <a href="tel:+79165760433" className="font-Montserrat700">
              +7 (916) 576-04-33
            </a>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <g clipPath="url(#clip0_81_349)">
                  <path
                    d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
                    fill="#6F3FAA"
                  />
                  <path
                    d="M22.9351 10.5423L22.9302 10.5225C22.5294 8.90222 20.7225 7.16362 19.0631 6.80192L19.0445 6.79806C16.3605 6.28606 13.6391 6.28606 10.9558 6.79806L10.9365 6.80192C9.2777 7.16362 7.47072 8.90233 7.06941 10.5225L7.06496 10.5423C6.56949 12.805 6.56949 15.0998 7.06496 17.3625L7.06941 17.3823C7.45367 18.9334 9.126 20.5922 10.7234 21.0483V22.857C10.7234 23.5117 11.5212 23.8332 11.9748 23.3608L13.8073 21.4559C14.2048 21.4781 14.6025 21.4906 15.0001 21.4906C16.3511 21.4906 17.7027 21.3628 19.0444 21.1068L19.0631 21.103C20.7225 20.7413 22.5294 19.0026 22.9302 17.3824L22.9351 17.3626C23.4305 15.0998 23.4305 12.8051 22.9351 10.5423ZM21.4849 17.0344C21.2173 18.0915 19.8454 19.4057 18.7553 19.6485C17.3282 19.9199 15.8898 20.0359 14.4529 19.9961C14.4243 19.9952 14.3968 20.0064 14.3769 20.0269C14.173 20.2362 13.0389 21.4004 13.0389 21.4004L11.6158 22.8611C11.5118 22.9696 11.3289 22.8957 11.3289 22.746V19.7497C11.3289 19.7002 11.2936 19.6582 11.245 19.6486C11.2447 19.6485 11.2445 19.6485 11.2442 19.6484C10.1541 19.4056 8.78264 18.0915 8.51457 17.0344C8.06861 14.9891 8.06861 12.9157 8.51457 10.8704C8.78264 9.81335 10.1541 8.49921 11.2442 8.2564C13.7365 7.78237 16.2635 7.78237 18.7554 8.2564C19.846 8.49921 21.2173 9.81335 21.4849 10.8704C21.9314 12.9158 21.9314 14.9892 21.4849 17.0344Z"
                    fill="white"
                  />
                  <path
                    d="M17.3714 18.4176C17.2038 18.3667 17.0441 18.3325 16.8957 18.2711C15.3587 17.6334 13.9443 16.8107 12.8239 15.5497C12.1868 14.8327 11.6881 14.0231 11.2666 13.1663C11.0666 12.76 10.8982 12.3379 10.7264 11.9183C10.5699 11.5358 10.8005 11.1407 11.0433 10.8524C11.2712 10.5819 11.5645 10.3749 11.882 10.2223C12.1299 10.1032 12.3743 10.1719 12.5554 10.3819C12.9467 10.8362 13.3062 11.3136 13.5972 11.8401C13.7762 12.1639 13.7271 12.5598 13.4027 12.7802C13.3238 12.8337 13.252 12.8967 13.1785 12.9571C13.1141 13.0102 13.0535 13.0637 13.0093 13.1355C12.9286 13.2668 12.9248 13.4218 12.9767 13.5646C13.3767 14.6638 14.0509 15.5187 15.1575 15.9792C15.3346 16.0529 15.5123 16.1386 15.7163 16.1149C16.0579 16.075 16.1686 15.7002 16.408 15.5044C16.642 15.3131 16.941 15.3106 17.193 15.4701C17.4452 15.6297 17.6895 15.8009 17.9324 15.9741C18.1709 16.144 18.4083 16.3101 18.6282 16.5039C18.8397 16.6901 18.9125 16.9345 18.7934 17.1872C18.5754 17.6501 18.2581 18.0352 17.8006 18.281C17.6714 18.3503 17.5171 18.3727 17.3714 18.4176C17.5171 18.3727 17.2038 18.3667 17.3714 18.4176Z"
                    fill="white"
                  />
                  <path
                    d="M15.0039 9.69269C17.0142 9.74906 18.6654 11.0832 19.0193 13.0707C19.0796 13.4094 19.101 13.7555 19.1278 14.0993C19.1392 14.2438 19.0572 14.3812 18.9013 14.3831C18.7401 14.3851 18.6676 14.2502 18.6571 14.1057C18.6364 13.8197 18.6221 13.5323 18.5826 13.2487C18.3746 11.7511 17.1804 10.5121 15.6898 10.2463C15.4654 10.2063 15.236 10.1958 15.0087 10.1719C14.8651 10.1569 14.677 10.1482 14.6452 9.9696C14.6185 9.8199 14.7448 9.70072 14.8874 9.69304C14.926 9.69076 14.965 9.69257 15.0039 9.69269C17.0143 9.74906 14.965 9.69257 15.0039 9.69269Z"
                    fill="white"
                  />
                  <path
                    d="M18.059 13.6533C18.0557 13.6784 18.054 13.7374 18.0392 13.793C17.9859 13.9948 17.6798 14.02 17.6094 13.8164C17.5885 13.756 17.5854 13.6872 17.5853 13.6222C17.5846 13.1964 17.4921 12.7711 17.2773 12.4006C17.0566 12.0198 16.7193 11.6998 16.3239 11.506C16.0847 11.3889 15.8261 11.3161 15.564 11.2728C15.4494 11.2538 15.3337 11.2424 15.2185 11.2263C15.079 11.2069 15.0045 11.1181 15.0112 10.9806C15.0173 10.8518 15.1115 10.7591 15.2519 10.7671C15.7132 10.7932 16.1588 10.8931 16.569 11.1102C17.4031 11.5519 17.8796 12.2491 18.0187 13.1801C18.0249 13.2223 18.035 13.2641 18.0382 13.3064C18.0461 13.4108 18.0511 13.5154 18.059 13.6533C18.0557 13.6783 18.0511 13.5154 18.059 13.6533Z"
                    fill="white"
                  />
                  <path
                    d="M16.8089 13.6044C16.6407 13.6075 16.5507 13.5143 16.5333 13.3602C16.5213 13.2528 16.5117 13.1438 16.486 13.0391C16.4355 12.8331 16.326 12.6422 16.1527 12.5159C16.0709 12.4563 15.9781 12.4129 15.881 12.3848C15.7577 12.3491 15.6295 12.3589 15.5065 12.3288C15.3729 12.296 15.2989 12.1878 15.3199 12.0624C15.3391 11.9483 15.45 11.8592 15.5748 11.8683C16.3542 11.9246 16.9112 12.3275 16.9908 13.2451C16.9964 13.3098 17.003 13.3782 16.9886 13.4403C16.9639 13.5461 16.8854 13.5993 16.8089 13.6044C16.8854 13.5993 16.6407 13.6074 16.8089 13.6044Z"
                    fill="white"
                  />
                  <path
                    d="M17.3711 18.4173C17.2035 18.3664 17.5168 18.3724 17.3711 18.4173V18.4173Z"
                    fill="white"
                  />
                  <path
                    d="M15.0102 9.69312C15.0083 9.69312 15.0064 9.69292 15.0045 9.69292C15.0027 9.69279 15.0051 9.69292 15.0102 9.69312Z"
                    fill="white"
                  />
                  <path
                    d="M15.0049 9.69287C15.0066 9.69287 15.0082 9.69305 15.0099 9.69305C15.1215 9.69703 16.936 9.74701 15.0049 9.69287Z"
                    fill="white"
                  />
                  <path
                    d="M18.0596 13.6533C18.0516 13.5153 18.0562 13.6783 18.0596 13.6533V13.6533Z"
                    fill="white"
                  />
                  <path
                    d="M16.8091 13.6044C16.8117 13.6042 16.8143 13.6028 16.8168 13.6025C16.8097 13.6025 16.7988 13.6027 16.7876 13.6031C16.7949 13.6033 16.8015 13.6044 16.8091 13.6044Z"
                    fill="white"
                  />
                  <path
                    d="M16.8089 13.6047C16.8014 13.6049 16.7947 13.6038 16.7874 13.6035C16.751 13.6045 16.7135 13.6064 16.8089 13.6047Z"
                    fill="white"
                  />
                  <path
                    d="M16.8168 13.6025C16.8141 13.6028 16.8116 13.6042 16.8091 13.6044C16.8288 13.603 16.8271 13.6025 16.8168 13.6025Z"
                    fill="white"
                  />
                </g>
                <defs></defs>
              </svg>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <g clipPath="url(#clip0_81_344)">
                  <path
                    d="M14.9998 30.0006C23.284 30.0006 29.9996 23.285 29.9996 15.0008C29.9996 6.71663 23.284 0.000976562 14.9998 0.000976562C6.71565 0.000976562 0 6.71663 0 15.0008C0 23.285 6.71565 30.0006 14.9998 30.0006Z"
                    fill="#41B4E6"
                  />
                  <path
                    d="M13.5435 17.1855L20.3222 22.3034L23.7441 7.69678L6.25635 14.5756L11.5777 16.3382L21.2892 9.82397L13.5435 17.1855Z"
                    fill="white"
                  />
                  <path
                    d="M11.5776 16.3384L13.035 21.5828L13.5435 17.1857L21.2891 9.82422L11.5776 16.3384Z"
                    fill="#D2D2D7"
                  />
                  <path
                    d="M15.7462 18.8489L13.0347 21.5827L13.5431 17.1855L15.7462 18.8489Z"
                    fill="#B9B9BE"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_81_344">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <WhatsAppBtn />
            <WhatsAppBtn text="Заказать звонок" />
            <motion.div
              whileTap={{ scale: 0.8 }}
              className="cursor-pointer shadow-button shadow-red-400 bg-gradient-to-l from-red-500 to-red-200 rounded-full p-3"
            >
              <RiShoppingBasketLine className="fill-white text-2xl" />
            </motion.div>
          </div>
        </div>
        <img
          src={LOGO_BG}
          alt="logo_backround"
          className="absolute -top-10 -left-48 -z-30"
        />
      </Banner>
      <Nav className="z-50 mt-12 shadow-sm">
        <div className="container flex justify-between py-5 text-textColor">
          <Select>
            <a href="#!" className="text-lg font-Montserrat500 z-20">
              Каталог
            </a>
            <BiChevronDown className="text-lg"/>

          </Select>
          <a href="#!" className="text-lg font-Montserrat500">
            Начинки
          </a>
          <a href="#!" className="text-lg font-Montserrat500">
            Как сделать заказ
          </a>
          <a href="#!" className="text-lg font-Montserrat500">
            Доставка
          </a>
          <Select>
            <a href="#!" className="text-lg font-Montserrat500">
            О компании
            </a>
            <BiChevronDown className="text-lg"/>
          </Select>
          <a href="#!" className="text-lg font-Montserrat500">
            FAQ
          </a>
          <a href="#!" className="text-lg font-Montserrat500">
            Акции
          </a>
          <a href="#!" className="text-lg font-Montserrat500">
            Контакты
          </a>
        </div>
      </Nav>
    </div>
  );
}

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0) );

  & a{
    cursor: pointer;
    z-index: 20;
  }

`;
const Select = styled.div`
display: flex;
align-items: center;
gap: 7px;
`;

export default Navbar;
