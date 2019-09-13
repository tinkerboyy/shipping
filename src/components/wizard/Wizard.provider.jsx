import React, { useState , useEffect} from 'react'
import PropTypes from 'prop-types';
import WizardContext from './wizard.context';

const Provider = ({
    children,
    list,
    shipInfo,
    context: Context
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [totalSteps, setTotalSteps] = useState(list.length - 1);
    const [displaySubmit, setDisplaySubmit] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [info, setInfo] = useState(null);
    const [label, setLabel] = useState(false);
    const [cost, setCost] = useState(0);

    useEffect(() => {
        setInfo(shipInfo)
    }, [])

    const goToNextStep = () => {
        const counter = 100/totalSteps;
        setActiveIndex(prev => prev + 1)
        setPercentage(prev => prev + counter)
        setDisplaySubmit(prev => prev === totalSteps)
    }

    const goToPreviousStep = () => {
        const counter = 100/totalSteps;
        setActiveIndex(prev => prev - 1)
        setPercentage(prev => prev - counter)
       setDisplaySubmit(prev => prev === totalSteps);
    }

    const generateShippingLabel = (values) => {
        setInfo({...values});
        setLabel(true);
    }

    const generateLabel = () => {
        const shippingRate = 0.40;
        const shippingCost = info.weight * shippingRate *
           (info.shippingOption.ground ? 1 : 1.5);
        setCost(shippingCost);
    }

    const wizardContext = {
        list,
        activeIndex,
        goToNextStep,
        goToPreviousStep,
        displaySubmit,
        totalSteps,
        percentage,
        info,
        generateShippingLabel,
        label,
        cost,
        generateLabel
    };

    return(
        <WizardContext.Provider value={wizardContext}>
            {children}
        </WizardContext.Provider>
    );
}

export default Provider;