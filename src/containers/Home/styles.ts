const styled = require('styled-components').default;

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

export const HeroImage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

export const FeaturesSection = styled.section`
  width: 100%;
  background: ${props => props.background}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeatureSectionInner = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  padding: 60px 120px;
`;

export const Feature = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`

`;

export const FeatureImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
`;
