export default function setUpTestdata(suite: string) {
  const testDataPath = `./${suite}/testdata.ts`;
  console.log("Loading test data from:", testDataPath);
  return require(testDataPath).default;
}