//here we need to import the page class and use method and locators
/*
const url ="https://rahulshettyacademy.com/client/#/auth/login"
let email= 'm82525906@gmail.com'
le password ='sohan4@gmail'
let errormessage ="Incorrect email or password."

*/

//this whole thing is only for reference main code is inside - loginPageTestUsingJson.spec.ts
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage' //we import this cuz we required locator which is present inside that file

//first time we will hardcode the value 
const url ="https://rahulshettyacademy.com/client/#/auth/login"
let email= 'm82525906@gmail.com'
let password ='sohan4@gmail'
let errormessage ="Incorrect email or password."
let invalidPassword ='sohanasfddaf'

test('valid login',async({page})=>{
 
  //we are creating object using new keyword to access the class from loginPage.ts
  const lp = new LoginPage(page)
  await lp.launchUrl(url)
  await lp.loginIntoApplication(email,password)
  await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login',async({page})=>{
  const lp = new LoginPage(page)
  await lp.launchUrl(url)
  await lp.loginIntoApplication(email,invalidPassword)
  await expect(lp.errorMessage).toBeVisible()
})


// we can write it in one place and use it by using hooks -

// this line of code we are using twice in a code  
// const lp = new LoginPage(page)
  //await lp.launchUrl(url)


/*
let lp:LoginPage  //we are creating refrence outside the page so we can access it anywhere
test.beforeEach(async ({page})=>{  //before executing each testcase its gonna excutie first
  lp =new LoginPage(page) 
   await lp.launchUrl(url)
})

test('valid login',async({page})=>{
  await lp.loginIntoApplication(email,password)
  await expect(lp.homePageIdentifier).toBeVisible()
})

test('invalid login',async({page})=>{
  await lp.loginIntoApplication(email,invalidPassword)
  await expect(lp.errorMessage).toBeVisible()
})

*/

//to run program - npx playwright test tests/loginTestPage