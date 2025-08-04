// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Frameworks/Libraries' 
  | 'AI/ML' 
  | 'Blockchain/Web3.0' 
  | 'Cloud/DevOps' 
  | 'Concepts';

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'Java', category: 'Languages', logoKey: 'java' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
 ],

// export const skills: Record<SkillCategory, Skill[]> = {
//   'Languages': [
//     { name: 'C++', category: 'Languages', logoKey: 'cplusplus' },
//     { name: 'Java', category: 'Languages', logoKey: 'java' },
//     { name: 'Python', category: 'Languages', logoKey: 'python' },
//     { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
//     { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
//     { name: 'Dart', category: 'Languages', logoKey: 'dart' },
//     { name: 'Kotlin', category: 'Languages', logoKey: 'kotlin' },
//     { name: 'Solidity', category: 'Languages', logoKey: 'solidity' },
//     { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
//     { name: 'Rust', category: 'Languages', logoKey: 'rust' },
//     { name: 'Go', category: 'Languages', logoKey: 'go' },
//     { name: 'Ruby', category: 'Languages', logoKey: 'ruby' },
//     { name: 'Swift', category: 'Languages', logoKey: 'swift' },
//   ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'React Native', category: 'Frameworks/Libraries', logoKey: 'reactnative' },
    { name: 'Redux Toolkit', category: 'Frameworks/Libraries', logoKey: 'redux' },
    { name: 'Vue.js', category: 'Frameworks/Libraries', logoKey: 'vuejs' },
    { name: 'Vanilla.js', category: 'Frameworks/Libraries', logoKey: 'javascript' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Expo', category: 'Frameworks/Libraries', logoKey: 'expo' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
    { name: 'WebGL', category: 'Frameworks/Libraries', logoKey: 'webgl' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
    { name: 'Flask', category: 'Frameworks/Libraries', logoKey: 'flask' },
    { name: 'Android SDK', category: 'Frameworks/Libraries', logoKey: 'android' },
    { name: 'Three.js', category: 'Frameworks/Libraries', logoKey: 'threejs' },
    { name: 'Angular', category: 'Frameworks/Libraries', logoKey: 'angularjs' },
    { name: 'Django', category: 'Frameworks/Libraries', logoKey: 'django' },
    { name: 'Spring Boot', category: 'Frameworks/Libraries', logoKey: 'spring' },
    { name: 'Prisma', category: 'Frameworks/Libraries', logoKey: 'prisma' },
    { name: 'Material UI', category: 'Frameworks/Libraries', logoKey: 'materialui' },
    { name: 'Figma', category: 'Frameworks/Libraries', logoKey: 'figma' },
  ],

  'AI/ML': [
    { name: 'TensorFlow', category: 'AI/ML', logoKey: 'tensorflow' },
    { name: 'PyTorch', category: 'AI/ML', logoKey: 'pytorch' },
    { name: 'Supervised Learning', category: 'AI/ML', logoKey: 'python' },
    { name: 'Deep Learning', category: 'AI/ML', logoKey: 'tensorflow' },
    { name: 'Neural Networks', category: 'AI/ML', logoKey: 'python' },
    { name: 'pandas', category: 'AI/ML', logoKey: 'pandas' },
    { name: 'scikit-learn', category: 'AI/ML', logoKey: 'python' },
    { name: 'Data Visualization', category: 'AI/ML', logoKey: 'jupyter' },
  ],
'Blockchain/Web3.0': [
  { name: 'Solana',        category: 'Blockchain/Web3.0', logoKey: 'solana' },
  { name: 'Web3.js',       category: 'Blockchain/Web3.0', logoKey: 'javascript' },
  { name: 'Ethers.js',     category: 'Blockchain/Web3.0', logoKey: 'ethereum' },
  { name: 'IPFS',          category: 'Blockchain/Web3.0', logoKey: 'ipfs' },
  { name: 'Polygon',       category: 'Blockchain/Web3.0', logoKey: 'polygon' },
  { name: 'Ethereum',      category: 'Blockchain/Web3.0', logoKey: 'ethereum' },
  { name: 'Aptos',         category: 'Blockchain/Web3.0', logoKey: 'aptos' },
  { name: 'Move',          category: 'Blockchain/Web3.0', logoKey: 'aptos' },
  { name: 'Smart Contracts', category: 'Blockchain/Web3', logoKey: 'solidity' },
  { name: 'Rust',          category: 'Blockchain/Web3.0', logoKey: 'rust' },
  { name: 'Solidity',      category: 'Blockchain/Web3.0', logoKey: 'solidity' },
  { name: 'MetaMask',      category: 'Blockchain/Web3.0', logoKey: 'metamask' },
],

  'Cloud/DevOps': [
    { name: 'Amazon Web Services', category: 'Cloud/DevOps', logoKey: 'aws' }, // corrected logoKey
    { name: 'Azure', category: 'Cloud/DevOps', logoKey: 'azure' }, // replaced GCP with Azure
    { name: 'Docker', category: 'Cloud/DevOps', logoKey: 'docker' },
    { name: 'Kubernetes', category: 'Cloud/DevOps', logoKey: 'kubernetes' },
    { name: 'Jenkins', category: 'Cloud/DevOps', logoKey: 'jenkins' },
    { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
    { name: 'MongoDB', category: 'Cloud/DevOps', logoKey: 'mongodb' },
    { name: 'PostgreSQL', category: 'Cloud/DevOps', logoKey: 'postgresql' },
    { name: 'NoSQL', category: 'Cloud/DevOps', logoKey: 'nosql' }, // added NoSQL
    { name: 'MySQL', category: 'Cloud/DevOps', logoKey: 'mysql' }, // added MySQL
  ],

//   'Concepts': [
//     { name: 'System Design', category: 'Concepts', logoKey: 'github' },
//     { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' },
//     { name: 'Distributed Systems', category: 'Concepts', logoKey: 'github' },
//     { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
//     { name: 'Microservices', category: 'Concepts', logoKey: 'docker' },
//     { name: 'Security', category: 'Concepts', logoKey: 'github' },
//   ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};