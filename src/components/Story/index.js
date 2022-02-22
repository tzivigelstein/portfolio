import styles from './index.module.css'
import { H3 } from '../Heading'
import { ParagraphText, TextBold, TextEmoji, TextItalic, TextLink, TextListItem } from '../Text'

export default function Story() {
  return (
    <div className={styles.storyContainer}>
      <H3>My story</H3>
      <div className={styles.textContainer}>
        <ParagraphText>
          I am Tzivi Gelstein and I was born at{' '}
          <TextLink href="https://goo.gl/maps/mG91tRZRup2QB25Z6">
            <TextBold>Béer Sheva, Israel</TextBold>
          </TextLink>
          . I grew up there until the age of 3, then my family and I moved back to Argentina where we live happily.
        </ParagraphText>
        <ParagraphText>
          I’ve been always a tech passionate, since I was young I enjoyed using the computer, gaming mainly{' '}
          <TextEmoji>😅</TextEmoji>. But for me, the machine I had in front was in fact a whole mystery.
        </ParagraphText>
        <ParagraphText>
          A short time later, I started digging into a computer building, <TextItalic>What is a processor?</TextItalic>{' '}
          <TextItalic>What is a Motherboard?</TextItalic> <TextItalic>Why my data held on my hard disk?</TextItalic>{' '}
          These are the questions I had that nobody could answer. Nobody but the internet.
        </ParagraphText>
        <ParagraphText>
          It was a complete year learning about computers, all about them. From the transistors inside all the
          components to the software.
        </ParagraphText>
        <ParagraphText>
          It was at that moment that I realized that I had this tech soul where I needed to dig into the construction of
          the thing I was in front of. The distinct curiosity, the passion about the architecture and how and why does
          that work.
        </ParagraphText>
        <ParagraphText>
          So when I was 13 I started high school at Brigadier Gral. Coornelio Saavedra 17 D.E. 13. It was a
          tech-oriented school where I learned about electronics and general knowledge. It was a great experience in
          which I learned about teamwork, electricity, chemistry, electronic systems, and many more things.
        </ParagraphText>
        <ParagraphText>
          During my course in school, when I was 16 exactly I started digging into the coding world, I started partly
          because of the school where we practiced coding with an embedded electronic board called{' '}
          <TextLink href="https://www.arduino.cc">Arduino</TextLink>, and also because I have a relative that advised me
          to get into this wonderful world. So with my almost 17 years old and all my enthusiasm I started the travel to
          become a web developer.
        </ParagraphText>
        <ParagraphText>
          And here I am 2 years later having learned many technologies, architectures, and people I can be sure of some
          things:
        </ParagraphText>
        <ul className={styles.list}>
          <li>
            <TextListItem>{"I feel great about joining this awesome world and I don't regret a thing."}</TextListItem>
          </li>
          <li>
            <TextListItem>I now know great people that are passionate as well.</TextListItem>
          </li>
          <li>
            <TextListItem>And also, as Socrates said, I know that I know nothing.</TextListItem>
          </li>
        </ul>
      </div>
    </div>
  )
}
