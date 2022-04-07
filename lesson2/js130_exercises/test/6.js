/* eslint-disable max-len */

/**
 * Item required info:
 *  > Item name: This is the name of the item.
 *  -  minimum of 5 characters, not including spaces
 * > SKU code
 *  - 3 letters of the item and the first 2 letters of the category
 *  - spaces doesnt count
 * --------------------------------
 * ItemManager:
 * - store items 
 * - create(itemName, category, quantity)
 * 
 * -  update(skuCode, objW/NewInfo) 
 *    - updates info
 * - delete(skuCode)
 *    - deletes item from list
 * - items
 *    - property, contains list of all items
 * - inStock()
 *    - list all the items that have a quantity greater than 0.
 * - itemsInCategory()
 *    -  list all the items for a given category
 * ------------------------------------
*/

let Item = (function() {
  function makeSKUCode(itemName, category) {
    let firstPart =  itemName.split(' ').join('').slice(0, 3);
    let secondPart = category.slice(0, 2);
    let name = (firstPart + secondPart).toUpperCase()
    return name;
  }

  function isValidItemName(itemName) {
    return itemName.split(' ').join('').length >= 5;
  }

  function isValidCategory(category) {
    return category.split(' ').length === 1 && category.length >= 5;
  }

  function isValidQuantity(quantity) {
    return quantity !== undefined;
  }

  return function(itemName, category, quantity) {
    if (isValidItemName(itemName) 
      &&isValidCategory(category)
      && isValidQuantity(quantity)) {
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
      this.skuCode = makeSKUCode(itemName, category);
    } else {
      return { invalid: true};
    }
  };
})();

let ItemManager = {
  items: [],

  create(itemName, category, quantity) {
    let item = new Item(itemName, category, quantity);
    if (item.invalid) {
      return false;
    } else {
      this.items.push(item);
      return item;
    }
  },

  getItem(skuCode) {
    return this.items.filter(item => item.skuCode === skuCode)[0];
  },

  update(skuCode, newItem) {
    Object.assign(this.getItem(skuCode), newItem);
  },

  delete(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
};

let ReportManager = {
  init(itemManager) {
    this.items = itemManager; 
  },

  createReporter(skuCode) {
    return (function() {
      let item = this.items.getItem(skuCode);
      return {
        itemInfo: function() {
          for (let key in item) {
            console.log(key + ': ' + item[key]);
          }
        },
      };
    }).bind(this)();
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => {
      return item.itemName;
    }).join(', '));
  },
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10