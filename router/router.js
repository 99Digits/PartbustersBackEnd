const express=require('express')
const router=express.Router()

// user datas
const register=require('../users/userRegister/registerlogic')
const Login=require('../users/userLogin/userlogin')
// end
// cart
const AddTocart=require('../cart/addTocart')
const RemoveAllFromCart=require('../cart/removeAllcart')
const IncrementCartItems=require('../cart/incrementCart')
const DecrementItemsCart=require('../cart/Decrementcart')
// 

// API
router.post('/register',register.Register)
router.post('/login',Login.userLogin)

// cart
router.put('/addtocart',AddTocart.AddToCart)
router.put('/removeallcart',RemoveAllFromCart.RemoveAllcart)
router.put('/increment',IncrementCartItems.IncrementCart)
router.put('/decrement',DecrementItemsCart.DecrementCartItems)

// End
module.exports=router