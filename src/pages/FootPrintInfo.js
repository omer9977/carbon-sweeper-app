import React, { useEffect } from 'react'
import { getFootPrintWarnings } from '../services/CalculationService';
import showToast from '../utils/showToast';

export default function FootPrintInfo() {
    useEffect(async () => {
        var response = await getFootPrintWarnings();
        console.log(response);
    }, [])
    
  return (
    <div>FootPrintInfo</div>
  )
}
