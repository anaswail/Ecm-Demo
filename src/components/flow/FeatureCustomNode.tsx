// flow/FeatureCustomNode.tsx
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";
import Card from "../ui/Card";

type FeatureNode = Node<
  {
    feature: string;
    title: string;
    desc: string;
    color: string;
    isAFeature: boolean;
    icon: string;
    position: "right" | "left";
  },
  "string"
>;

const featureCustomNode = ({ data }: NodeProps<FeatureNode>) => {
  return (
    <div className="relative inline-block">
      <Card
        feature={data.feature}
        title={data.title}
        desc={data.desc}
        color={data.color}
        isAFeature={data.isAFeature}
        icon={data.icon}
      />
      <Handle
        type="target"
        position={data.position === "right" ? Position.Left : Position.Right}
        id="a"
        style={{
          background: "none",
          border: "none",
          width: "1em",
          height: "1em",
          top: "50%",
        }}
      />
    </div>
  );
};

export default featureCustomNode;
