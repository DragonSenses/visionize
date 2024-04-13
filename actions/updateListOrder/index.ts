// Enforce server-side execution context for security and performance
"use server";


async function performAction (data: InputType): Promise<OutputType> {

  // Return the updated list
  return {
    data: list
  };
}

export const updateListOrder = createServerAction(UpdateListOrder, performAction);