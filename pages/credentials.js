import {Locator,Page} from '@playwright/test'
//this is javascript format 
export class credentials{
constructor(page){
  this.page =page
  this.email = this.page.locator('#userEmail')
  this.password =this.page.locator('#userPassword')
  this.loginButton = this.page.locator('#login')
  this.errorMessage = this.page.getByText('Incorrect email or password.')
  this.homePageIdentifier = this.page.locator('[routerlink ="/dashboard/"]')

}

async launchUrl(url){
  await this.page.goto(url)
}

async logInIntoApplication(email,password){
  await this.email.fill(email)
  await this.password.fill(password)
  await this.loginButton.click()
}
  
}