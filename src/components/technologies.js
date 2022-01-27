import { CSSIcon, GitIcon, HTMLIcon, JavaScriptIcon, MongoIcon, NextJSIcon, NodeJSIcon, ReactIcon } from './TechIcons'

const technologies = [
  {
    id: 'la',
    link: 'https://reactjs.org/',
    name: 'ReactJS',
    styles: { backgroundColor: '#61DAFB' },
    Icon: () => <ReactIcon fill="#eee" width={27} height={27} />
  },
  {
    id: 'rh',
    link: 'https://www.mongodb.com/',
    name: 'MongoDB',
    styles: { backgroundColor: '#13AA52' },
    Icon: () => <MongoIcon fill="#eee" width={27} height={27} />
  },
  {
    id: 'GY',
    link: 'https://www.javascript.com/',
    name: 'JavaScript',
    styles: { backgroundColor: '#FCDC00' },
    Icon: () => <JavaScriptIcon fill="#222" width={27} height={27} />
  },
  {
    id: 'XI',
    link: 'https://nodejs.org/',
    name: 'NodeJS',
    styles: { backgroundColor: '#13AA52' },
    Icon: () => <NodeJSIcon fill="#eee" width={27} height={27} />
  },
  {
    id: 'VS',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    name: 'CSS',
    styles: { backgroundColor: '#249CDA' },
    Icon: () => <CSSIcon fill="#eee" width={27} height={27} />
  },
  {
    id: 'kt',
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML',
    name: 'HTML',
    styles: { backgroundColor: '#F64A1D' },
    Icon: () => <HTMLIcon fill="#eee" width={27} height={27} />
  },
  {
    id: 'Zl',
    link: 'https://git-scm.com/',
    name: 'Git',
    styles: { backgroundColor: '#F14E32' },
    Icon: () => <GitIcon fill="#eee" width={27} height={27} />
  },
  {
    id: '0V',
    link: 'https://www.nextjs.org/',
    name: 'NextJS',
    styles: { backgroundColor: '#fff' },
    Icon: () => <NextJSIcon fill="#000" width={27} height={27} />
  }
]

export default technologies
