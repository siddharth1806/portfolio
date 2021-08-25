import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
	name: "Siddharth Singh",
	title: "Hi all, I'm Siddharth",
	description:
		"A passionate Full Stack Web Developer  having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs / MongoDB / MaterialUI and some other cool libraries and frameworks .",
	resumeLink: "https://drive.google.com/file/d/1-xtMTvqC4nxFXigpu5IJYBc4XH_ZFhEE/view?usp=sharing",
};

export const openSource = {
	githubUserName: "siddharth1806",
};

export const contact = {};

export const socialLinks = {
	instagram: "https://www.instagram.com/s_i_d_d_h_a_r_t_h___s_i_d/",
	github: "https://github.com/siddharth1806",
	linkedin: "https://www.linkedin.com/in/siddharth-singh-6874891a7/",
};

export const skillsSection = {
	title: "What I do and What I have did",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces  web  applications"
		),
		emoji(
			"⚡ Got 172 global rank in codechef august long challenge"
		),
		emoji(
			"⚡ Salesforce Administrator Certified"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "github",
			fontAwesomeClassname: "logos:github",
		},
		
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "postman",
			fontAwesomeClassname: "logos:postman",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "60",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},

];

export const educationInfo = [
	{
		schoolName: "GLA UNIVERSITY MATHURA",
		subHeader: "Bachelor's of Technology in Computer Science And Engineering",
		duration: "August 2018 - Current",
		descBullets: [
			"Current CPI - 7.82/10.00",
			
		],
	},
	{
		schoolName: "Sant Atulanand Convent School Varanasi",
		subHeader: "Intermediate",
		duration: " 2016 -  2018",
		
		descBullets: [
			"Percentage - 83%",
			
		],
	},
	{
		schoolName: "Sant Atulanand Convent School Varanasi",
		subHeader: "Highschool",
		duration: " 2016",
		
		descBullets: [
			"Percentage - 89%",
			
		],
	}
];

export const experience = [
	{
		role: "Software Engineer Intern:Full Stack",
		company: "MyAnatomy",
		date: "June 2021 – Present",
		companylogo:airbnb,
		descBullets: [
			"During this internship I have made various project which included frontend and backend",
			"Working on various technologies like React, Redux, Nodejs, Socket.io etc.",
			"Handled bugs , created API's and currently learning the unit testing using Jest (for frontend) and Mocha (for backend)",
		],
	},
	
	
];

export const projects = [
	{
		name: "Algorithm Visualizer",
		desc:"Our project is a Web Application which is built to visualize classic algorithms such as Merge sort, Selection Sort ,Quick Sort and Bubble Sort (presently available),The entire App is built with React; no other third-party JS or CSS library has been used.",
		link:"https://siddharth1806.github.io/Mini-Project-Sorting-Visualizer/"
	},
	{
		name: "Social Developer Connector",
		desc: "DevConnector is platform where developers can interact with each other can also create a developer profile/portfolio, share posts and get help from other developers.To build this I have used MERN Stack",
		link:"https://socialnetwork-developers.herokuapp.com/",
	},
	
];

