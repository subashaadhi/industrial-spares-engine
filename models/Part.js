import mongoose from 'mongoose'

const partSchema = new mongoose.Schema({
    partNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum:  ['Bearings','Motors', 'Values', 'Fasteners', 'Electrical', 'Others'],
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    },
    minStockLevel : {
        type: Number,
        required: true,
        default: 5, // Triggers a UI alerts if drops below this 
    }
},{
    timestamps: true // Automatically adds createdAt and updatedAt 
})

const Part = mongoose.model('Part', partSchema)
export default Part;