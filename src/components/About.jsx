import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hey there! I’m Krishna Chaurasiya, a recent IT graduate from
            University of Mumbai, now embarking on my Master’s journey in
            Information Technology. My toolkit includes full-stack web
            development (MERN stack), the magic of mobile app creation with
            Flutter, and the art of database management (SQL and MongoDB). When
            I’m not immersed in code, you’ll find me sketching out UI/UX designs
            in Adobe XD or crafting vector art with Adobe Illustrator.
            Passionate about innovation and lifelong learning, I’m all set to
            bring my tech expertise to impactful projects. Let’s code,
            collaborate, and caffeinate our way to success!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
