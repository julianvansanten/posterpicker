/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jhd9xae9ht5s05v",
    "created": "2024-04-04 12:45:11.782Z",
    "updated": "2024-04-04 12:45:11.782Z",
    "name": "members",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "edqrfbus",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "batgzysx",
        "name": "group",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "b1qbdh9pkpop5d2",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_QHJEDzL` ON `members` (`email`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jhd9xae9ht5s05v");

  return dao.deleteCollection(collection);
})
