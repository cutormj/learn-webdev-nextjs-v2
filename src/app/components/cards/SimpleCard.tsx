import React from 'react';

type SimpleCardProps = {
    title: string;
    description: string;
    button: React.ReactNode;
};

const SimpleCard: React.FC<SimpleCardProps> = ({title, description, button}) => {
  return (
    <div className="card">
    <div className="card-body">
      <h2 className="card-title text-red-500">{title}</h2>
      <p>{description}</p>
      <div className="card-actions">
        {button}
      </div>
    </div>
  </div>
  );
};

export default SimpleCard;