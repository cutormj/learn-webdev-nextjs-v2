"use client"
import React from 'react';
import Stream from '../stream/Stream';
import SimpleHero from '../heroes/SimpleHero';
import SimpleCard from '../cards/SimpleCard';
import SimpleFeatures from '../features/SimpleFeatures';

const componentMap = {
    SimpleHeroComponent: SimpleHero,
    SimpleCardComponent: SimpleCard,
    SimpleFeaturesComponent: SimpleFeatures,
};

const componentData = [
  {
    id: 1,
    name: 'Post 1',
    type: 'SimpleHeroComponent',
    showNodes: true,
    toggleButton: false,
    props: {
        heroTitle: "Data to enrich your online business",
        heroSubTitle: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
    },
    nodes: [],
  },
  {
    id: 2,
    name: 'Features Component',
    type: 'SimpleFeaturesComponent',
    showNodes: true,
    toggleButton: false,
    props: {
      title: "Everything you need to deploy your app",
      subtitle: "Deploy faster",
      description: "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
      features: [
        {
          title: "Push to deploy",
          description: "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
        },
        {
          title: "SSL certificates",
          description: "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet."
        },
    ],
    },
    nodes: []
  },
  
];

const HomePageStream: React.FC = () => (
  <Stream componentMap={componentMap} componentData={componentData} />
);

export default HomePageStream;