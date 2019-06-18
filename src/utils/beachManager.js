import shortid from "shortid";

/**
 * Insert or update a beach to the list of beaches.
 * @param {Array} beachList - The list where the beach will be inserted/updated.
 * @param {Object} beach - The beach to insert/update.
 */
export function upsertBeach(beachList, beach) {
  let updatedList;
  let notification;

  if (beach.id === null) {
    notification = "Beach inserted.";
    beach.id = shortid.generate();
    updatedList = [...beachList, beach];
  } else {
    notification = "Beach updated.";
    updatedList = beachList.map(b => (b.id === beach.id ? beach : b));
  }

  return [updatedList, notification];
}

/**
 * Delete a beach from the current list.
 * @param {Array} beachList - The list where the beach will be deleted from.
 * @param {*} id - The id of the list to delete.
 */
export function deleteBeach(beachList, id) {
  const newList = beachList.filter(b => b.id !== id);
  return [newList, "Beach deleted."];
}
