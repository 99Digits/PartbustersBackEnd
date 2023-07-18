const express=require('express')
const router=express.Router()
 const upload=require('./multerConfig')
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
// wishlist
const AddtoWishlist=require('../wishlist/addToWishlist')

const removefromwishlist=require('../wishlist/RemoveItemfromwishlist')
const RemoveAllwish=require('../wishlist/RemoveallWishlist')
const ViewAllfromWishList=require('../wishlist/viewAllwishlist')
const WishlisttoCart=require('../wishlist/wishlistTocart')
// End
const xldata=require('../convertData/demologic')

// API
router.post('/register',register.Register)
router.post('/login',Login.userLogin)

// cart
router.put('/addtocart',AddTocart.AddToCart)
router.get('/viewallcart',IncrementCartItems.IncrementCart)
router.put('/removeallcart',RemoveAllFromCart.RemoveAllcart)
router.put('/increment',IncrementCartItems.IncrementCart)
router.put('/decrement',DecrementItemsCart.DecrementCartItems)

// End
// wishlist
router.put('/addtowishlist',AddtoWishlist.AddTowishList)
router.put('/removefromwishlist',removefromwishlist.RemoveItemfromWishList)
router.put('/removeallWish',RemoveAllwish.DeleteAllwishlist)
router.get('/viewwishlist',ViewAllfromWishList.ViewAllwishlist)
router.put('/wishlisttocart',WishlisttoCart.WishlistToCart)

router.post('/xlstorage',upload.single('file'),xldata.Datajson)
// End
module.exports=router