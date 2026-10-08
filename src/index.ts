function inc(n: number): number {
  return n + 1;
}

const a = 5;
const b = inc(a);

console.dir({ a, b }); 
type Num = {
  n: number;
};

function incObject(num: Num): void {
  num.n += 1;
}

const obj: Num = { n: 5 };

incObject(obj);

console.dir(obj);
const values = [
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'word',
  3.14,
  'TypeScript',
  100,
  undefined,
  null,
  true,
  'KPI',
];
const typeCount: Record<string, number> = {
  number: 0,
  string: 0,
  boolean: 0,
  undefined: 0,
  object: 0,
};
for (const value of values) {
  const type = typeof value;

  if (type in typeCount) {
    typeCount[type] = (typeCount[type] ?? 0) + 1;
  }
}
console.dir(typeCount);
const dynamicTypeCount: Record<string, number> = {};

for (const value of values) {
  const type = typeof value;

  if (!(type in dynamicTypeCount)) {
    dynamicTypeCount[type] = 0;
  }

  dynamicTypeCount[type] = (dynamicTypeCount[type] ?? 0) + 1;
}

console.dir(dynamicTypeCount);