import {test as base} from '@playwright/test';
import { LoginActions } from '../actions/loginActions';

type customFixture = {
    loginActions: LoginActions
}

export const test = base.extend<customFixture>({
    loginActions: async ({page}, use) => await use(new LoginActions(page))
});