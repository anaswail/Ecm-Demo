import {
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
} from "@xyflow/react";
import { features } from "../constants/HeroData";
import textCustomNode from "../components/flow/TextCustomNode";
import featureCustomNode from "../components/flow/FeatureCustomNode";

export const useFeaturesFlow = () => {
  const NODE_WIDTH = 150;

  const nodeTypes = {
    textCustomNode: textCustomNode,
    featureCustomNode: featureCustomNode,
  };

  const featuresNode = features.map((feature, idx) => {
    const side: "right" | "left" =
      feature.nodesPosition.x >= 0 ? "right" : "left";

    return {
      id: `feature-${idx + 1}`,
      type: "featureCustomNode",
      position: {
        x: feature.nodesPosition.x,
        y: feature.nodesPosition.y,
      },
      style: { width: NODE_WIDTH },
      data: {
        feature: feature.feature,
        title: feature.title,
        desc: feature.desc,
        color: feature.color,
        isAFeature: true,
        icon: feature.icon,
        position: side,
      },
    };
  });

  const initialNodes: Node[] = [
    {
      id: "node-0",
      type: "textCustomNode",
      position: { x: 0, y: 0 },
      data: { text: "ECM+", accent: "Features" },
    },
    ...featuresNode,
  ];

  const initialEdges: Edge[] = features.map((feature, index) => ({
    id: `e${index + 1}`,
    source: `node-0`,
    sourceHandle: feature.nodesPosition.x >= 0 ? "a" : "b",
    target: `feature-${index + 1}`,
    targetHandle: "a",
    // animated: true,
  }));

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return {
    edges,
    onEdgesChange,
    nodes,
    onNodesChange,
    nodeTypes,
    setNodes,
    setEdges,
  };
};
