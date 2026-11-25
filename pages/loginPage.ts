//this is called as login page class
//here all the locator and methods belongs to login page will be written here

import { Locator,Page } from "@playwright/test";
//we are importing loactor and page thats why we are using loactor and page instead of test and expect cuz we are to writting test case.

//import -importing file/data from library

// its a object which written below
export class LoginPage {
  //every locator present on the page must be written here 
  page:Page
  email:Locator
  password:Locator
  loginButton:Locator
  errorMessage:Locator
  homePageIdentifier:Locator

//create the constructor
//all locator goes inside the constructor
//whenever we create class we called constructor first
   constructor(page:Page){  //page => on Login page(tests/loginTestPage.spec.ts) we have created one page fixture that we are intiallizing here 
       this.page = page
       this.email =this.page.getByPlaceholder('email@example.com')
       this.password =this.page.locator('#userPassword')
       this.loginButton = this.page.locator('#login')
       this.errorMessage = this.page.locator('#toast-container')
       this.homePageIdentifier =this.page.locator('[routerlink ="/dashboard/"]')

}
 
//method or action 
//any hardcoded value will not be present inside your testclass
async launchUrl(url:string){ //we create the method with async keyword followed by method name~~
  await this.page.goto(url)
}
async loginIntoApplication(email:string,password:string){
   await this.email.fill(email)
   await this.password.fill(password)
   await this.loginButton.click()

   //another way to wright the same is 
   /*
   async login(username:string){
    await this.email.fill(username)
   }
  async pass(password:string){
  await this.email.fill(password)
  }
  async loginButton(loginButton:string){
  await this.email.fill(loginButton)
  }

   */


}

}