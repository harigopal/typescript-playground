interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${self.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(`Name: ${item.summary()}`);
};

printSummary(oldCivic);
