// 1.break
// stop the loop immeditly when encountered

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Loop exits when i equals 3
    }
    console.log(i);
}


// 2.continue
// skip the current iteration and moves to the next iteration when encountered

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skips when i is 3
    }
    console.log(i);
}
