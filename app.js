const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      if (this._courses.appetizers.length) {
        return this._courses.appetizers;
      } else {
        return 'there are no appetizers on the menu'
      }
    },
      get mains() {
      if (this._courses.mains.length > 0) {
        return this._courses.mains;
      } else {
        return 'there are no mains on the menu'
      }
    },
    get desserts() {
      if (this._courses.desserts.length > 0) {
        return this._courses.desserts;
      } else {
        return 'there are no desserts on the menu'
      }
    },
    set appetizers(newAppy) {
      this._courses.appetizers.push(newAppy);
    },
    set mains(newMain) {
      this._courses.mains.push(newMain);
    },
    set desserts(newDessert) {
      this._courses.desserts.push(newDessert);
    },
    get courses() {
      return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      let dish = {
        dishName,
        dishPrice
      };
      this._courses[courseName].push(dish);
    },
    
    getRandomDishFromCourse(courseName) {
      let dishes = []; 
      dishes = this._courses[courseName];
      let randNum = Math.random() * dishes.length;
      randNum = Math.floor(randNum)
      return dishes[randNum];
    },
    
      generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const meal = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      
      return `Your meal starts with ${appetizer.dishName}, followed by ${meal.dishName}, with ${dessert.dishName} for dessert, and will cost $${appetizer.dishPrice + meal.dishPrice + 	dessert.dishPrice}.`
    }
  };
  
  menu.addDishToCourse('appetizers', 'fruit', 5.00);
  menu.addDishToCourse('appetizers', 'salad', 7.00);
  menu.addDishToCourse('appetizers', 'vegetable soup', 5.50);
  menu.addDishToCourse('mains', 'half roast chicken', 24.00);
  menu.addDishToCourse('mains', 'fried pizza', 16.00);
  menu.addDishToCourse('mains', 'veggie steak', 17.00);
  menu.addDishToCourse('desserts', 'chocolate pie', 8.00);
  menu.addDishToCourse('desserts', 'giant cookie', 9.00);
  menu.addDishToCourse('desserts', 'diet soda', 1.00);
  
  
  //const myAppy = menu.getRandomDishFromCourse('appetizers');
  //const myMain = menu.getRandomDishFromCourse('mains');
  //const myDessert = menu.getRandomDishFromCourse('desserts');
  const meal = menu.generateRandomMeal();
  
  //console.log(myAppy);
  //console.log(myMain);
  //console.log(myDessert);
  
  console.log(meal)
  //console.log(menu.courses)
  