"use client";

import { motion } from "framer-motion";
import { ProcessStep } from "@/types/services";

interface ProcessTimelineProps {
    steps: ProcessStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#D4A646] to-[#C8A34E] hidden md:block" />

            <div className="space-y-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.step}
                        className="relative flex gap-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        {/* Step number badge */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4A646] text-[#051427] flex items-center justify-center font-bold text-lg shadow-lg z-10">
                            {step.step}
                        </div>

                        {/* Step content */}
                        <div className="flex-1 pb-8">
                            <h4 className="text-lg font-bold text-[#051427] mb-2">
                                {step.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
