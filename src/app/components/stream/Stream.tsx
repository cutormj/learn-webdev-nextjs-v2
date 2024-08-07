'use client';

import React, { useState } from 'react';
import { Node, ComponentMap } from './types';

const ComponentStreamSysteam: React.FC<{ node: Node; componentMap: ComponentMap }> = ({ node, componentMap }) => {
  const [isOpen, setIsOpen] = useState(node.showNodes);
  const Component = componentMap[node.type];

  return (
    <li key={node.name}>
      <span className="flex items-center gap-1.5 py-1">
        {/* Show button only if toggleButton is true */}
        {node.toggleButton && node.nodes && node.nodes.length > 0 && (
          <button onClick={() => setIsOpen(!isOpen)} className="p-1 -m-1">
            <code className={`size-4 text-gray-500 ${isOpen ? 'rotate-90' : ''}`}>p</code>
          </button>
        )}
        {/* The rest of the code commented out as per your request */}
        {/* <code className={`size-6 text-sky-500 ${!node.nodes || node.nodes.length === 0 ? 'ml-[22px]' : ''}`}>F</code>
        {node.name} */}
      </span>

      <div>
        {Component && <Component {...node.props} />}
      </div>

      {isOpen && node.nodes && (
        <ul className="pl-6">
          {node.nodes.map((childNode) => (
            <ComponentStreamSysteam node={childNode} componentMap={componentMap} key={childNode.name} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Stream: React.FC<{ componentMap: ComponentMap; componentData: Node[] }> = ({ componentMap, componentData }) => {
  return (
    <ul>
      {componentData.map((node) => (
        <ComponentStreamSysteam node={node} componentMap={componentMap} key={node.name} />
      ))}
    </ul>
  );
};

export default Stream;