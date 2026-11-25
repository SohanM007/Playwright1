import {test,expect} from '@playwright/test'
import { credentials } from '../pages/credentials'

//first time we will hardcode the value 
const url ="https://rahulshettyacademy.com/client/#/auth/login"
let email= 'm82525906@gmail.com'
let password ='sohan4@gmail'
let errormessage ="Incorrect email or password."
let invalidPassword ='sohanasfddaf'

//javascript code 
let lp
test.beforeEach(async({page})=>{
  lp = new credentials(page)
   await lp.launchUrl(url)
})

test('valid login',async({})=>{

  // const lp = new LoginPage(page)
  // await lp.launchUrl(url)
  await lp.loginIntoApplication(email,password)
  await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login',async({})=>{
  // const lp = new LoginPage(page)
  // await lp.launchUrl(url)
  await lp.loginIntoApplication(email,invalidPassword)
  await expect(lp.errorMessage).toBeVisible()
})

*/

//to run program - npx playwright test tests/loginTestPage

//inside typescript you can use javascript but inside javascript you cant use javascript cuz typescript was devloped on javascript 

//mostly we use typescript cuz its more secure language 