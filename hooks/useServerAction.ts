import { useCallback, useState } from "react";

import { ActionState, FieldErrors } from "@/lib/createServerAction";

type ServerAction<InputType, OutputType> = (data: InputType) => 
  Promise<ActionState<InputType, OutputType>>;

interface UseServerActionOptions<OutputType> {
  onComplete?: () => void;
  onError?: (error: string) => void;
  onSucces?: (data: OutputType) => void;
};

export const useServerAction = <InputType, OutputType>(
  action: ServerAction<InputType, OutputType>
) => {

  const [fieldErrors, setFieldErrors] = useState<FieldErrors<InputType> | undefined>(
    undefined
  );

  const cachedFn = useCallback(
    async (input) => {
      return input;
    }, [action]
  );

  return cachedFn;
}