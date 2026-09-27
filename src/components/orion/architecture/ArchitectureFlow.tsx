"use client";

import {
  Background,
  Controls,
  ReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes } from "./nodes";
import { initialEdges } from "./edges";
import OrionNode from "./OrionNode";
import OrionEdge from "./OrionEdge";

const nodeTypes = {
  orionNode: OrionNode,
} as any;

const edgeTypes = {
  orion: OrionEdge,
};

export default function ArchitectureFlow() {
  return (
    <div className="h-[1800px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#050508]">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{
          padding: 0.25,
        }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag
        zoomOnScroll
      >
        <Background
          gap={36}
          size={1}
          color="#1e293b"
        />

        <Controls
          showInteractive={false}
          position="bottom-right"
        />
      </ReactFlow>
    </div>
  );
}