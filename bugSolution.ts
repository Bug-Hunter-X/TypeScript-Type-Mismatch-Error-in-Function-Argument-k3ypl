function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane Doe", "John Smith"];

//Solution 1: Iterate through the array
for (let i = 0; i < user.length; i++) {
  console.log(greeter(user[i]));
}

// Solution 2:  Type assertion (use with caution)
console.log(greeter((user as unknown as string)[0]));

//Solution 3: Overload the function to handle both string and string arrays
function greeter(person: string): string;
function greeter(person: string[]): string[];
function greeter(person: string | string[]): string | string[] {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return person.map(p => "Hello, " + p);
  }
}

console.log(greeter(user));
console.log(greeter("John Doe"));