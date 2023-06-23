import AboutImg1 from '../../../../assets/images/aboutPage/about-img-1.png'
import AboutImg2 from '../../../../assets/images/aboutPage/about-img-2.png'


function AboutSection() {
  return (
    <div>
      <div>
        <h3>About us</h3>
        <h2>
          A community of innovators, building a space for African tech
          talents...
        </h2>
        <p>
          SpaceYaTech is a language and stack agnostic community of technology
          enthusiasts with membership across Kenya, Tanzania, Nigeria and
          pockets of Africa. We welcome techies from all backgrounds to build a
          vibrant community of innovators of tech, users of tech and tech
          evangelists.
        </p>
      </div>
      <div className='flex'>
        <div>
          <img src={AboutImg2} alt="space ya tech" />
        </div>
        <div>
          <p>
            Our activities center around designing and building software and
            hardware solutions for the most salient needs we see in the society,
            through a unique open-source model that gets our community members
            paid for their skills. SpaceYaTech also aims to develop capacity in
            the fields of software development and design to help build the
            future workforce and start-up founders in Africa.
          </p>
          <p>
            We aim to be an inclusive community, where the contributions of
            everyone who wishes to join and be part of a movement to transform
            Africa through, can be appreciated and celebrated.
          </p>
        </div>
      </div>
      <div className='flex'>
        <div>
          <h2>Our Mission</h2>
          <p>
            To help 10,000 young Africans to transition to tech in the next
            three years by being a pool of resources, mentorship and capacity
            building
          </p>
        </div>
        <div>
          <h2>Our Vision</h2>
          <p>
            To be the best tech community, focused on innovation and actually
            leveraging on technology to build solutions for Africa and to help
            our community members to level up their tech skills in the process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
