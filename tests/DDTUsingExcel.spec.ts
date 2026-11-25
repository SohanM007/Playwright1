import path from 'node:path';
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import { DashboardPage } from "../pages/dashboardPage";
import { excelUtils } from "../utils/excelUtils";



//provide the filepath:
const filepath = path.join(__dirname,"../testdata/login.xlsx.xlsx")
console.log(__dirname)

//take the sheetname from the excel::
const sheetname ="LoginData"
let datas:any    //if dont have anything that time use amy

try{
  datas = excelUtils.getExcelData(filepath,sheetname)
}catch(error){
  console.log(error)
}

let lp:LoginPage
let dp:DashboardPage

test.beforeEach(async({page})=>{
  lp = new LoginPage(page)
  dp = new DashboardPage(page) 
})


for(let product of datas){
  test(`Add an item to cart ${product.productName}`,async()=>{
    await lp.launchUrl(product.url)
    await lp.loginIntoApplication(product.username,product.password)
    await expect(lp.homePageIdentifier).toBeVisible()
    await dp.searchAndAddProduct(product.productName,1)
    await expect(dp.addToCartMessage).toContainText(/Product Added To Cart/)
    await dp.navigateToCart()
    
  })
}