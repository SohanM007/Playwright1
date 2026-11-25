import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import data from '../testdata/login.json'

let lp:LoginPage
test.beforeEach(async ({page})=>{
  lp = new LoginPage(page)
   await lp.launchUrl(data.url)
})

test('valid login',async({page})=>{

  await lp.loginIntoApplication(data.email,data.password)
  await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login',async({page})=>{
  await lp.loginIntoApplication(data.email,data.InvalidPassword)
  await expect(lp.errorMessage).toBeVisible()
})


//practice this 2-3 times

//me :i have developed frame work from scrach. 
//interviewer : which framework?
//me: hybrid Framework
//interviewer: what is hybrideFramework ?
//me : since playwright automation is a framework .we have applied form as a design pattern using that we have created
//       different layers inside the folder and those layers and with those layers we will able to write the automation