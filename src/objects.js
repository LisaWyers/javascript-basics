const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = person => {
  return person.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object(property);
};

const isOver65 = person => {
  return person.age > 65 ? true : false;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(item => item.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  return totalAge / people.length;
};

function createTalkingPerson(name, age) {
  return {
    name,
    age,
    introduce(otherPersonName) {
      return `Hi ${otherPersonName}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
}

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
