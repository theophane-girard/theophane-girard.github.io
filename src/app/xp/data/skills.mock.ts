import {Skill} from "./timeline.model";

enum Skills {
    ng = "ng",
    pgsql = "pgsql",
    php = "php",
    mysql = "mysql",
    nodejs = "nodejs",
    typeorm = "typeorm",
    scrum = "scrum",
    angularjs = "angularjs",
    symfony = "symfony",
    java = "java",
    git = "git",
    android = "android",
    gwt = "gwt",
    csharp = "csharp",
}

export const SKILLS: Record<Skills, Skill> = {
  ng: {
    name: 'Angular',
    logo: { url: 'ng.gif' },
  },
  pgsql: {
    name: 'Postgres',
    logo: {
      url: 'pgsql.svg', style: {
        width: "3em"
      }
    },
  },
  php: {
    name: 'Php',
    logo: { url: 'php.svg' },
  },
  mysql: {
    name: 'MySQL',
    logo: {url: 'mysql.svg', isBackgroundColorWhite: true, style: {width: "5em"}},
  },
  nodejs: {
    name: 'NodeJs',
    logo: {url: 'node-black.svg', style: {width: "7em"}},
  },
  typeorm: {
    name: 'TypeOrm',
  },
  scrum: {
    name: 'SCRUM',
  },
  angularjs: {
    name: 'AngularJS',
    logo: {url: 'ngjs.svg', isBackgroundColorWhite: true, style: {width: "8em"}},
  },
  symfony: {
    name: 'Symfony',
    logo: {url: 'symfony.svg', style: {width: "8em"}},
  },
  java: {
    name: 'Java',
    logo: { url: 'java.png' },
  },
  git: {
    name: 'Git',
    logo: { url: 'git.png' },
  },
  android: {
    name: 'Android',
    logo: { url: 'android.png' },
  },
  gwt: {
    name: 'GWT',
    logo: { url: 'gwt.png' },
  },
  csharp: {
    name: 'C#',
    logo: { url: 'csharp.png' },
  },
};
