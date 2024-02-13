import { useCallback, useState } from "react";

import { ActionState, FieldErrors } from "@/lib/createServerAction";

type ServerAction<InputType, OutputType> = (data: InputType) => 
  Promise<ActionState<InputType, OutputType>>;

interface UseServerActionOptions<OutputType> {
  onComplete?: () => void;
  onError?: (error: string) => void;
  onSucces?: (data: OutputType) => void;
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

  const cachedFn = useCallback(
    async (input) => {
      return input;
    }, [action]
  );

  return cachedFn;
}