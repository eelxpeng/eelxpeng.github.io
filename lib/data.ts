import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Research",
    hash: "#projects",
  },
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    title: "Senior Applied Scientist",
    location: "Seattle, WA",
    description:
      "Initiator and science lead for Amazon Q in IDE project. Worked on developing chat model, RLHF and agent for code generation",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Applied Scientist",
    location: "Seattle, WA",
    description:
      "Founding member of CodeWhisperer team. Led the pretraining and finetuning of code LLMs with tens of billion parameters since 2020",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Intern at Google Cloud AI",
    location: "Sunnyvale, CA",
    description:
      "Worked on AutoML Recommendations with Google Brain and Cloud AI team",
    icon: React.createElement(FaReact),
    date: "2018",
  },
  {
    title: "PhD Student at the Hong Kong University of Science and Technology",
    location: "Hong Kong, China",
    description:
      "PhD in Computer Science and Engineering",
    icon: React.createElement(FaReact),
    date: "2014 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Training LLMs to Better Self-Debug and Explain Code - preprint 2024",
    description:
      "Nan Jiang, Xiaopeng Li et al.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/research/self-debug-2024.jpg",
  },
  {
    title: "Multi-lingual Evaluation of code-generation model - ICLR 2023 (spotlight)",
    description:
      "Ben Athiwaratkun, Sanjay Krishna Gouda, Zijian Wang, Xiaopeng Li, et al.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/research/mbxp.png",
  },
  {
    title: "CONTRACLM: Contrastive Learning For Causal Language Model - ACL 2023",
    description:
      "Nihal Jain, Dejiao Zhang, Wasi Uddin Ahmad, Zijian Wang, Feng Nan, Xiaopeng Li, et al.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/research/contraclm.png",
  },
  {
    title: "Exploring Continual Learning for Code Generation Models - ACL 2023",
    description:
      "Prateek Yadav, Qing Sun, Hantian Ding, Xiaopeng Li, et al.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: "/research/continual-learning.png",
  },
  {
    title: "Not All Attention Is Needed: Gated Attention Network for Sequence Data - AAAI 2020",
    description:
      "Lanqing Xue, Xiaopeng Li, Nevin L. Zhang",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/research/gated-attention.png",
  },
  {
    title: "Learning Latent Superstructures in Variational Autoencoders for Deep Multidimensional Clustering - ICLR 2019",
    description:
      "Xiaopeng Li et al.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/research/ltvae.png",
  },
  {
    title: "Collaborative Variational Autoencoder for Recommender Systems - KDD 2017",
    description:
      "Xiaopeng Li and James She.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: "/research/cvae.png",
  },
] as const;

export const demosData = [
  {
    title: "Code AutoCompletion with LLM",
    description:
      "I pretrained a code GPT model in Aug 2020 for code generation, and created a interactive demo for code completion in IDE. Very primitive, but it was 2020 way before LLM surge.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/demos/code-completion-demo.png",
  },
  {
    title: "Chat LLM",
    description:
      "I created the first chat LLM in the code generation domain in Feb 2023, and created a interactive chat demo. Very primitive, but it was right after ChatGPT appears and before any open source chat model release.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/demos/chat-demo.png",
  },
] as const;

export const skillsData = [
  "Pytorch",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
