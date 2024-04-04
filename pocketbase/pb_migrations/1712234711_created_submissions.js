/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dy6v9djy4bpqotb",
    "created": "2024-04-04 12:45:11.781Z",
    "updated": "2024-04-04 12:45:11.781Z",
    "name": "submissions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "d0jsewen",
        "name": "group",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "b1qbdh9pkpop5d2",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "aq2ezryt",
        "name": "first",
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
      },
      {
        "system": false,
        "id": "dr4r7mug",
        "name": "second",
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
      },
      {
        "system": false,
        "id": "omnwv2h1",
        "name": "third",
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
      "CREATE UNIQUE INDEX `idx_VazHQqt` ON `submissions` (`group`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "@request.auth.group ?!= group.number",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dy6v9djy4bpqotb");

  return dao.deleteCollection(collection);
})
