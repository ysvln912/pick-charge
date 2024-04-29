import { ReactNode, useState, ReactElement } from "react";

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export function useFunnel(defaultStep: string) {
  const [step, setStep] = useState(defaultStep);

  const handleClickNext = (step: string) => {
    setStep(step);
  };

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );

    return targetStep;
  };

  return { Funnel, Step, setStep, currentStep: step, handleClickNext };
}
