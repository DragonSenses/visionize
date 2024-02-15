import { useCallback, useState } from "react";

import { ActionState, FieldErrors } from "@/lib/createServerAction";

type ServerAction<InputType, OutputType> = (data: InputType) => 
  Promise<ActionState<InputType, OutputType>>;

interface UseServerActionOptions<OutputType> {
  onComplete?: () => void;
  onError?: (error: string) => void;
  onSuccess?: (data: OutputType) => void;
};

export const useServerAction = <InputType, OutputType> (
  action: ServerAction<InputType, OutputType>,
  options: UseServerActionOptions<OutputType> = {},
) => {

  const [data, setData] = useState<OutputType | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors<InputType> | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const executeServerAction = useCallback(
    async (input: InputType) => {
      setIsLoading(true);

      try {
        const actionOutput = await action(input);

        if (!actionOutput) {
          return;
        }

        if (actionOutput.error) {
          setError(actionOutput.error);
          options.onError?.(actionOutput.error);
        }

        if (actionOutput.fieldErrors) {
          setFieldErrors(actionOutput.fieldErrors);
        }
        
        if(actionOutput.data) {
          setData(actionOutput.data);
          options.onSuccess?.(actionOutput.data);
        }

      } catch (error) {
        console.error(`An error occurred during a server action.\n${error}`);
      } finally {
        setIsLoading(false);
        options.onComplete?.();
      }

      return input;
    }, [action, options]
  );

  return {
    executeServerAction,
    data,
    error,
    fieldErrors,
    isLoading,
  };
}