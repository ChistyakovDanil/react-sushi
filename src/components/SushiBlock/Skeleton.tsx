import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="sushi-block"
    speed={2}
    width={280}
    height={405}
    viewBox="0 0 280 405"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="11" rx="30" ry="30" width="246" height="200" />
    <rect x="10" y="221" rx="100" ry="100" width="246" height="27" />
    <rect x="11" y="257" rx="13" ry="13" width="246" height="80" />
    <rect x="11" y="360" rx="18" ry="18" width="60" height="27" />
    <rect x="119" y="351" rx="26" ry="26" width="135" height="45" />
  </ContentLoader>
);

export default Skeleton;
