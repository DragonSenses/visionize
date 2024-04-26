"use client";

import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { toast } from 'sonner';

import { ListWithCards } from '@/types/types';

import { updateCardOrder } from '@/actions/updateCardOrder';
import { updateListOrder } from '@/actions/updateListOrder';
import { useServerAction } from '@/hooks/useServerAction';
import ListForm from '@/components/list/ListForm';
import ListItem from '@/components/list/ListItem';

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}

/**
 * Reorders elements in an array by moving an element from one position to another.
 * @param list An array of elements.
 * @param startIndex The index of the element to be moved.
 * @param endIndex The target index where the element should be placed.
 * @returns A new array with the reordered elements.
 */
function reorder<Type>(list: Type[], startIndex: number, endIndex: number): Type[] {
  // Create a shallow copy of the input array
  const result = Array.from(list);

  // Remove the element at startIndex
  const [removed] = result.splice(startIndex, 1);

  // Insert the removed element back into the array at endIndex
  result.splice(endIndex, 0, removed);

  // Return the modified array
  return result;
}

export default function ListContainer({
  boardId,
  data,
}: ListContainerProps) {
  const [orderedListData, setOrderedListData] = useState(data);

  const { executeServerAction: executeUpdateListOrder } = useServerAction(updateListOrder , {
    onSuccess: () => {
      toast.success("List reordered");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const { executeServerAction: executeUpdateCardOrder } = useServerAction(updateCardOrder , {
    onSuccess: () => {
      toast.success("Card reordered");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  useEffect(() => {
    setOrderedListData(data);
  }, [data]);

  /**
   * Handle drag completion for lists and cards
   * @param result contains info on destination, source, and type of card or list
   */
  function onDragEnd(result: any) {
    const { destination, source, type } = result;

    // Case 1: No destination to drag to
    if (!destination) {
      return;
    }

    // Case 2: If dropped into the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Case 3: User drag-and-drops a list
    if (type === 'list') {
      // Reorder the list data based on the drag result
      const items = reorder(
        orderedListData,
        source.index,
        destination.index,
      ).map((item, index) => ({ ...item, order: index }));

      // Update state with newly ordered list
      setOrderedListData(items);

      executeUpdateListOrder({ items, boardId });
    }

    // User drag-and-drops a card
    if (type === 'card') {
      let newOrderedListData = [...orderedListData];

      const sourceList = newOrderedListData
        .find(list => list.id === source.droppableId);

      const destList = newOrderedListData
        .find(list => list.id === destination.droppableId);

      // If either sourceList or destList are not found
      if (!sourceList || !destList) {
        return;
      }

      // If the list is empty, then initialize an empty array of cards
      // Check if cards exist in sourceList
      if (!sourceList.cards) {
        sourceList.cards = [];
      }

      // Check if cards exists in destList
      if(!destList.cards) {
        destList.cards = [];
      }
      
      // Case 4: User moves card within the same list
      if (source.droppableId === destination.droppableId) {
        // Reorder the cards
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index,
        );

        // Change the order of each card
        reorderedCards.forEach((card, index) => {
          card.order = index;
        });

        // Assign newly ordered cards to the sourceList
        sourceList.cards = reorderedCards;

        // Update list data state to optimistically update the UI
        setOrderedListData(newOrderedListData);

        // Update card order data in the database
        executeUpdateCardOrder({
          boardId: boardId,
          items: reorderedCards
        });
      } else {
        // Case 5: User moves card to a different list
        // Handle the case for when user moves card to a different list

        // Remove card from the source list
        const [movedCard] = sourceList.cards.splice(source.index, 1);

        // Assign the new listId to the moved card
        movedCard.listId = destination.droppableId;

        // Add card to the destination list
        destList.cards.splice(destination.index, 0, movedCard);

        // Update the order for each card in the source list
        sourceList.cards.forEach((card, index) => {
          card.order = index;
        })

        // Update the order for each card in the destination list
        destList.cards.forEach((card, index) => {
          card.order = index;
        });

        // Update list data state to optimistically update the UI
        setOrderedListData(newOrderedListData);

        // Update card order data in the database
        executeUpdateCardOrder({
          boardId: boardId,
          items: destList.cards,
        });
      }
    }
  }

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Droppable
        direction='horizontal'
        droppableId='lists'
        type='list'
      >
        {(provided, snapshot) => (
          <ol
            ref={provided.innerRef}
            {...provided.droppableProps}
            className='flex h-full gap-x-3'
          >
            {
              orderedListData.map((list, index) => {
                return (
                  <ListItem
                    key={list.id}
                    index={index}
                    data={list}
                  />
                )
              })
            }
            {provided.placeholder}
            <ListForm />
            <div className='flex-shrink-0 w-1' />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  )
}
