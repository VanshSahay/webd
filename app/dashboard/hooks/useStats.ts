"use client";

import { useState } from 'react';

interface Stats {
  authorizedUsers: number;
  proofsGenerated: number;
  proofsVerified: number;
}

export function useStats() {
  const [stats] = useState<Stats>({
    authorizedUsers: 1234,
    proofsGenerated: 5678,
    proofsVerified: 4321,
  });

  return stats;
}