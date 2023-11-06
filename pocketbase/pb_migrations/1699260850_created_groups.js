/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b1qbdh9pkpop5d2",
    "created": "2023-11-06 08:54:10.844Z",
    "updated": "2023-11-06 08:54:10.844Z",
    "name": "groups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pd6i3sne",
        "name": "number",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "4ontbfjo",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 5,
          "max": 50,
          "pattern": "^[a-zA-Z ,.]*$"
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id ?= @collection.users.id",
    "updateRule": "@request.auth.id ?= @collection.users.id",
    "deleteRule": "@request.auth.id ?= @collection.users.id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b1qbdh9pkpop5d2");

  return dao.deleteCollection(collection);
})
