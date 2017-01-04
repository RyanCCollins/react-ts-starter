import * as React from 'react';
import { Header, Image, Hero, Button } from 'components';
import { Docs, Features } from 'containers';
const { Container, HeroImage } = require('./styles');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <Container>
        <section id="hero-section">
          <Hero>
            <HeroImage>
              <Image
                alt="Typescript logo"
                src="https://raygun.com/blog/wp-content/uploads/2016/07/Callums-post-on-Typescript.png"
              />
            </HeroImage>
            <Header color="#007acc">
              Scalable React TS Boilerplate
            </Header>
            <Button color="#c05b4d">
              Get Started
            </Button>
          </Hero>
        </section>
        <Features />
        <Docs />
      </Container>
    );
  }
}

export default Home;
