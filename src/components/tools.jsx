import React from 'react';
import { FaTools } from 'react-icons/fa';

export default function Tools() {
  const toolList = ['VS Code', 'Visual Studio', 'Git & GitHub', 'Postman', 'Vite', 'npm / NuGet', 'Figma', 'Swagger'];

  return (
    <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all">
      <div className="flex items-center gap-3 mb-6 text-cyan-400">
        <FaTools size={24} />
        <h3 className="text-xl font-bold text-slate-100">Tools</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {toolList.map((tool, idx) => (
          <span key={idx} className="px-3 py-1 bg-slate-900 border border-slate-700 text-sm rounded-lg text-slate-300">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}