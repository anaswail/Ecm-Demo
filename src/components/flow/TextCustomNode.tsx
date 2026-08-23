// flow/TextCustomNode.tsx
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

type TextNode = Node<{ text: string; accent: string }, "string">;

const textCustomNode = ({ data }: NodeProps<TextNode>) => {
  return (
    <div>
      <h1 className="font-bold text-xl dark:text-red">
        {data.text} <span className="text-white">{data.accent}</span>
      </h1>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{
          background: "none",
          border: "none",
          width: "1em",
          height: "1em",
        }}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="b"
        style={{
          background: "none",
          border: "none",
          width: "1em",
          height: "1em",
        }}
      />
    </div>
  );
};

export default textCustomNode;
