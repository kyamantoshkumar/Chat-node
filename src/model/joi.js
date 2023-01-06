const router = require("../routes/auth")
const User = require("./validate")
const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
    })

return schema.validate(data)
module.exports = router

