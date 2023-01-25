import Head from "next/head";
import { Inter } from "@next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillFacebook, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import meNoBg from "../public/me-nobg.png";
import meNoBg2 from "../public/me-nobg3.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState, useRef } from "react";

export default function Home() {
    const linkRefSatu = useRef(null);
    const linkRefDua = useRef(null);
    const linkRefTiga = useRef(null);
    const linkRefEmpat = useRef(null);

    const goTo = (ref) => {
        window.scrollTo({
            top: ref.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const [darkMode, setDarkMode] = useState(false);

    const [burgerNav, setBurgerNav] = useState(false)

    return (
        <div className={darkMode ? "dark" : ""} ref={linkRefSatu}>
            <Head>
                <title>Rrrrrrrrrr</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo2.png" />
            </Head>
            <main className="bg-white px-10 text-black md:px-20 lg:px-40 dark:bg-gray-900 scroll-smooth">
                <section className=" min-h-screen">
                    <nav className=" py-10 mb-12 flex justify-between">
                        <h1 className=" text-2xl font-superMario dark:text-white">RrrrrrDev</h1>
                        <ul className=" flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl dark:text-white"
                                />
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className=" bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white ml-8 rounded-md"
                                >
                                    Resume
                                </a>
                            </li>
                            <li className="ml-6">
                                <GiHamburgerMenu className="ml-1 cursor-pointer text-3xl dark:text-white  top-10 "
                                    onClick={() => setBurgerNav(!burgerNav)} />
                                <div className={burgerNav ? "flex" : "hidden"}>
                                    <ul className=" absolute bg-gradient-to-r from-cyan-500 to-teal-500 text-white
                                 rounded-lg flex flex-col items-center justify-center gap-5  w-40 h-60 py-2 px-3 right-[50px] top-24 z-10">
                                        <li className="hover:text-slate-600 transition-all " onClick={() => goTo(linkRefSatu.current)}><a href="#">Home</a></li>
                                        <li className="hover:text-slate-600 transition-all " onClick={() => goTo(linkRefDua.current)}><a href="#">Service</a></li>
                                        <li className="hover:text-slate-600 transition-all " onClick={() => goTo(linkRefTiga.current)}><a href="#">Portfolio</a></li>
                                        <li className="hover:text-slate-600 transition-all " onClick={() => goTo(linkRefEmpat.current)}><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className=" text-center p-10" >
                        <h2 className="py-2 font-medium text-teal-600 text-5xl md:text-6xl font-superMario">
                            Rifky Andriansyah
                        </h2>
                        <h3 className="py-2 text-2xl md:text-3xl dark:text-white">
                            FrontEnd Developer.
                        </h3>
                        <p className=" text-gray-400 text-md py-5 leading-8 uppercase font-burtons md:text-xl">
                            "If You Can Predict The Enemy Moves, You Wont Defeated"
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-14 cursor-pointer py-1">
                        <a href="https://web.facebook.com/rifkyandriansyah.anggela"><AiFillFacebook className="text-blue-500 hover:scale-110 animate-bounce" /></a>
                        <a href="https://www.instagram.com/rfkyyyyy/"><AiFillInstagram className="text-purple-500 hover:scale-110 animate-bounce" /></a>
                        <a href="https://github.com/ZoyaaaZoy"><AiFillGithub className="dark:text-white hover:scale-110 animate-bounce" /></a>
                    </div>
                    <div className="overflow-hidden relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto md:h-96 md:w-96">
                        <Image src={meNoBg2} objectFit="cover" />
                    </div>
                </section>

                <section>
                    <div ref={linkRefDua}>
                        <h3 className="text-3xl py-1 dark:text-white">Service I Offer</h3>
                        <p className="text-md py-2 leading-6 text-gray-800 dark:text-white">
                            Since the beginning of my journey as a freelance Frontend Developer,
                            i`ve done remote work for
                            <span className="text-teal-500 "> agencies </span>consulted for{" "}
                            <span className=" text-teal-500">starup </span>
                            and collaboration with talented people to create digital products for
                            both business and consumer use.
                        </p>
                        <p className=" text-md py-2 leading-6 text-gray-80 mb-2 dark: text-white">
                            I Offer For Wide Range Of Services, Including Programming and Teaching
                        </p>
                    </div>

                    <div className=" lg:flex gap-10">
                        <div className=" text-center shadow-lg p-10 rounded-xl dark:bg-white my-2">
                            <Image src={design} width={100} height={100} className=" mx-auto" />
                            <h3 className=" text-lg font-medium pt-8 pb-2">Beautiful Design</h3>
                            <p className="py-2">Creating Elegan And Modern Design</p>
                            <h4 className="text-teal-500 py-3">Design Tools I Use</h4>
                            <p className=" text-gray-800 py-0">Photoshop</p>
                            <p className=" text-gray-800 py-0">Canva</p>
                            <p className=" text-gray-800 py-0">Figma</p>
                        </div>
                        <div className=" text-center shadow-lg p-10 rounded-xl dark:bg-white my-2">
                            <Image src={code} width={100} height={100} className=" mx-auto" />
                            <h3 className=" text-lg font-medium pt-8 pb-2">Nice Code</h3>
                            <p className="py-2">I Can Make A Beautiful Website</p>
                            <h4 className="text-teal-500 py-3">Languange I Use</h4>
                            <p className=" text-gray-800 py-0">Html</p>
                            <p className=" text-gray-800 py-0">Css</p>
                            <p className=" text-gray-800 py-0">JavaScript</p>
                        </div>
                        <div className=" text-center shadow-lg p-10 rounded-xl dark:bg-white my-2">
                            <Image src={consulting} width={100} height={100} className=" mx-auto" />
                            <h3 className=" text-lg font-medium pt-8 pb-2">Good Website</h3>
                            <p className="py-2">Creating Elegan And Modern Website</p>
                            <h4 className="text-teal-500 py-3">Framework I Use</h4>
                            <p className=" text-gray-800 py-0">React Js</p>
                            <p className=" text-gray-800 py-0">Tailwind Css</p>
                            <p className=" text-gray-800 py-0">Vite</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div ref={linkRefTiga}>
                        <h3 className=" text-3xl py-1 dark:text-white">Portfolio</h3>
                        <p className="text-md py-2 leading-6 text-gray-800 dark:text-white">
                            Since the beginning of my journey as a freelance Frontend Developer,
                            i`ve done remote work for
                            <span className="text-teal-500 "> agencies </span>consulted for{" "}
                            <span className=" text-teal-500">starup </span>
                            and collaboration with talented people to create digital products for
                            both business and consumer use.
                        </p>
                        <p className=" text-md py-2 leading-6 text-gray-80 dark:text-white">
                            I Offer For Wide Range Of Services, Including Programming and Teaching
                        </p>
                    </div>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={web1}
                                className=" rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={web2}
                                className=" rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={web3}
                                className=" rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={web4}
                                className=" rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={web1}
                                className=" rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                src={web6}
                                className=" rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                layout="responsive"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
