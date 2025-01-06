import {TimelineSection} from './timeline.model';
import {SKILLS} from './skills.mock';

export const TIMELINE: TimelineSection[] = [
  {
    duration: '2022 - 2023',
    pro: {
      title: 'Fullstack developer',
      description: `Fullstack developer at <strong>Sogeti - part of Capgemini</strong>. I built apps for Airbus to carry out tests on aircraft on the ground.
      <br><br>Concretely I worked on web pages which display, calculate and process complex data.`,
      organization: {
        name: 'Sogeti - Capgemini',
        logo: {url: 'sogeti.svg', isBackgroundColorWhite: true, style: {width: "7em"}},
        url: 'https://sogeti.com',
      },
      skills: [
        SKILLS.ng,
        SKILLS.nodejs,
        SKILLS.typeorm,
        SKILLS.pgsql,
        SKILLS.scrum,
      ],
    },
    education: undefined,
  },
  {
    duration: '2018 - 2022',
    pro: {
      title: 'Web developer',
      description:
        'Fullstack developer at <strong>NSI - ADMR</strong>. I built app to manage schedules, display data and process data from complex forms.',
      organization: {
        name: 'NSI - ADMR',
        logo: {
          url: 'admr.svg',
          isBackgroundColorWhite: true,
          style: {
            width: "10em",
            height: " 7em",
          }
        },
        url: 'https://admr.org',
      },
      skills: [SKILLS.ng, SKILLS.php, SKILLS.mysql, SKILLS.scrum],
    },
    education: undefined,
  },
  {
    duration: '2016 - 2018',
    pro: {
      title: 'Web Developer',
      organization: {
        name: 'CGI',
        logo: {url: 'cgi.svg', isBackgroundColorWhite: true, style: {width: "7em"}},
        url: 'https://www.cgi.fr',
      },
      description: `Within <strong>CGI</strong>, I worked as a technical support agent and web developer. My job was to develop new features of web apps which displays complex data as tables and charts,`,
      skills: [SKILLS.angularjs, SKILLS.php, SKILLS.mysql, SKILLS.pgsql],
    },
    education: {
      title: 'Master CPIL',
      organization: {
        name: 'IPI - groupe IGS',
        logo: {url: 'ipi.png', style: {width: "7em"}},
        url: 'http://www.ipi-ecoles.com/',
      },
      description:
        "J'ai réalisé un Master en alternance à l'Institut Poly-Informatique afin d'obtenir un diplôme de Chef de Projets en Ingénierie Logicielle. Cette formation m'a permis de développer des compétences en développement back-end et front-end. Mais aussi en gestion de projets.",
      skills: [SKILLS.angularjs, SKILLS.mysql, SKILLS.csharp, SKILLS.ng],
    },
  },
  {
    duration: '2015 - 2016',
    pro: {
      title: 'Web Developer',
      organization: {
        name: "Rectorat de l'académie Toulouse",
        logo: {url: 'rect.svg', isBackgroundColorWhite: true, style: {width: "7em"}},
        url: 'https://www.ac-toulouse.fr',
      },
      description: `Within the <strong>Local Education Authority</strong> of Toulouse, my mission was to develop new features to the web application storing its HR information. <br><br>In particular, I was able to develop web pages <strong>presenting forms</strong>, others allowing to <strong>list and edit data in the form of tables</strong>.`,
      skills: [SKILLS.php, SKILLS.symfony, SKILLS.mysql, SKILLS.scrum],
    },
    education: {
      title: 'Licence APSYO',
      organization: {
        name: 'IUT Blagnac',
        logo: {url: 'iut.png', style: {width: "7em"}},
        url: 'https://www.iut-blagnac.fr',
      },
      description:
        "Mon année au sein du Rectorat s'est effectuée en alternance avec la formation d'Analyste Programmeur en SYstèmes Ouverts. Elle m'a permis de développer des compétences en développement back-end et front-end.",
      skills: [
        SKILLS.mysql,
        SKILLS.symfony,
        SKILLS.java,
        SKILLS.git,
        SKILLS.android,
        SKILLS.gwt,
        SKILLS.csharp,
      ],
    },
  },
];
