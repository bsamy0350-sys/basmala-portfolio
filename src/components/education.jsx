import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

export default function Education() {
  return (
    <div className="bg-slate-800/40 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all">
      <div className="flex items-center gap-3 mb-6 text-cyan-400">
        <FaGraduationCap size={24} />
        <h3 className="text-xl font-bold text-slate-100">Education</h3>
      </div>
      <div className="space-y-4 text-slate-300">
        <div>
          <h4 className="font-semibold text-slate-100">Bachelor's Degree</h4>
          <p className="text-sm text-slate-400">Computer Science / Software Development</p>
          <p className="text-xs text-slate-500 mt-1">Specialized in Web Development, Database Management & Software Engineering</p>
        </div>
      </div>
    </div>
  );
}