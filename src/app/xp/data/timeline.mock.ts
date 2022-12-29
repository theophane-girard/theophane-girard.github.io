import { TimelineSection } from './timeline.model';

export const TIMELINE: TimelineSection[] = [
  {
    duration: '2022 - 2023',
    pro: {
      title: 'Fullstack developer',
      description:
        'Fullstack developer (Angular & NodeJs x TypeOrm) at Sogeti - part of Capgemini. I built apps which display, calculate and process complex data.',
      organization: {
        name: 'Sogeti - Capgemini',
        logo: { url: 'sogeti.svg', isBackgroundColorWhite: true },
        url: 'https://sogeti.com',
      },
      skills: [
        {
          name: 'Angular',
          logo: { url: 'ng.svg' },
        },
        {
          name: 'Node',
          logo: { url: 'node.svg' },
        },
        {
          name: 'Postgres',
          logo: { url: 'pgsql.svg' },
        },
      ],
    },
    education: undefined,
  },
  {
    duration: '2018 - 2022',
    pro: {
      title: 'Web developer',
      description:
        'Fullstack developer (Angular & Php) at NSI - ADMR. I built app to manage schedules, display data and process data from complex forms.',
      organization: {
        name: 'NSI - ADMR',
        logo: { url: 'admr.svg', isBackgroundColorWhite: true },
        url: 'https://admr.org',
      },
      skills: [
        {
          name: 'Php',
          logo: { url: 'php.svg' },
        },
        {
          name: 'Angular',
          logo: { url: 'ng.svg' },
        },
        {
          name: 'MySQL',
          logo: { url: 'mysql.svg', isBackgroundColorWhite: true },
        },
      ],
    },
    education: undefined,
  },
  {
    duration: '2016 - 2018',
    pro: {
      title: 'Web Developer',
      organization: {
        name: 'CGI',
        logo: { url: 'cgi.svg', isBackgroundColorWhite: true },
        url: 'https://www.cgi.fr',
      },
      description:
        "Au sein de CGI, j'ai eu le rôle d'Agent support et d'Analyste Développeur. Mes missions consistaient à faire évoluer des applications Php et AngularJS ainsi que d'assurer le support de ces outils.",
      skills: [
        {
          name: 'Php',
          logo: { url: 'php.svg' },
        },
        {
          name: 'AngularJS',
          logo: { url: 'ngjs.svg', isBackgroundColorWhite: true },
        },
        {
          name: 'MySQL',
          logo: { url: 'mysql.svg', isBackgroundColorWhite: true },
        },
        {
          name: 'PostgreSQL',
          logo: { url: 'pgsql.svg' },
        },
      ],
    },
    education: {
      title: 'Master CPIL',
      organization: {
        name: 'IPI - groupe IGS',
        logo: { url: 'ipi.png' },
        url: 'http://www.ipi-ecoles.com/',
      },
      description:
        "J'ai réalisé un Master en alternance à l'Institut Poly-Informatique afin d'obtenir un diplôme de Chef de Projets en Ingénierie Logicielle. Cette formation m'a permis de développer des compétences en développement back-end et front-end. Mais aussi en gestion de projets.",
      skills: [
        {
          name: 'AngularJS',
          logo: { url: 'ngjs.svg' },
        },
        {
          name: 'MySQL',
          logo: { url: 'mysql.svg', isBackgroundColorWhite: true },
        },
        {
          name: 'C#',
          logo: { url: 'csharp.png' },
        },
        {
          name: 'Angular',
          logo: { url: 'ng.png' },
        },
      ],
    },
  },
  {
    duration: '2015 - 2016',
    pro: {
      title: 'Développeur web',
      organization: {
        name: "Rectorat de l'académie Toulouse",
        logo: { url: 'rect.svg', isBackgroundColorWhite: true },
        url: 'https://www.ac-toulouse.fr',
      },
      description:
        "Au sein du Rectorat, ma mission a été de développer de nouvelles fonctionnalités à l'application Web stockant toutes les informations RH du Rectorat.",
      skills: [
        {
          name: 'Php',
          logo: { url: 'php.svg' },
        },
        {
          name: 'Symfony',
          logo: { url: 'symfony.svg' },
        },
        {
          name: 'MySQL',
          logo: { url: 'mysql.svg', isBackgroundColorWhite: true },
        },
      ],
    },
    education: {
      title: 'Licence APSYO',
      organization: {
        name: 'IUT Blagnac',
        logo: { url: 'iut.png' },
        url: 'https://www.iut-blagnac.fr',
      },
      description:
        "Mon année au sein du Rectorat s'est effectuée en alternance avec la formation d'Analyste Programmeur en SYstèmes Ouverts. Elle m'a permis de développer des compétences en développement back-end et front-end.",
      skills: [
        {
          name: 'Java',
          logo: { url: 'java.png' },
        },
        {
          name: 'Git',
          logo: { url: 'git.png' },
        },
        {
          name: 'Android',
          logo: { url: 'android.png' },
        },
        {
          name: 'GWT',
          logo: { url: 'gwt.png' },
        },
        {
          name: 'MySQL',
          logo: { url: 'mysql.svg', isBackgroundColorWhite: true },
        },
        {
          name: 'C#',
          logo: { url: 'csharp.png' },
        },
      ],
    },
  },
];
