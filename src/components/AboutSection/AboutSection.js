import React from 'react'
import styles from './aboutsection.module.css'
import TechIcon from '../TechIcon/TechIcon'
import technologies from '../technologies'

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>A little bit about me</h2>
      <div className={styles.aboutInfoContainer}>
        <div>
          <div>
            <h3 className={styles.subtitle}>
              Carrer and experience <span className={styles.icon}>👨‍🔬</span>
            </h3>
            <p className={styles.text}>
              I started in the world of programming in a self-taught way having traveled almost two years of earning and
              experience in web design and frontend development. I have experience in website development with HTML,
              CSS, JavaScript, ReactJS, in addition to having experience with version control on Git and GitHub.
            </p>
          </div>
          <div>
            <h3 className={styles.subtitle}>Goals and objectives ✍</h3>
            <div className={styles.goalsContainer}>
              <span className={styles.goal}>
                <span className={styles.icon}>👆</span> Improve our workspace
              </span>
              <span className={styles.goal}>
                <span className={styles.icon}>💡</span> Learn something new every day
              </span>
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.subtitle}>
            Professional skills <span className={styles.icon}>👨‍💻</span>
          </h3>
          <div className={styles.skillsContainer}>
            {technologies.map(({ id, color, Icon, name, link }) => (
              <TechIcon key={id} backgroundColor={color} name={name} link={link}>
                <Icon />
              </TechIcon>
            ))}
          </div>
          <div>
            <h3 className={styles.subtitle}>
              Soft skills <span className={styles.icon}>🦸‍♂️</span>
            </h3>
            <div className={styles.goalsContainer}>
              <span className={styles.goal}>
                <span className={styles.icon}>👉</span> Fast adaptation to teamwork
              </span>
              <span className={styles.goal}>
                <span className={styles.icon}>👉</span> Love to learn new things
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
