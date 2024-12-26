let n = 5;
let name = "example";
let value = [10, 20, 30, 40, 50];

function add(name, index, value) {
    console.log(`Name: ${name}, Index: ${index}, Value: ${value}`);
}

// Loop
for (let i = 0; i < n; ++i) {
    add(name, i, value[i]);
}
