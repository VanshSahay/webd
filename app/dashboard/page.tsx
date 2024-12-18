"use client";

import { motion } from 'framer-motion';
import { Users, ShieldCheck, CheckCircle } from 'lucide-react';
import { StatCard } from './components/StatCard';
import { ProofChart } from './components/ProofChart';
import { useStats } from './hooks/useStats';

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

export default function Dashboard() {
  const stats = useStats();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background p-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-4xl font-bold mb-8"
        >
          Dashboard
        </motion.h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StatCard
              title="Authorized Users"
              value={stats.authorizedUsers}
              icon={<Users className="h-8 w-8" />}
              trend="+12%"
            />
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <StatCard
              title="Proofs Generated"
              value={stats.proofsGenerated}
              icon={<ShieldCheck className="h-8 w-8" />}
              trend="+23%"
            />
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StatCard
              title="Proofs Verified"
              value={stats.proofsVerified}
              icon={<CheckCircle className="h-8 w-8" />}
              trend="+18%"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <ProofChart />
        </motion.div>
      </div>
    </motion.div>
  );
}