export type Node = {
    id: number;
    name: string;
    type: string;
    showNodes: boolean;
    toggleButton: boolean;
    props?: any;
    nodes?: Node[];
  };
  
  export type ComponentMap = {
    [key: string]: React.FC<any>;
  };
  