interface User {
    id: string;
	name: string;
	age: number;
    email: string;
    password: string
}
type updateProps = Pick<User, 'name' | 'age'>

function sumOfAge(user1: updateProps, user2: updateProps) {
  return user1.age + user2.age;
};

// Example usage
const result = sumOfAge({
	name: "harkirat",
	age: 20
}, {
	name: "raman",
	age: 21
});
console.log(result); // Output: 41