const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    const user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    const user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

//findByEmail() — usuario existe
test('findByEmail() should return user with matching email', () => {
  const user = new User(7890, "Carlos", "carlos@generation.org");
  userController.add(user);
  expect(userController.findByEmail("carlos@generation.org")).toEqual(user);
});

test('findByEmail() should return undefined for non-existent email', () => {
  expect(userController.findByEmail("noexiste@generation.org")).toBeUndefined();
});



//findById() — usuario existe
test('findById() should return user with matching id', () => {
  const user = new User(4321, "Maria", "maria@generation.org");
  userController.add(user);
  expect(userController.findById(4321)).toEqual(user);
});

test('findById() should return undefined for non-existent id', () => {
  expect(userController.findById(9999)).toBeUndefined();
});