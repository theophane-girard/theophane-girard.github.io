import { TimelineSection } from './timeline.model';

export const TIMELINE: TimelineSection[] = [
  {
    duration: '2018 - 2022',
    pro: {
      title: 'Web developer',
      description:
        "Développeur fullstack (Angular & Php) prestataire chez NSI, l'éditeur logiciel de l'ADMR",
      organization: {
        name: 'NSI - ADMR',
        logo: 'admr.svg',
        url: 'admr.org',
      },
      skills: [
        {
          name: 'Php',
          logo: 'php.png',
        },
        {
          name: 'Angular',
          logo: 'ng.svg',
        },
        {
          name: 'MySQL',
          logo: 'mysql.png',
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
        logo: 'cgi.svg',
        url: 'https://www.cgi.fr',
      },
      description:
        "Au sein de CGI, j'ai eu le rôle d'Agent support et d'Analyste Développeur. Mes missions consistaient à faire évoluer des applications Php et AngularJS ainsi que d'assurer le support de ces outils.",
      skills: [
        {
          name: 'Php',
          logo: 'php.png',
        },
        {
          name: 'AngularJS',
          logo: 'ngjs.png',
        },
        {
          name: 'MySQL',
          logo: 'mysql.png',
        },
        {
          name: 'PostgreSQL',
          logo: 'pgsql.png',
        },
      ],
    },
    education: {
      title: 'Master CPIL',
      organization: {
        name: 'IPI - groupe IGS',
        logo: 'ipi.png',
        url: 'http://www.ipi-ecoles.com/',
      },
      description:
        "J'ai réalisé un Master en alternance à l'Institut Poly-Informatique afin d'obtenir un diplôme de Chef de Projets en Ingénierie Logicielle. Cette formation m'a permis de développer des compétences en développement back-end et front-end. Mais aussi en gestion de projets.",
      skills: [
        {
          name: 'AngularJS',
          logo: 'ngjs.png',
        },
        {
          name: 'MySQL',
          logo: 'mysql.png',
        },
        {
          name: 'C#',
          logo: 'csharp.png',
        },
        {
          name: 'Angular',
          logo: 'ng.png',
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
        logo: 'rect.svg',
        url: 'https://www.ac-toulouse.fr',
      },
      description:
        "Au sein du Rectorat, ma mission a été de développer de nouvelles fonctionnalités à l'application Web stockant toutes les informations RH du Rectorat.",
      skills: [
        {
          name: 'Php',
          logo: 'php.png',
        },
        {
          name: 'Symfony',
          logo: 'symfony.png',
        },
        {
          name: 'MySQL',
          logo: 'mysql.png',
        },
      ],
    },
    education: {
      title: 'Licence APSYO',
      organization: {
        name: 'IUT Blagnac',
        logo: 'iut.png',
        url: 'https://www.iut-blagnac.fr',
      },
      description:
        "Mon année au sein du Rectorat s'est effectuée en alternance avec la formation d'Analyste Programmeur en SYstèmes Ouverts. Elle m'a permis de développer des compétences en développement back-end et front-end.",
      skills: [
        {
          name: 'Java',
          logo: 'java.png',
        },
        {
          name: 'Git',
          logo: 'git.png',
        },
        {
          name: 'Android',
          logo: 'android.png',
        },
        {
          name: 'GWT',
          logo: 'gwt.png',
        },
        {
          name: 'MySQL',
          logo: 'mysql.png',
        },
        {
          name: 'C#',
          logo: 'csharp.png',
        },
      ],
    },
  },
];
