"use client";

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  trend: string;
}

export function StatCard({ title, value, icon, trend }: StatCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="text-primary">{icon}</div>
          <div className="flex items-center text-sm text-green-500">
            <TrendingUp className="h-4 w-4 mr-1" />
            {trend}
          </div>
        </div>
        <h3 className="text-lg font-medium text-muted-foreground mb-2">{title}</h3>
        <p className="text-3xl font-bold">{value.toLocaleString()}</p>
      </motion.div>
    </Card>
  );
}