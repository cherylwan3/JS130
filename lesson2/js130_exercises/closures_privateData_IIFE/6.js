/* eslint-disable max-len */
let ItemCreator = (function() {
  function generateSNUCode(itemName, category) {
    let firstPart = itemName.split(' ').join('').slice(0, 3);
    let secondPart = category.slice(0, 2);
    return (firstPart + secondPart).toUpperCase();
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
    if (isValidItemName(itemName) && isValidCategory(category) && isValidQuantity(quantity)) {
      this.skuCode = generateSNUCode(itemName, category);
      this.itemName = itemName;
      this.category = category;
      this.quantity = quantity;
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],

  getItem(skuCode) {
    return this.items.filter(item => item.skuCode === skuCode)[0];
  },

  create(itemName, category, quantity) {
    let item = new ItemCreator(itemName, category, quantity);
    if (item.notValid) {
      return false;
    } else {
      this.items.push(item);
      return item;
    }
  },

  update(skuCode, newItem) {
    Object.assign(this.getItem(skuCode), newItem);
  },

  delete(skuCode) {
    this.items.splice(this.items.indexOf(this.getItem(skuCode)), 1);
  },

  list() {
    return this.items;
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  },
};

let ReportManager =  {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    return (function() {
      let item = this.items.getItem(skuCode);
      return {
        itemInfo: function() {
          for (let prop in item) {
            console.log(prop + ': ' + item[prop]);
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
};


ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

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