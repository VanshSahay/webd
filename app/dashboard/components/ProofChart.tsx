"use client";

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', proofs: 400 },
  { name: 'Feb', proofs: 300 },
  { name: 'Mar', proofs: 600 },
  { name: 'Apr', proofs: 800 },
  { name: 'May', proofs: 1000 },
  { name: 'Jun', proofs: 1200 },
];

export function ProofChart() {
  return (
    <Card className="p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Proof Generation Trends</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
              <XAxis 
                dataKey="name" 
                stroke="hsl(var(--muted-foreground))"
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="proofs" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
                activeDot={{ r: 8, fill: "hsl(var(--primary))" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </Card>
  );
}