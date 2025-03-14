import React, { useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../CommonComponents/Button';
import HraDataTable from './HraDataTable';
import { DateContext } from '../../../utils/DateProvider';

const Summarydetails = () => {
  const navigate = useNavigate();
  const {setSelectedDate}= useContext(DateContext)
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  }, [setSelectedDate]);

  const openAssessmentPage = () => {
    navigate('/hraassessment/new');
  }
   
  return (
    <div className='px-4 md:px-10 lg:px-16 py-4 lg:py-6'>
        <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg sm:text-2xl' >List of HRA's</h1>
            <Button type="primary" onClick={openAssessmentPage}>Take New Assessment</Button>
        </div>
      <HraDataTable/>
    </div>
  );
};

export default Summarydetails;

