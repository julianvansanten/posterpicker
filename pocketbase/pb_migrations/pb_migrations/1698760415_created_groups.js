/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b1qbdh9pkpop5d2",
    "created": "2023-10-31 13:53:35.329Z",
    "updated": "2023-10-31 13:53:35.329Z",
    "name": "groups",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pd6i3sne",
        "name": "field",
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
  const collection = dao.findCollectionByNameOrId("b1qbdh9pkpop5d2");

  return dao.deleteCollection(collection);
})
