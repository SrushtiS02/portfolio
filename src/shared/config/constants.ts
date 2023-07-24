import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Women Empowerment website",
        description : "Women Empowerment Website. Designed and developed with a conscious effort to provide knowleadge about the laws and rules provided by goverment of India Specilly for women where Women can register their complaints",
        tech : [ "HTML", "Tailwind CSS", "Javascript", "MongoDB" ],
        code : 'https://github.com/SrushtiS02/Womensempowerment',
        live : 'https://srushtis02.github.io/Womensempowerment/',
        thumnail : "we.png",
        featured : false
    },

    {
        title : "Netflix_Ui",
        description : "'A exactly same front-end and back-end Develeoped website UI of Netflix”",
        tech : [ "Next js", "tailwind CSS", "Redux", "Node js" ],
        live : '',
        thumnail : "netflix-1.png",
        featured : false
    },

    {
        title : "3D shirt printing website",
        description : "3D shirt printing website allows you to create your design of shirts online. ",
        tech : [ "Next js", "tailwind CSS", "Redux", "Node js" ],
        live : '',
        thumnail : "shirt.png",
    },
    {
        title : "Dalle Clone",
        description : "AI image generator which generate Images on the basis of text given by user. ",
        tech : [ "Next js", "tailwind CSS", "Redux", "Node js" ,"OpenAI API" ],
        live : '',
        thumnail : "dalle.jpg",


    },

    

    
]