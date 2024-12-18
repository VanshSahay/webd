"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Shield,
    Lock,
    FileCheck,
    Building2,
    Hospital,
} from "lucide-react";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

export default function Home() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-grid opacity-10" />
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={stagger}
                    className="relative z-10 container mx-auto px-4 text-center"
                >
                    <motion.h1
                        variants={fadeIn}
                        className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
                    >
                        Zero-Knowledge Proof
                        <br />
                        Authorization
                    </motion.h1>
                    <motion.p
                        variants={fadeIn}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                        Secure, private, and compliant blockchain authentication
                        for modern enterprises
                    </motion.p>
                    <motion.div
                        variants={fadeIn}
                        className="flex gap-4 justify-center"
                    >
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-lg"
                        >
                            Try Demo <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="#features"
                            className="inline-flex items-center px-8 py-4 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors text-lg"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <motion.section
                id="features"
                className="py-32 bg-background/50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-5xl font-bold text-center mb-16"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Key Features
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Shield className="h-8 w-8" />}
                            title="Enhanced Privacy"
                            description="Protect sensitive data while maintaining full verification capabilities"
                            delay={0}
                        />
                        <FeatureCard
                            icon={<Lock className="h-8 w-8" />}
                            title="Secure Authentication"
                            description="Military-grade encryption ensures foolproof authorization"
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={<FileCheck className="h-8 w-8" />}
                            title="Regulatory Compliance"
                            description="Meet strict data protection requirements across jurisdictions"
                            delay={0.4}
                        />
                    </div>
                </div>
            </motion.section>

            {/* Industries Section */}
            <motion.section
                className="py-32 bg-accent/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-5xl font-bold text-center mb-16"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Industries We Serve
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <IndustryCard
                            icon={<Building2 className="h-12 w-12" />}
                            title="Finance"
                            description="Secure transaction verification and regulatory compliance for financial institutions"
                            delay={0}
                        />
                        <IndustryCard
                            icon={<Hospital className="h-12 w-12" />}
                            title="Healthcare"
                            description="Private patient data handling and HIPAA-compliant authentication"
                            delay={0.2}
                        />
                    </div>
                </div>
            </motion.section>
        </main>
    );
}

function FeatureCard({ icon, title, description, delay }: any) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.05 }}
            className="p-8 rounded-xl bg-card hover:shadow-lg transition-all duration-300 border border-border"
        >
            <div className="mb-4 text-primary">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </motion.div>
    );
}

function IndustryCard({ icon, title, description, delay }: any) {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ scale: 1.03 }}
            className="p-8 rounded-xl bg-card hover:shadow-xl transition-all duration-300 border border-border"
        >
            <div className="mb-6 text-primary">{icon}</div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </motion.div>
    );
}
