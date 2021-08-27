import { CSSIcon, GitIcon, HTMLIcon, JavaScriptIcon, MongoIcon, MySQLIcon, NodeJSIcon, ReactIcon } from './TechIcons'

const technologies = [
  { id: 'la', name: 'ReactJS', color: '#61DAFB', Icon: () => <ReactIcon fill="#eee" width={27} height={27} /> },
  { id: 'rh', name: 'MongoDB', color: '#13AA52', Icon: () => <MongoIcon fill="#eee" width={27} height={27} /> },
  { id: 'GY', name: 'JavaScript', color: '#FCDC00', Icon: () => <JavaScriptIcon fill="#222" width={27} height={27} /> },
  { id: 'XI', name: 'NodeJS', color: '#13AA52', Icon: () => <NodeJSIcon fill="#eee" width={27} height={27} /> },
  { id: 'VS', name: 'CSS', color: '#249CDA', Icon: () => <CSSIcon fill="#eee" width={27} height={27} /> },
  { id: 'kt', name: 'HTML', color: '#F64A1D', Icon: () => <HTMLIcon fill="#eee" width={27} height={27} /> },
  { id: 'Zl', name: 'Git', color: '#F14E32', Icon: () => <GitIcon fill="#eee" width={27} height={27} /> },
  { id: '0V', name: 'MySQL', color: '#F29221', Icon: () => <MySQLIcon fill="#eee" width={27} height={27} /> },
]

export default technologies
