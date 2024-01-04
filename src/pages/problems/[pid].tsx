import TopBar from '@/components/TopBar/TopBar';
import React from 'react';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return <TopBar problemPage={true} />
}
export default ProblemPage;