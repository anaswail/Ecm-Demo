import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "motion/react";
import { colorStyles, decorations } from "../constants/AboutData";
import { useFeaturesFlow } from "../services/featuresFlow";

const Features = () => {
  const { edges, nodes, nodeTypes, onEdgesChange, onNodesChange } =
    useFeaturesFlow();

  return (
    <div className="flex justify-center items-center relative h-screen overflow-hidden">
      {/* Floating system-icon badges */}
      {decorations.map((decoration, idx) => {
        const styles = colorStyles[decoration.color];
        return (
          <motion.div
            key={idx}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            animate={{
              x: [0, 10, -8, 6, -4, 0],
              y: [0, -12, 5, -8, 3, 0],
              rotate: [0, 3, -2, 2, -1, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: decoration.delay },
              default: {
                duration: decoration.duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: decoration.delay,
              },
            }}
            style={{ willChange: "transform" }}
            className={`pointer-events-none absolute ${decoration.position} z-0 hidden sm:flex items-center justify-center border ${styles.border} ${styles.bg} rounded-md p-2`}
          >
            <img src={decoration.icon} alt="" className="w-6 h-6" />
          </motion.div>
        );
      })}
      <div className="absolute -bottom-3/4 -translate-y-1/2 z-0 -right-50 w-150 h-150 rounded-full bg-radial from-blue/10 from-0% to-blue/0 to-70%"></div>
      <div className="absolute bottom-1/4 z-0 -left-40 w-150 h-150 rounded-full bg-radial from-red/10 from-0% to-black/0 to-70%"></div>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeOrigin={[0.5, 0.5]}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        panOnScroll={false}
        fitView
        fitViewOptions={{
          padding: 0.2,
        }}
      ></ReactFlow>
    </div>
  );
};

export default Features;
