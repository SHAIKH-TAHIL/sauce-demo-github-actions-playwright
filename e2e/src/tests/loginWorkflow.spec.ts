import {test} from '../fixtures/customFixtures';
import { URLs } from '../constants/urls';
import setUpTestdata from '../fixtures/config';
import { LoginData } from '../fixtures/loginWorkflow/interface';

test.describe("Regression suite to verify Login workflows", () => {

  const suite = "loginWorkflow"
  const testdata: LoginData = setUpTestdata(suite);
  const validCreds = testdata.validCreds;
  const invalidCreds = testdata.invalidCreds;
  
  test.beforeEach( async ({page}) => {
    await page.goto(URLs.BASE_URL);
  });

  test("Check Login functionality", async ({browserName, loginActions}) => {
    console.log(browserName);
    await test.step("Check Invalid Login", async () => {
      await loginActions.enterUsername(invalidCreds.userName);
      await loginActions.enterPassword(invalidCreds.password);
      await loginActions.clickLoginBtn();
    });

    await test.step("Check Valid Login", async () => {
      await loginActions.enterUsername(validCreds.userName);
      await loginActions.enterPassword(validCreds.password);
      await loginActions.clickLoginBtn();
    });
  });
});
